import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeviceControlScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Control</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DeviceControlScreen;
