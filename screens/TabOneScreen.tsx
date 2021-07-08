import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from '../constants/Layout';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TabTwoScreen from './TabTwoScreen'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";


export default function TabOneScreen({navigation}) {

  React.useEffect(()=> {
      const setDevice = async()=> {
        await setTestDeviceIDAsync('EMULATOR');
      }
      setDevice()
  }, [])

  function bannerError() {
    console.log('oops')
    return
  }
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Time to Workout</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title='Get Workout' onPress={()=> {navigation.navigate('Workout')}}>Get Exercises</Button>
      <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          // Test ID, Replace with your-admob-unit-id
          // testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={bannerError}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: -1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
});
