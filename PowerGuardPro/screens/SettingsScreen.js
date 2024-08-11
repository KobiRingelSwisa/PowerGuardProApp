import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, Modal, TextInput, Button, Linking, Platform } from 'react-native';
import styles from './styles';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscriptionModalVisible, setSubscriptionModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [infoModalMessage, setInfoModalMessage] = useState('');

  const handleEmailChange = () => {
    // Handle the email change logic here, like updating the state or making an API call
    console.log("New Email: ", newEmail);
    setEmailModalVisible(false);  // Close the modal after saving
  };

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      console.log("New Password: ", newPassword);
      setPasswordModalVisible(false);  // Close the modal after saving
    } else {
      alert('Passwords do not match!');
    }
  };

  const handleLanguageChange = () => {
    if (Platform.OS === 'android') {
      // Open the language settings on Android
      Linking.openSettings();
    } else if (Platform.OS === 'ios') {
      // Open the main settings app on iOS (no direct link to Language settings)
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
        <TouchableOpacity style={styles.settingsItem} onPress={() => setSubscriptionModalVisible(true)}>
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

{/* Modal for Changing Email */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={emailModalVisible}
        onRequestClose={() => setEmailModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Change Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new email"
              value={newEmail}
              onChangeText={setNewEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={() => setEmailModalVisible(false)} color="#d32f2f" />
              <Button title="Save" onPress={handleEmailChange} color="#4caf50" />
            </View>
          </View>
        </View>
      </Modal>

{/* Modal for Changing Password */}  
      <Modal
        animationType="slide"
        transparent={true}
        visible={passwordModalVisible}
        onRequestClose={() => setPasswordModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Change Password</Text>
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
              <Button title="Cancel" onPress={() => setPasswordModalVisible(false)} color="#d32f2f" />
              <Button title="Save" onPress={handlePasswordChange} color="#4caf50" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for Manage Subscriptions */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={subscriptionModalVisible}
        onRequestClose={() => setSubscriptionModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Manage Subscriptions</Text>
            <Text style={styles.modalText}>This feature will be available in the next version of this app.</Text>
            <View style={styles.buttonContainer}>
              <Button title="OK" onPress={() => setSubscriptionModalVisible(false)} color="#4caf50" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Info Modal for Privacy Policy, Terms of Service, etc. */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={infoModalVisible}
        onRequestClose={() => setInfoModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Information</Text>
            <Text style={styles.modalText}>{infoModalMessage}</Text>
            <View style={styles.buttonContainer}>
              <Button title="OK" onPress={() => setInfoModalVisible(false)} color="#4caf50" />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SettingsScreen;