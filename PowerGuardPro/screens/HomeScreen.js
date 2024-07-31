import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require('../assets/sub-logo.png')} style={styles.homeLogo} />
          <Text style={styles.homeTitle}>Home</Text>
        </View>

        <View style={styles.metricsContainer}>
          <View style={styles.metricBox}>
            <Text style={styles.metricValue}>10</Text>
            <Text style={styles.metricLabel}>Total Devices</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricValue}>7</Text>
            <Text style={styles.metricLabel}>Active Devices</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricValue}>70%</Text>
            <Text style={styles.metricLabel}>Power Consumption</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Reports')}>
          <Text style={styles.navButtonText}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('DeviceControl')}>
          <Text style={styles.navButtonText}>Device Control</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
