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
  SafeAreaView,
} from 'react-native';
import {height, TOP, width, globalStyle} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/Ionicons';

import HeaderContent from '../components/HeaderContent';

const Tab = createMaterialTopTabNavigator();

export default function TopButton({navigation}) {
  return (
    <SafeAreaView style={globalStyle.container}>
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
      <View style={{flex:1}}>
        <HeaderContent navigation={navigation}/>
      </View>

    
    </SafeAreaView>
  );
}
