// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/sub-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Home</Text>
      <Button title="Reports" onPress={() => navigation.navigate('Reports')} color="#d32f2f" />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} color="#d32f2f" />
      <Button title="Device Control" onPress={() => navigation.navigate('DeviceControl')} color="#d32f2f" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 100,
    textAlign: 'center',
    color: '#d32f2f',
  },
});

export default HomeScreen;
