import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Role({ route ,navigation}) {
    const { small,full_name } = route.params;
   
  return (
    <View style={styles.container}>
      <Text>Welcome, {full_name}! ,{small}</Text>
      {small === 'admin'?(<>{navigation.navigate('Main')}</>):(<>{navigation.navigate('UserMain')}</>)}
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
});
