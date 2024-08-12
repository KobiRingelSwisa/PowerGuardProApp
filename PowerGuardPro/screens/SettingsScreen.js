import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, TextInput, Button, Linking, Platform } from 'react-native';
import CustomModal from '../components/CustomModal';  // Assuming CustomModal is saved in components folder
import styles from './styles';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [infoModalMessage, setInfoModalMessage] = useState('');

  const handleEmailChange = () => {
    console.log("New Email: ", newEmail);
    setEmailModalVisible(false);
  };

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      console.log("New Password: ", newPassword);
      setPasswordModalVisible(false);
    } else {
      alert('Passwords do not match!');
    }
  };

  const handleLanguageChange = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    } else if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:root=General');
    } else {
      alert('This feature is not supported on your device.');
    }
  };

  const openInfoModal = (message) => {
    setInfoModalMessage(message);
    setInfoModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.settingsSection}>
        <Text style={styles.settingsSectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingsItem} onPress={() => setEmailModalVisible(true)}>
          <Text style={styles.settingsItemText}>Change Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => setPasswordModalVisible(true)}>
          <Text style={styles.settingsItemText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => openInfoModal("Manage Subscriptions will be available in the next version of this app.")}>
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
        <TouchableOpacity style={styles.settingsItem} onPress={handleLanguageChange}>
          <Text style={styles.settingsItemText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => openInfoModal("Privacy Policy will be available in the next version of this app.")}>
          <Text style={styles.settingsItemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => openInfoModal("Terms of Service will be available in the next version of this app.")}>
          <Text style={styles.settingsItemText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>

      <CustomModal visible={emailModalVisible} onClose={() => setEmailModalVisible(false)} title="Change Email" showOkButton={false}>
        <TextInput
          style={styles.input}
          placeholder="Enter new email"
          value={newEmail}
          onChangeText={setNewEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={() => setEmailModalVisible(false)} color="#000000" />
          <Button title="Save" onPress={handleEmailChange} color="#000000" />
        </View>
      </CustomModal>

      <CustomModal visible={passwordModalVisible} onClose={() => setPasswordModalVisible(false)} title="Change Password" showOkButton={false}>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={() => setPasswordModalVisible(false)} color="#000000" />
          <Button title="Save" onPress={handlePasswordChange} color="#000000" />
        </View>
      </CustomModal>

      <CustomModal visible={infoModalVisible} onClose={() => setInfoModalVisible(false)} title="Information">
        <Text>{infoModalMessage}</Text>
      </CustomModal>
    </ScrollView>
  );
};

export default SettingsScreen;
