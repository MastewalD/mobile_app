import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Log_out = ({ navigation }) => {
  const [error, setError] = useState(null);
const full_name='Maste'
  const handleLogout = async () => {
  
    try {
      await AsyncStorage.clear(); 
      const response = await axios.post('http://192.168.88.164:8000/logout', {
        full_name:full_name
      });
      navigation.navigate('Signup')
     
    } catch (error) {
      console.error(error);
      setError('fullName not found');
    }
  

   
  
  
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Profile</Text>
     
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default Log_out;