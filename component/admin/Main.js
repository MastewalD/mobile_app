import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './Dashboard'
import Log_out from './Log_out'
import Report from './Report'
import Check_in from './Check_in'
import Approve_user from './Approve_user'
import Employee_status from './Employee_status'
import Team from './Team'


const Drawer =createDrawerNavigator()
export default function App() {
  return (
    
      <Drawer.Navigator>

        <Drawer.Screen
        name='Dashboard'
        component={ Dashboard}
        />
        <Drawer.Screen
        name='Check_in'
        component={ Check_in}
        />
        <Drawer.Screen
        name='Approve_user'
        component={ Approve_user}
        />
        <Drawer.Screen
        name='Employee_status'
        component={ Employee_status}
        />
        <Drawer.Screen
        name='Team'
        component={ Team}
        />
        <Drawer.Screen
        name='Report'
        component={ Report}
        />
         <Drawer.Screen
        name='Log_out'
        component={ Log_out}
        />
        
      </Drawer.Navigator>
    
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
