import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ReportsScreen from './screens/ReportsScreen';
import SettingsScreen from './screens/SettingsScreen';
import DeviceControlScreen from './screens/DeviceControlScreen';
import ReportDetailScreen from './screens/ReportDetailScreen';
import RegisterScreen from './screens/RegisterScreen';
import AlertSystemScreen from './screens/Alerts';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="DeviceControl" component={DeviceControlScreen} />
        <Stack.Screen name="Alerts" component={AlertSystemScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


AppRegistry.registerComponent(appName, () => MainApp);