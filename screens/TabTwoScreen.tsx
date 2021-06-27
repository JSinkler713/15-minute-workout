import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Timer from '../components/Timer';
// import chooseExercise from '../utils/chooseExercise'
import Exercises from '../constants/Exercises'

console.log(Exercises)

type Exercise = {
  name: string;
  reps: number;
}

//const arrayOfExercises: Exercise[] = [{name: 'pushups', reps: 10}, {name: 'squats', reps: 15}, {name: 'rope climbers', reps: 30}]

function chooseExercises(exercises: Exercise[]): Exercise[] {
  let chosenExercises: Exercise[] = []
  for (let i=0; i<4; i++) {
    let randomNum = Math.floor(Math.random() * exercises.length)
    let exercise:Exercise = exercises[randomNum]
    // remove from exercise so not chosen twice
    exercises = exercises.filter(item => item.name !== exercise.name)
    chosenExercises.push(exercise)
    console.log(chosenExercises)
  }
  return chosenExercises
}

export default function TabTwoScreen() {
  const [exercise, setExercise] = React.useState([] as Exercise[])
  const [startTimer, setStartTimer] = React.useState(false)
  const [newExercises, setNewExercises] = React.useState(false)

  React.useEffect(()=> {
    let chosenExercises: Exercise[] = chooseExercises(Exercises)
    setExercise(chosenExercises)
  }, [])

  React.useEffect(()=> {
    if (newExercises === true) {
      let chosenExercises: Exercise[] = chooseExercises(Exercises)
      setExercise(chosenExercises)
      setNewExercises(false)
    }
  }, [newExercises])

  let exercises = exercise.map((item, i) => (
    <View key={`${item.name}-exercise`}>
      <Text style={styles.exerciseTitle}>{item.name}</Text>
      <Text style={styles.reps}>reps {item.reps}</Text>
      {(i !== 3) ?(
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      ) :<View /> }
    </View>
  ))

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's exercises</Text>
      <Button title='Get different exercises' onPress={()=> { setNewExercises(true)}} />
      <View style={styles.bigSeperator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.exerciseContainer}>
        {exercises}
      </View>
      <View style={styles.bigSeperator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Timer done={false} startTime={startTimer} />
      <Button color='green' onPress={()=> { setStartTimer(true)}} title='Start Workout' />
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    marginBottom: 2,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseTitle: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center'
  },
  reps: {
    fontSize: 16,
    textAlign: 'center'
  },
  bigSeperator: {
    marginVertical: 8,
    height: 2,
    width: '90%',
  },
  separator: {
    marginVertical: 2,
    alignSelf: 'center',
    height: 1,
    width: '80%',
  },
  text: {
    marginBottom: 10,
  },
  exerciseButton: {
    marginVertical: 8,
  }
});
