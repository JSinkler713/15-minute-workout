import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Timer from '../components/Timer';

type Exercise = {
  name: string;
  reps: number;
}

const arrayOfExercises: Exercise[] = [{name: 'pushups', reps: 10}, {name: 'squats', reps: 15}, {name: 'rope climbers', reps: 30}]

function chooseExercise(): Exercise {
  let randomNum: number = Math.floor(Math.random() * 3)
  let exercise = arrayOfExercises[randomNum]
  return exercise
}

export default function TabTwoScreen() {
  const [exercise, setExercise] = React.useState({} as Exercise)
  React.useEffect(()=> {
    let chosenExercise: Exercise = chooseExercise()
    setExercise(chosenExercise)
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey this is your exercise</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.title}>reps {exercise.reps}</Text>
      <Button onPress={()=> {}} title='Start Workout' />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Timer done={false} startTime={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
