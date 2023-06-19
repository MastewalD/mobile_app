import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function EmployeePage(navigation) {
  const [error, setError] = useState(null);
  
  const handleLogout = async () => {
  
    try {
      await AsyncStorage.clear(); 
      const response = await axios.post('http://192.168.88.164:8000/logout', {
        full_name:'kid'
      });
   
     
    } catch (error) {
      console.error(error);
      setError('fullName not found');
    }
  

   
  
  
  };


  const handlePermission = async () => {
  
    try {

      navigation.navigate('AddPermission')
     
    } catch (error) {
      console.error(error);
    
    }
  
  };

   
  return (
    <View style={styles.container}>
        <Button title='addPermission' onPress={handlePermission}/>
      <Text>this is user employee page</Text>
      <Button title='logout' onPress={handleLogout}/>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
