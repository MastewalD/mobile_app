import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import Login from '../Login'
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Table,  Row, Rows} from 'react-native-table-component';
export default function Dashboard(navigation) {
  const [error, setError] = useState(null);
  const [Data, setData] = useState([]);
  const [Present,setPresent]=useState([])
  const hanelPresent=()=>{
    navigation.navigate('PresentToday')
  }
  
  useEffect(() => {
    axios.get('http://192.168.88.164:8000/count_employee')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios.get('http://192.168.88.164:8000/total_no_presents')
      .then((response) => {
        setPresent(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


 
  return (
    <View style={styles.container}>
      <View style={styles.cards}>

      <View style={styles.card1}>
      <Table borderStyle={{ borderColor: '#c8e1ff'}}>
  <Row data={['Total No of user']}  style={styles.head} />
  <Rows data={Data.map(row => [ row.Total_No_of_user])} style={styles.text}/>
</Table>
      </View>
      <TouchableOpacity onPress={hanelPresent}>
      <View style={styles.card1}>
      <Table borderStyle={{ borderColor: '#c8e1ff'}}>
  <Row data={['total no absentees today']}  style={styles.head} />
  <Rows data={Present.map(row => [ row.total_no_users_on_work])} style={styles.text}/>
</Table>
      </View>

      </TouchableOpacity>
         </View>
      
      
    </View>
  );




}

const styles = StyleSheet.create({
  card1:{
    width:120,
    backgroundColor: 'silver',
    
  },
  cards:{

flexDirection:'row',
columnGap:100,
marginTop:10

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin:10
    

  },
  box:{
backgroundColor:'blue',
height:80,
width:50
  },
  gap: {
    width: 100,
    height:50,
    backgroundColor:'blue'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  box2:{
    
    backgroundColor:'lightblue',
    height:100,
    width:200
  },
  box1:{
    
    backgroundColor:'lightblue',
    height:100,
    width:200
  }
});
