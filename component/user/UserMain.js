import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Dashboard from './Dashboard'
import AddPermission from './AddPermission';
import Log_out from './Log_out';

const Drawer =createDrawerNavigator()
export default function UserMain() {
  return (
    <NavigationContainer independent={true} style={styles.container}>
       <Drawer.Navigator>

<Drawer.Screen
name='Dashboard'
component={ Dashboard}
/>


<Drawer.Screen
name='AddPermission'
component={ AddPermission}
/>

 <Drawer.Screen
name='Log_out'
component={ Log_out}
/>

</Drawer.Navigator>
    </NavigationContainer>
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