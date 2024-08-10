// screens/DeviceControlScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './styles';

const device1Image = require('../assets/device1.png');
const device2Image = require('../assets/device2.png');
const device3Image = require('../assets/device3.png');

const devices = [
  { id: '1', name: 'Device 1', image: device1Image, status: 'Online', powerConsumption: '50W' },
  { id: '2', name: 'Device 2', image: device2Image, status: 'Offline', powerConsumption: '75W' },
  { id: '3', name: 'Device 3', image: device3Image, status: 'Online', powerConsumption: '60W' },
  // Add more devices as needed
];

const DeviceControlScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDevicePress = (device) => {
    setSelectedDevice(device);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDevicePress(item)} style={styles.deviceItem}>
      <Image source={item.image} style={styles.deviceImage} />
      <View style={styles.deviceInfo}>
        <Text style={styles.deviceName}>{item.name}</Text>
        <Text style={styles.deviceStatus}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Control</Text>
      <FlatList
        data={devices}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.deviceList}
      />
      {selectedDevice && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={selectedDevice.image} style={styles.deviceImage} />
              <Text style={styles.modalTitle}>{selectedDevice.name}</Text>
              <Text style={styles.modalText}>Status: {selectedDevice.status}</Text>
              <Text style={styles.modalText}>Power Consumption: {selectedDevice.powerConsumption}</Text>
              <Button
                title={selectedDevice.status === 'Online' ? 'Turn Off' : 'Turn On'}
                onPress={() => {
                  // Add logic to turn the device on/off
                  setModalVisible(false);
                }}
                color="#d32f2f"
                style={styles.modalButton}
              />
              <Button
                title="Close"
                onPress={() => setModalVisible(false)}
                color="#d32f2f"
                style={styles.modalButton}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default DeviceControlScreen;