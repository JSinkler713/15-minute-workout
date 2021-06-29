import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Audio } from "expo-av";

const Timer = ({ done, updateTime, startTime, pause, restart }) => {
  const [sound, setSound] = useState<any>();
  const [time, setTime] = useState(15 * 60);
  // timeRef.current starts at 15 minutes
  const [intervalId, setIntervalId] = useState();
  let timeRef = useRef(15 * 60);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
                      require("../assets/sounds/Done.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  // should run when startTime changes
  useEffect(() => {
    if (!done && startTime) {
      const timerId = setInterval(() => {
        console.log("updating time");
        timeRef.current--;
        // pass it back up to App
        //updateTime(timeRef.current)
        setTime(timeRef.current);
      }, 1000);
      setIntervalId(timerId);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [startTime]);

  useEffect(() => {
    if (time === 0) {
      console.log("Its time");
      clearInterval(intervalId);
      //playSound
      playSound();
    } else {
      console.log(time);
      console.log(timeRef);
    }
  }, [setTime, time]);

  return (
    <View>
      <Text style={styles.timerStyle}>
        {Math.floor(time / 60)}:{Math.floor((time % 60) / 10)}
        {time % 10}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerStyle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Timer;
