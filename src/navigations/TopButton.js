import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import University from '../screen/ContentScreen/University';
import Challange from '../screen/ContentScreen/University';
import Science from '../screen/ContentScreen/Science';
import Technology from '../screen/ContentScreen/Technology';
import Story from '../screen/ContentScreen/Story';
import Scholarship from '../screen/ContentScreen/Scholarship';
import Internship from '../screen/ContentScreen/Internship';
import All from '../screen/ContentScreen/All'
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();

export default function TopButton() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      backBehavior="All"
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
        restSpeedThreshold: 60,
      }}
      tabBarOptions={
        ({
          labelStyle: {fontSize: 12, color: 'grey'},
          tabStyle: {width: 110},
          style: {backgroundColor: 'white'},
        },
        {
          lazy: true,
          scrollEnabled: true,
        })
      }>
          <Tab.Screen name="Semua" component={All} />
      <Tab.Screen name="Universtas" component={University} />
      <Tab.Screen name="Cerita" component={Story} />
      <Tab.Screen name="Teknologi" component={Technology} />
      <Tab.Screen name="Sains" component={Science} />
      <Tab.Screen name="Beasiswa" component={Scholarship} />
      <Tab.Screen name="Internship" component={Internship} />
      <Tab.Screen name="Tantangan" component={Challange} />
    </Tab.Navigator>
  );
}
