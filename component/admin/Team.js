import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import { StyleSheet, Text, View,Button ,FlatList} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Table,  Row, Rows} from 'react-native-table-component';
export default function Team({navigation}) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://192.168.176.164:8000/team')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handlePress=()=>{
  navigation.navigate('AddTeam')
   }
  return (
    <View style={styles.container} >
       <Button title='Add Team' onPress={handlePress} style={styles.button}/>
    
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
  <Row data={['team_name', 'team_role']}  style={styles.head} />
  <Rows data={Data.map(row => [row.team_name, row.team_role])} style={styles.text}/>
</Table>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  button:{  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around',}

});
