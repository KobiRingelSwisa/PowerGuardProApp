// components/Loader.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../screens/styles';
import LottieView from 'lottie-react-native';


const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <LottieView
        source={require('../assets/loader.json')}
        autoPlay={true}
        loop={true}
        style={styles.lottie}
      />
    </View>
  );
};

export default Loader;
