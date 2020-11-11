

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomNavigation from './BottomNavigation'
import Test from '../screen/Test'
const Tab = createMaterialTopTabNavigator();

export default function SlideNavigation() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: {},
        style: {
          backgroundColor: 'black',
          flex:1,

          opacity: 0.7,
          height: 55,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 30,
          borderRadius: 20,
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        },
        tabStyle: {height: 50}}}>
      <Tab.Screen name="Top" component={BottomNavigation} />
      <Tab.Screen name="Test" component={Test} />
     
    </Tab.Navigator>
  );
}