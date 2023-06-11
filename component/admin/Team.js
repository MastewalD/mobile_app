import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import { StyleSheet, Text, View,Button ,FlatList} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
export default function Team({navigation}) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://192.168.43.188:8000/team')
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
    <View>
      
      <Button title='Add Team' onPress={handlePress}/>
      <Table>
  <Row data={['TeamName', 'Role']} />
  <Rows data={Data.map(row => [row.TeamName, row.Role])} />
</Table>
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
  HeadStyle:{

  }
});
