// components/ReportContent.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Correct import

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#d32f2f',
  backgroundGradientFrom: '#d32f2f',
  backgroundGradientTo: '#ff6347',
  decimalPlaces: 2, // Display decimal places
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const data = {
  daily: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  },
  weekly: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [65, 59, 80, 81],
        color: (opacity = 1) => `rgba(34, 202, 236, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  },
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [90, 120, 130, 100, 140, 160],
        color: (opacity = 1) => `rgba(255, 206, 86, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  },
};

const ReportContent = ({ reportType }) => {
  const reportData = data[reportType.toLowerCase()] || data['daily'];

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Power Consumption Over Time</Text>
      <LineChart
        data={reportData}
        width={screenWidth - 40} // Width from react-native
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <Text style={styles.subtitle}>Summary Statistics</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Total Consumption: 450 kWh</Text>
        <Text style={styles.stat}>Average Consumption: 65 kWh</Text>
        <Text style={styles.stat}>Peak Consumption: 120 kWh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 20,
  },
  stat: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default ReportContent;
