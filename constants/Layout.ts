import { Dimensions } from 'react-native';
import * as Device from 'expo-device';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isAndroid = (Device.osName === 'Android')
console.log(isAndroid)
const osName = Device.osName

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isAndroid: isAndroid,
  osName: osName,
};
