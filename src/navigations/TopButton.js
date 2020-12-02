import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import University from '../screen/ContentScreen/University';
import Challange from '../screen/ContentScreen/University';
import Science from '../screen/ContentScreen/Science';
import Technology from '../screen/ContentScreen/Technology';
import Story from '../screen/ContentScreen/Story';
import Scholarship from '../screen/ContentScreen/Scholarship';
import Internship from '../screen/ContentScreen/Internship';
import All from '../screen/ContentScreen/All';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import {View, TextInput} from 'react-native';
import {height, TOP, width} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export default function TopButton({navigation}) {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail')}>
        <View
          style={{
            height: TOP * 2,
            paddingHorizontal: 30,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'row'
          }}>
          <View
            style={{
              width: width * 0.83,
              borderWidth: 0.7,
              borderColor: 'black',
              height: TOP * 1.5,
              backgroundColor: 'white',
              borderRadius: 5,
           
            }}
          />
          <MaterialCommunity
          style={{left:10}}
          color='black'
          name='search'
          size={28}/>
        </View>
      </TouchableWithoutFeedback>
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
        <Tab.Screen name="Universitas" component={University} />
        <Tab.Screen name="Cerita" component={Story} />
        <Tab.Screen name="Teknologi" component={Technology} />
        <Tab.Screen name="Sains" component={Science} />
        <Tab.Screen name="Beasiswa" component={Scholarship} />
        <Tab.Screen name="Internship" component={Internship} />
      </Tab.Navigator>
    </>
  );
}
