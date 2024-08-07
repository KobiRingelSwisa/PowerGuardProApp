import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.settingsSection}>
        <Text style={styles.settingsSectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Change Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Manage Subscriptions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.settingsSectionTitle}>Notification Settings</Text>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={(value) => setNotificationsEnabled(value)}
          />
        </View>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.settingsSectionTitle}>General Settings</Text>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => setDarkMode(value)}
          />
        </View>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsItemText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;