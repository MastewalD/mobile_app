import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';
import axios from 'axios'
export default function Login({navigation}) {
  const [fullName,setFullName]=useState('')
  const [loginStatus, setLoginStatus] = useState("");
  const handlelog=()=>{
    
    axios.post('http://192.168.43.164:8000/login', {
      fullName: fullName,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        

        setLoginStatus(response.data[0].fullName);
        
        navigation.navigate('Main')

      }
    });

  }
  return (
   
    <SafeAreaView style={styles.container}> 
          
    <View style={styles.box}>
     
      <View style={styles.wel}>
      
      <Text style={styles.text}>WELCOME BACK !</Text></View>
      <Text>{loginStatus}</Text>
      </View>
      
    <View style={styles.input}>
      <Text style={styles.text1}>fullName</Text>
      <TextInput style={styles.inputs} onChangeText={(e)=>setFullName(e)}/>
      
    </View>
    <View style={styles.button}>
      <Button title='log in' onPress={handlelog}/>
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
text1:{
color:'blue',
marginLeft:10,

},
inputs:{
  margin: 15,
  height: 40,
  borderColor: '#116591',
  borderWidth: 1,
  width:260
},
button:{
  flex:3,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around'

},
wel:{
backgroundColor:'blue',

justifyContent:'center',
alignItems:'center',
height:40,
width:200,
borderRadius:10
}



});
