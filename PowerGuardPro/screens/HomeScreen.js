// HomeScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Loader from '../components/Loader';  // Import the Loader component
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);  // State to manage loading

  // Function to handle navigation with loading
  const handleNavigation = (screen) => {
    setLoading(true);  // Show the loader

    // Simulate a delay for loading animation
    setTimeout(() => {
      setLoading(false);  // Hide the loader
      navigation.navigate(screen);  
    }, 5000);  
  };

  return (
    <View style={styles.container}>
      {loading && <Loader />}  

      <View style={styles.header}>
        <Image source={require('../assets/sub-logo.png')} style={styles.homeLogo} />
        <Text style={styles.homeTitle}>Home</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Dashboard Section */}
        <View style={styles.dashboardContainer}>
          <View style={styles.dashboardCard}>
            <MaterialCommunityIcons name="devices" size={40} color="#d32f2f" />
            <Text style={styles.dashboardCardTitle}>Total Devices</Text>
            <Text style={styles.dashboardCardValue}>10</Text>
          </View>
          <View style={styles.dashboardCard}>
            <FontAwesome5 name="wifi" size={40} color="#4caf50" />
            <Text style={styles.dashboardCardTitle}>Active Devices</Text>
            <Text style={styles.dashboardCardValue}>7</Text>
          </View>
          <View style={styles.dashboardCard}>
            <MaterialCommunityIcons name="flash" size={40} color="#ff9800" />
            <Text style={styles.dashboardCardTitle}>Power Consumption</Text>
            <Text style={styles.dashboardCardValue}>70%</Text>
          </View>
        </View>

        {/* Metrics Section */}
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
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation('Reports')}  // Use the function to handle navigation
        >
          <Text style={styles.navButtonText}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation('Settings')}  // Use the function to handle navigation
        >
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation('DeviceControl')}  // Use the function to handle navigation
        >
          <Text style={styles.navButtonText}>Device Control</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation('Alerts')}  // Use the function to handle navigation to Alerts
        >
          <Text style={styles.navButtonText}>Alerts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
