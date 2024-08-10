// HomeScreen.js

import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Loader from '../components/Loader';  // Import the Loader component
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);  // State to manage loading
  const [powerConsumption, setPowerConsumption] = useState(70);

  return (
    <View style={styles.container}>
      {loading && <Loader />}  

      <View style={styles.header}>
        <Image source={require('../assets/sub-logo.png')} style={styles.homeLogo} />
        <Text style={[styles.homeTitle, { marginBottom: 20 }]}>Home</Text>

        <ProgressCircle
          percent={powerConsumption}
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
    </View>
  );
};

export default HomeScreen;
