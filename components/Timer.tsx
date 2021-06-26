import React, {useState, useRef, useEffect} from 'react'
import {View, Text} from 'react-native'

const Timer = ({done, updateTime, startTime, pause, restart})=> {
  const [time, setTime] = useState(15*60)
  // timeRef.current starts at 15 minutes
  const [intervalId, setIntervalId] = useState<number>()
  let timeRef = useRef(15*60)


  useEffect(()=> {
    if (!done && startTime) {
      const timerId: number = window.setInterval(()=> {
        console.log('updating time')
        timeRef.current--
        // pass it back up to App
        //updateTime(timeRef.current)
        setTime(timeRef.current)
      }, 1000)
      setIntervalId(timerId)
      return ()=> {clearInterval(timerId)}
    }
  }, [startTime])

  useEffect(()=> {
    if (time === 0) {
      console.log('Its time')
      clearInterval(intervalId)
    } else {
      console.log(time)
      console.log(timeRef)
    }
  }, [setTime, time])

  return(
    <View>
      <Text>{Math.floor(time / 60)}:{Math.floor((time % 60)/10)}{time % 10}</Text>
    </View>
  )
}

export default Timer

