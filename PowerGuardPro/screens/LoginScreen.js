// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import Loader from '../components/Loader';  
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  

  const handleLogin = () => {
        if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setLoading(true); 
   
    setTimeout(() => {
      setLoading(false);  
      navigation.navigate('MainApp');
    }, 5000);
  };

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.loginContainer}>
      {loading && <Loader />}  
      <Image source={require('../assets/logo.png')} style={styles.loginLogo} />
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#d32f2f" />
      <TouchableOpacity onPress={handleRegisterNavigation} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;