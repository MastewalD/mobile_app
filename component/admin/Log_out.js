import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Log_out = ({ navigation }) => {
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      // Remove the access token from secure storage or state
      // ...
    

      await AsyncStorage.removeItem('access_token');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      setError('Failed to log out');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Profile</Text>
      {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default Log_out;