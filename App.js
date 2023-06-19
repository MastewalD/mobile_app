import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from './component/Signup';
import Login from './component/Login'
import Home from './component/Home';
import Main from './component/admin/Main'
import AddTeam from './component/admin/AddTeam'
import Role from './component/Role'
import EmployeePage from './component/user/EmployeePage'
import PresentToday from './component/admin/PresentToday';
import AddPermission from './component/user/AddPermission';
import UserMain from './component/user/UserMain'
const Stack =createStackNavigator()
export default function App() {
  return (
    <NavigationContainer independent={true} style={styles.container}>
      <Stack.Navigator>

        <Stack.Screen
        name='Home'
        component={ Home}
        />
         <Stack.Screen
        name='Login'
        component={Login}
        />
         <Stack.Screen
        name='UserMain'
        component={ UserMain}
        />
         <Stack.Screen
        name='Role'
        component={ Role}
        />
        <Stack.Screen
        name='Signup'
        component={ Signup}
        />
        <Stack.Screen
        name='Main'
        component={ Main}
      
        />
        
        <Stack.Screen
        name='EmployeePage'
        component={ EmployeePage}
        
        />

       <Stack.Screen
        name='AddPermission'
        component={ AddPermission}
        
        />
         <Stack.Screen
        name='AddTeam'
        component={AddTeam}
        
        />
         <Stack.Screen
        name='PresentToday'
        component={ PresentToday}
        />
         
      </Stack.Navigator>
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
