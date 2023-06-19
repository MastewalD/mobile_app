import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native';

export default function Home({navigation}) {
  const handlePressreg=()=>{
    navigation.navigate('Signup')
  }
  const handlePresslog=()=>{
    navigation.navigate('Login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Button}>
      <Button title='sign_up' onPress={handlePressreg}/>
      <View style={styles.gap} />
      <Button title='Login' onPress={handlePresslog}/>
      </View>
   
    <View style={styles.container}>
    
      <Text style={styles.text}>

        WELCOME TO {'\n'}  SMARTPHONE BIOMETRIC BASED  ATTENDANCE MANAGMENT {'\n'}  SYSTEM

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
    marginLeft:150,
    flexDirection:'row',
    


  },
  gap: {
    width: 10,
  },

});
