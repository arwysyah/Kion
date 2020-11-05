import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home'
import Profile from '../screen/Profile'
import Detail from '../screen/Detail'
import BottomNavigation from '../navigations/BottomNavigation'
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" options={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};
export default HomeScreen
