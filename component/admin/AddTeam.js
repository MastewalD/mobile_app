import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';

export default function Signup({navigation}) {
 
    const [team_name,setTeamName]=useState('')
    const [team_role,setRole]=useState('')
    
  const  handleReg=()=>{


    axios.post('http://192.168.241.164:8000/team', {
      team_name: team_name,
      team_role: team_role,
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
      
        
      <Text style={styles.text1}>TeamName</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setTeamName(e)} value={team_name}/>
      <Text style={styles.text1}>Role</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setRole(e)} value={team_role}/>
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
