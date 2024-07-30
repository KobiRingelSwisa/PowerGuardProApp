import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

const ReportsScreen = () => {
  const [selectedReport, setSelectedReport] = useState('Daily');

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'Daily':
        return <Text style={globalStyles.reportText}>This is the Daily Report</Text>;
      case 'Weekly':
        return <Text style={globalStyles.reportText}>This is the Weekly Report</Text>;
      case 'Monthly':
        return <Text style={globalStyles.reportText}>This is the Monthly Report</Text>;
      default:
        return <Text style={globalStyles.reportText}>Select a report to view</Text>;
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Reports</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={() => setSelectedReport('Daily')}>
          <Text style={globalStyles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => setSelectedReport('Weekly')}>
          <Text style={globalStyles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => setSelectedReport('Monthly')}>
          <Text style={globalStyles.buttonText}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.reportContainer}>
        {renderReportContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default ReportsScreen;
