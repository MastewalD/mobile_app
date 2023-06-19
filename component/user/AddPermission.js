import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';

export default function AddPermission({navigation}) {
    
    const [full_name,setFullName]=useState('')
    const [reason,setReason]=useState('')
    const [starting_date,setStarting_date]=useState('')
    const [ending_date,setEnding_date]=useState('')
  const  handleReg=()=>{


    axios.post('http://192.168.241.164:8000/permission', {
        full_name: full_name,
        reason: reason,
        starting_date:starting_date,
        ending_date:ending_date
    })
      .then(response => {
        console.log('Success:', response.data);
        navigation.navigate('Dashboard')
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }

  return (
   
    <SafeAreaView style={styles.container}>
    <View style={styles.input}>
      
    
      <Text style={styles.text1}>full_name</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setFullName(e)} value={full_name}/>
      <Text style={styles.text1}>reason</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setReason(e)} value={reason}/>
      <Text style={styles.text1}>starting_date</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setStarting_date(e)} value={starting_date}/>
      <Text style={styles.text1}>ending_date</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setEnding_date(e)} value={ending_date}/>
      <Button title='Add' onPress={()=>handleReg()} />
      
       
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
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    width:300,
    padding: 8,
    margin:10,
    
    textAlign: 'center',
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
