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
import {
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {height, TOP, width, globalStyle} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function TopButton({navigation}) {
  return (
    <>
      <View style={globalStyle.topButtonHeader}>
        <TouchableOpacity
          style={[globalStyle.backIconContainer, {height: 30, width: 30}]}
          onPress={() => navigation.goBack()}>
          <MaterialCommunity color="black" name="arrow-back" size={25} />
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Test')}>
          <View style={[globalStyle.topButtonHeader, {left: 20}]}>
            <View style={globalStyle.smallLogo}>
              <Image
                source={require('../../assets/logoButton.png')}
                style={{height: 30, width: 30}}
              />
            </View>
            <View
              style={{
                width: width * 0.6,
                borderWidth: 0.5,
                borderColor: 'grey',
                height: TOP * 1.2,
                backgroundColor: 'white',
                borderRadius: 5,
              }}
            />
            <MaterialCommunity
              style={{left: 10}}
              color="black"
              name="search"
              size={28}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

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
