// HomeScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Loader from '../components/Loader';  // Import the Loader component
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);  // State to manage loading
  const [powerConsumption, setPowerConsumption] = useState(70);

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

        <ProgressCircle
          percent={powerConsumption}  // Replace 70 with a dynamic value if available
          radius={50}
          borderWidth={8}
          color="#ff9800"
          shadowColor="#f4f4f4"
          bgColor="#fff"
        >
          <Text style={styles.progressCircleText}>{`${powerConsumption}%`}</Text>
        </ProgressCircle>
        <Text style={styles.dashboardCardTitle}>Power Consumption Rate</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Dashboard Section */}
        <View style={styles.dashboardContainer}>
          <View style={styles.dashboardCard}>
          <Image source={require('../assets/icons/total_devices_logo.png')} style={styles.dashboardIcon} />
            <Text style={styles.dashboardCardTitle}>Total Devices</Text>
            <Text style={styles.dashboardCardValue}>10</Text>
          </View>
          <View style={styles.dashboardCard}>
          <Image source={require('../assets/icons/active_devices_logo.png')} style={styles.dashboardIcon} />
            <Text style={styles.dashboardCardTitle}>Active Devices</Text>
            <Text style={styles.dashboardCardValue}>7</Text>
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