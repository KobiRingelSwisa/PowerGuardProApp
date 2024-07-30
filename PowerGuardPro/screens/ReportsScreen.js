// screens/ReportsScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ReportsScreen = () => {
  const [selectedReport, setSelectedReport] = useState('Daily');

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'Daily':
        return <Text style={styles.reportText}>This is the Daily Report</Text>;
      case 'Weekly':
        return <Text style={styles.reportText}>This is the Weekly Report</Text>;
      case 'Monthly':
        return <Text style={styles.reportText}>This is the Monthly Report</Text>;
      default:
        return <Text style={styles.reportText}>Select a report to view</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/sub-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Reports</Text>
      <View style={styles.buttonContainer}>
        <Button title="Daily" onPress={() => setSelectedReport('Daily')} color="#d32f2f" />
        <Button title="Weekly" onPress={() => setSelectedReport('Weekly')} color="#d32f2f" />
        <Button title="Monthly" onPress={() => setSelectedReport('Monthly')} color="#d32f2f" />
      </View>
      <View style={styles.reportContainer}>
        {renderReportContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#d32f2f',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  reportContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportText: {
    fontSize: 18,
  },
});

export default ReportsScreen;
