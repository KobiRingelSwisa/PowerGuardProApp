// screens/ReportsScreen.js
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

const ReportsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/sub-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Reports</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Daily"
          onPress={() => navigation.navigate('ReportDetail', { reportType: 'Daily' })}
          color="#d32f2f"
        />
        <Button
          title="Weekly"
          onPress={() => navigation.navigate('ReportDetail', { reportType: 'Weekly' })}
          color="#d32f2f"
        />
        <Button
          title="Monthly"
          onPress={() => navigation.navigate('ReportDetail', { reportType: 'Monthly' })}
          color="#d32f2f"
        />
      </View>
    </View>
  );
};

export default ReportsScreen;
