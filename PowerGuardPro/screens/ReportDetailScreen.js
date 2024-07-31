// screens/ReportDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const ReportDetailScreen = ({ route, navigation }) => {
  const { reportType } = route.params;

  const renderReportContent = () => {
    switch (reportType) {
      case 'Daily':
        return <Text style={styles.reportText}>This is the detailed Daily Report</Text>;
      case 'Weekly':
        return <Text style={styles.reportText}>This is the detailed Weekly Report</Text>;
      case 'Monthly':
        return <Text style={styles.reportText}>This is the detailed Monthly Report</Text>;
      default:
        return <Text style={styles.reportText}>Unknown report type</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reportType} Report</Text>
      {renderReportContent()}
      <Button title="Back" onPress={() => navigation.goBack()} color="#d32f2f" />
    </View>
  );
};

export default ReportDetailScreen;
