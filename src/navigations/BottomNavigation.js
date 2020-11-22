import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './StackNavigation';
import Profile from '../screen/Profile';
import Challenge from '../screen/Challenge';
import TopButton from '../navigations/TopButton';
import UploadButton from '../components/uploadButton';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import gray from '../components/color';
import Upload from '../screen/Upload';
import Modal from '../screen/Modal';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const getIsTabBarVisible = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params
    ? route.params.screen
    : 'Home';

  switch (routeName) {
    case 'Home':
    case 'Content':
      return true;
    default:
      return false;
  }
};
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior={'order'}
      screenOptions={({route, navigation}) => ({
        tabBarVisible: getIsTabBarVisible(route),
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-analytics';
          } else if (route.name === 'Content') {
            iconName = focused ? 'file-table-box' : 'file-table-box-outline';
          } else if (route.name === 'Modal') {
            iconName = focused ? 'plus-circle-outline' : 'tooltip-plus';
          } else if (route.name === 'Challenge') {
            iconName = focused
              ? 'file-document-edit'
              : 'file-document-edit-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-tie' : 'account-tie-outline';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunity name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: gray,
        labelStyle: {},
        style: {
          backgroundColor: 'white',

          opacity: 1,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 30,
          borderRadius: 18,
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
        tabStyle: {height: 40},

        // style: {
        //   height: 80,
        //   marginVertical: -30,
        //   backgroundColor: 'black',
        //   // opacity:0.7
        // },
        // tabStyle: {height: 40},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Content" component={TopButton} />
      <Tab.Screen
        name="Modal"
        component={Modal}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('Upload');
          },
        })}
        name="Modal"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                backgroundColor: '#51db51',

                top: 10,
                opacity: 6,
                bottom: 0, // space from bottombar
                height: 40,
                width: 40,
                borderRadius: 34,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="plus" color="grey" size={20} />
            </View>
          ),
        }}
        component={Upload}
      />
      <Tab.Screen name="Challenge" component={Challenge} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
