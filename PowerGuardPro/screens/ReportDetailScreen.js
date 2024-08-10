// screens/ReportDetailScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import styles from './styles'; // Import existing styles

const ReportDetailScreen = ({ route, navigation }) => {
  const { reportType } = route.params;

  // Dummy data for different report types
  const data = {
    Daily: [
      { time: '12 AM', value: '20 kWh' },
      { time: '4 AM', value: '45 kWh' },
      { time: '8 AM', value: '28 kWh' },
      { time: '12 PM', value: '80 kWh' },
      { time: '4 PM', value: '99 kWh' },
      { time: '8 PM', value: '43 kWh' },
    ],
    Weekly: [
      { day: 'Monday', value: '50 kWh' },
      { day: 'Tuesday', value: '20 kWh' },
      { day: 'Wednesday', value: '2 kWh' },
      { day: 'Thursday', value: '86 kWh' },
      { day: 'Friday', value: '71 kWh' },
      { day: 'Saturday', value: '100 kWh' },
      { day: 'Sunday', value: '50 kWh' },
    ],
    Monthly: [
      { week: 'Week 1', value: '30 kWh' },
      { week: 'Week 2', value: '40 kWh' },
      { week: 'Week 3', value: '60 kWh' },
      { week: 'Week 4', value: '70 kWh' },
    ],
  };

  // Choose data based on reportType
  const reportData = data[reportType] || [];

  const renderItem = ({ item }) => {
    return (
      <View style={reportStyles.item}>
        <Text style={reportStyles.itemText}>
          {reportType === 'Daily' ? item.time : reportType === 'Weekly' ? item.day : item.week}:
        </Text>
        <Text style={reportStyles.itemText}>{item.value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reportType} Report</Text>
      <FlatList
        data={reportData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={reportStyles.list}
      />
      <Button title="Back" onPress={() => navigation.goBack()} color="#d32f2f" />
    </View>
  );
};

const reportStyles = StyleSheet.create({
  list: {
    width: '100%',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ReportDetailScreen;