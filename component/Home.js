import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native';

export default function Home({navigation}) {
  const handlePress=()=>{
    navigation.navigate('Signup')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Button}>
      <Button title='sign_up' onPress={handlePress}/>
      </View>
    <View style={styles.container}>
    
      <Text style={styles.text}>

        WELCOME TO {'\n'}   EMPLOYEE ATTENDANCE  {'\n'}     SYSTEM

        </Text>
  
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#116591'
  },
  text:{
    
    fontSize:30,
    fontWeight:'bold',
    color:'white',
  },
  Button:{
    marginLeft:200,
  }
});
