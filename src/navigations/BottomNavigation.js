import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './StackNavigation';
import Content from '../screen/Content';
import TopButton from '../navigations/TopButton';
import UploadButton from '../components/uploadButton';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import gray from '../components/color';
import Upload from '../screen/Upload';
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const getIsTabBarVisible = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params
    ? route.params.screen
    : 'Home';

  switch (routeName) {
    case 'Home':
    case 'TopButton':
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
      screenOptions={({route}) => ({
        tabBarVisible: getIsTabBarVisible(route),
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-analytics' : 'home';
          } else if (route.name === 'Upload') {
            iconName = focused ? 'tooltip-plus' : 'plus-circle-outline';
          } else if (route.name === 'TopButton') {
            iconName = focused ? 'file-table-box-multiple' : 'file-table-box';
          }
          // You can return any component that you like here!
          return (
            <MaterialCommunity name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: gray,
        labelStyle: {},
        style: {
          backgroundColor: '#2b2929',

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
        tabStyle: {height: 50},

        // style: {
        //   height: 80,
        //   marginVertical: -30,
        //   backgroundColor: 'black',
        //   // opacity:0.7
        // },
        // tabStyle: {height: 40},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen
        name="Upload"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                backgroundColor: '#51db51',

                top: 5,
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
      <Tab.Screen name="TopButton" component={TopButton} />
    </Tab.Navigator>
  );
}
