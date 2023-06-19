import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const Finger = () => {
  const [message, setMessage] = useState('');

  const handleRegisterFingerprint = async () => {
    console.log('maste')
    const result = await FingerprintScanner.register({ description: 'Register your fingerprint to login' });

    if (result) {
      // Send the fingerprint ID to your server
      await axios.post('http://192.168.241.164:8000/fingerprint', { fingerprintId: result });

      setMessage('Fingerprint registered successfully!');
    } else {
      setMessage('Fingerprint registration failed!');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleRegisterFingerprint}>
        <Text>Register fingerprint</Text>
      </TouchableOpacity>
      <Text>{message}</Text>
    </View>
  );
};

export default Finger;