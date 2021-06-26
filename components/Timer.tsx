import {useState, useRef, useEffect} from 'react'
import {View, Text} from 'react-native'

const Timer = ({done, updateTime, startTime})=> {
  const [time, setTime] = useState(15*60)
  // timeRef.current starts at 15 minutes
  const [intervalId, setIntervalId] = useState<number>()
  let timeRef = useRef(0)

  useEffect(()=> {
    if (startTime) {
      const timerId: number = window.setInterval(()=> {
        console.log('updating time')
        timeRef.current--
        // pass it back up to App
        updateTime(timeRef.current)
        setTime(timeRef.current)
      }, 1000)
      setIntervalId(timerId)
      return ()=> {clearInterval(timerId)}
    }
  }, [startTime])

  useEffect(()=> {
    // if done typing
    // stop interval
    // get time
    //
    if (done == true) {
      console.log('It took' + time + 'seconds')
      clearInterval(intervalId)

    }
  }, [done])

  return(
    <View>
      <Text>{Math.floor(time / 60)}:{Math.floor((time % 60)/10)}{time % 10}</Text>
    </View>
  )
}

export default Timer

