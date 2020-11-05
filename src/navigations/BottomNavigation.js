import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './StackNavigation';
import Settings from '../screen/Settings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import gray from '../components/color';

const Tab = createBottomTabNavigator();
const getIsTabBarVisible = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params
    ? route.params.screen
    : 'Home';

  switch (routeName) {
    case 'Home':
    case 'Settings':
      return true;
    default:
      return false;
  }
};

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getIsTabBarVisible(route),
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'info-circle' : 'info';
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: gray,
        style: {
          height: 80,
          marginVertical: -30,
          backgroundColor: 'black',
        },
        tabStyle: {height: 40},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
