import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';

export default function Signup({navigation}) {
 
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
  const handlePress=()=>{
    navigation.navigate('Login')
  }
 
  const  handleReg=()=>{


    axios.post('http://192.168.43.164:8000/register', {
      fullName: fullName,
      email: email,
    })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }

  return (
   
    <SafeAreaView style={styles.container}>
    <View style={styles.box}>
    <Button title='login' onPress={handlePress}/>
      <View style={styles.wel}>
      <Text style={styles.text}>WELCOME BACK !</Text></View>
      
      </View>
      
    <View style={styles.input}>
      
        
      <Text style={styles.text1}>fullName </Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setFullName(e)} value={fullName}/>
      <Text style={styles.text1}>Email</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setEmail(e)} value={email}/>
      <View style={styles.finger}></View>
       
    </View>
    <View style={styles.button}>
      <Button title='register' onPress={()=>handleReg()} />
      <Button title='cancel'/>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box:{
    flex:1,
    alignItems:'flex-end',
    
    justifyContent:'flex-end',
   
    
  },
  text:{
  
  backgroundColor:'blue',
  
  
  alignItems:'center',
  justifyContent:'center',
  color:'white',
  fontSize:15
  },
  input:{
flex:2,


  },
  inputs:{
   
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
text1:{
color:'blue',
marginLeft:10,

},

button:{
  
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around',

},

finger:{
backgroundColor:'lightseagreen',
justifyContent:'center',
height:40,
width:100,
}


});
