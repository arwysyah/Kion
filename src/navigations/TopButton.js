import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import University from '../screen/ContentScreen/University';
import Challange from '../screen/ContentScreen/University';
import Science from '../screen/ContentScreen/Science';
import Technology from '../screen/ContentScreen/Technology';
import Story from '../screen/ContentScreen/Story';
import Scholarship from '../screen/ContentScreen/Scholarship';
import Internship from '../screen/ContentScreen/Internship';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();

export default function TopButton() {
  return (
    <Tab.Navigator
      initialRouteName="University"
      backBehavior="University"
      // tabBarOptions={
      //   ({
      //     style: {
      //       backgroundColor: '#2b2929',
      //     },
      //   },
      //   {
      //     lazy: true,
      //     scrollEnabled: true,
      //   })
      // }
      
       
scrollEnabled={true}
springConfig={{
  restSpeedThreshold:60
}}
      tabBarOptions={{
        labelStyle: {fontSize: 12, color: 'grey'},
        tabStyle: {width: 110},
        style: {backgroundColor: '#2b2929'},

      },
      {
        lazy: true,
           scrollEnabled: true,
           
         }}>
      <Tab.Screen name="University" component={University} />
      <Tab.Screen name="Story" component={Story} />
      <Tab.Screen name="Technology" component={Technology} />
      <Tab.Screen name="Science" component={Science} />
      <Tab.Screen name="Scholarship" component={Scholarship} />
      <Tab.Screen name="Internship" component={Internship} />
      <Tab.Screen name="Challange" component={Challange} />
    </Tab.Navigator>
  );
}
