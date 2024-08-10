import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ReportsScreen from './screens/ReportsScreen';
import RegisterScreen from './screens/RegisterScreen'
import SettingsScreen from './screens/SettingsScreen';
import DeviceControlScreen from './screens/DeviceControlScreen';
import AlertSystemScreen from './screens/Alerts';
import ReportDetailScreen from './screens/ReportDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Import the logos
const homeIcon = require('./assets/icons/homeIcon.png');
const reportsIcon = require('./assets/icons/reportsIcon.png');
const settingsIcon = require('./assets/icons/settingsIcon.png');
const deviceControlIcon = require('./assets/icons/deviceControlIcon.png');
const alertsIcon = require('./assets/icons/alertsIcon.png');

// Tab Navigation (MainApp)
function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Reports') {
            iconSource = reportsIcon;
          } else if (route.name === 'Settings') {
            iconSource = settingsIcon;
          } else if (route.name === 'DeviceControl') {
            iconSource = deviceControlIcon;
          } else if (route.name === 'Alerts') {
            iconSource = alertsIcon;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                { tintColor: focused ? '#ffffff' : '#ffcccc' }
              ]}
            />
          );
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffcccc',
        tabBarStyle: {
          backgroundColor: '#d32f2f',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="DeviceControl" component={DeviceControlScreen} />
      <Tab.Screen name="Alerts" component={AlertSystemScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigation (Including ReportDetailScreen)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide the header on the login screen
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={ {headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }} // Hide the header on the tab navigation
        />
        <Stack.Screen
          name="ReportDetail"
          component={ReportDetailScreen}
          options={({ route }) => ({
            title: route.params?.reportType || 'Report Details', // Use the report type as the title
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,  // Adjust the width to your needs
    height: 24, // Adjust the height to your needs
    resizeMode: 'contain',
  },
});
