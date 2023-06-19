import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button,Alert,SafeAreaView,TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as LocalAuthentication from 'expo-local-authentication'
import { StatusBar } from 'expo-status-bar';
import jwtDecode from 'jwt-decode';

const Login = ({navigation}) => {
  const [isBiometricSupported,setIsBiometricSupported]=useState(false)
  const [full_name, setFullName] = useState('');
  const [role, setRole] = useState(null);
  
  const [error, setError] = useState(null);
  useEffect(()=>{
    (async()=>{
      const compatible=await LocalAuthentication.hasHardwareAsync()
      setIsBiometricSupported(compatible)
    })();
  });

  const fallBackToDefaultAuth=()=>{
    console.log('fall back to password authentication')
  }
  const AlertComponent=(title,mess,btnTxt,btnFunc)=>{
return Alert.alert(title,mess,[{
  text:btnTxt,
  onPress:btnFunc
}])
  }
  const TwoButtonAlert=()=>{
    navigation.navigate('Main')
   

  }

const handleBiometricAuth=async()=>{

const isBiometricAvailable=await LocalAuthentication.hasHardwareAsync()
if(!isBiometricAvailable)
return AlertComponent(
  'please enter password',
  'Biometric auth not supported ',
  'Ok',
  ()=>fallBackToDefaultAuth()
  )
  let supportedBiometrics;
  if (isBiometricSupported)
    supportedBiometrics= await LocalAuthentication.supportedAuthenticationTypesAsync()
    const savedBiometrics=await LocalAuthentication.isEnrolledAsync()
  
if(!savedBiometrics)
return AlertComponent(
  'Biometric recored not found',
  'please login in with password',
  'ok',
  ()=>fallBackToDefaultAuth()
)
const biometricAuth = await LocalAuthentication.authenticateAsync({
  promptMessage:'Login with biometrics',
  cancelLabel:'cancel',
  disableDeviceFallback:true
})
if(biometricAuth){
  handleLogin()
  

}
console.log({isBiometricAvailable})
console.log({supportedBiometrics})
console.log({savedBiometrics})
console.log({biometricAuth})
}
const sendDate= async()=>{

  try {
    const response = await axios.post('http://192.168.88.164:8000/date', {
      full_name: full_name
    });
   
  } catch (error) {
    console.error(error);
    setError('fullName not found');
  }


}

  const handleLogin = async () => {
    if (!full_name) {
      setError('Please enter fullName');
      return;
    }

    try {
      const response = await axios.post('http://192.168.88.164:8000/login', {
        full_name: full_name
      });
      const accessToken = response.data.token;
      const decoded = jwtDecode(accessToken);
      setRole(decoded.role);
    console.log(decoded)
      await AsyncStorage.setItem('access_token', 'accessToken');
      // Save the access token to secure storage or state
      console.log(`Access token: ${accessToken}`);
      navigation.navigate('UserMain');
      
      
      sendDate()
    } catch (error) {
      console.error(error);
      setError('fullName not found');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1,  }}>
       <Text>Welcome, {full_name}!</Text>
     
      <Text>{ isBiometricSupported?'your device is compatible with biometric':'face or fingerprint scanner is available on this device'}</Text>
      <TouchableHighlight style={
{
  height:60,
  marginTop:200
}

      }>
   
        <Button title='login with biometric' onPress={handleBiometricAuth}/>
      </TouchableHighlight>
      <StatusBar style='auto'/>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
      <TextInput
        style={{ height: 40, width: 200, padding: 10, borderWidth: 1, marginBottom: 10 }}
        placeholder='fullName'
        onChangeText={text => setFullName(text)}
        value={full_name}
      />
   
      {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default Login;