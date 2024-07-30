// screens/ReportsScreen.js
import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

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

export default ReportsScreen;
