import * as React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <LottieView source={require('./loader.json')} autoPlay loop/>
    </View>
  );
}
