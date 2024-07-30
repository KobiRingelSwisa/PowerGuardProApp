import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Reports')}>
        <Text style={globalStyles.buttonText}>Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={globalStyles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('DeviceControl')}>
        <Text style={globalStyles.buttonText}>Device Control</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
