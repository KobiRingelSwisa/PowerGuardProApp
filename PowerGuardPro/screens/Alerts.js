import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

const AlertSystemScreen = () => {
  const [selectedView, setSelectedView] = useState('Notifications');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'High', message: 'High electricity consumption detected', details: 'Consumption exceeded 100 kWh', date: new Date().toString() },
    { id: 2, type: 'Low', message: 'Low electricity consumption detected', details: 'Consumption dropped below 10 kWh', date: new Date().toString() },
  ]);
  const [settings, setSettings] = useState({ email: true, sms: false, threshold: 100 });
  const [selectedNotification, setSelectedNotification] = useState(null);

  const renderAlertContent = () => 
   {
    switch (selectedView) {
      case 'Notifications':
        return (
          <ScrollView style={styles.listContainer}>
            {notifications.map(notification => (
              <View key={notification.id} style={styles.notification}>
                <Text style={styles.notificationTitle}>{notification.message}</Text>
                <Button
                  title="View Details"
                  onPress={() => setSelectedNotification(notification)}
                  color="#d32f2f"
                />
              </View>
            ))}
          </ScrollView>
        );
      case 'Settings':
        return (
          <View style={styles.settingsContainer}>
            <Text style={styles.settingsText}>Email Notifications: {settings.email ? 'On' : 'Off'}</Text>
            <Text style={styles.settingsText}>SMS Notifications: {settings.sms ? 'On' : 'Off'}</Text>
            <Text style={styles.settingsText}>Consumption Threshold: {settings.threshold} kWh</Text>
            <Button title="Toggle Email" onPress={() => setSettings({ ...settings, email: !settings.email })} color="#d32f2f" />
            <Button title="Toggle SMS" onPress={() => setSettings({ ...settings, sms: !settings.sms })} color="#d32f2f" />
            <Button title="Increase Threshold" onPress={() => setSettings({ ...settings, threshold: settings.threshold + 10 })} color="#d32f2f" />
            <Button title="Decrease Threshold" onPress={() => setSettings({ ...settings, threshold: settings.threshold - 10 })} color="#d32f2f" />
          </View>
        );
      case 'Details':
        return (
          selectedNotification && (
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsTitle}>{selectedNotification.message}</Text>
              <Text style={styles.detailsText}>{selectedNotification.details}</Text>
              <Text style={styles.detailsText}>Date: {selectedNotification.date}</Text>
              <Button title="Back to Notifications" onPress={() => setSelectedNotification(null)} color="#d32f2f" />
            </View>
          )
        );
      default:
        return <Text style={styles.defaultText}>Select an option to view</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/sub-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Alert System</Text>
      <View style={styles.buttonContainer}>
        <Button title="Notifications" onPress={() => setSelectedView('Notifications')} color="#d32f2f" />
        <Button title="Settings" onPress={() => setSelectedView('Settings')} color="#d32f2f" />
        <Button title="Details" onPress={() => setSelectedView('Details')} color="#d32f2f" />
      </View>
      <View style={styles.contentContainer}>
        {renderAlertContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#d32f2f',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  notification: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  notificationTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 18,
    marginBottom: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 18,
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AlertSystemScreen;
