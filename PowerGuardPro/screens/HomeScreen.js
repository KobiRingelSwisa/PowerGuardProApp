// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Image source={require('../assets/sub-logo.png')} style={styles.homeLogo} />
      <Text style={styles.homeTitle}>Home</Text>
      <Button title="Reports" onPress={() => navigation.navigate('Reports')} color="#d32f2f" />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} color="#d32f2f" />
      <Button title="Device Control" onPress={() => navigation.navigate('DeviceControl')} color="#d32f2f" />
    </View>
  );
};

export default HomeScreen;
