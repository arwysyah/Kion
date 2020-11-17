import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SlideNavigation from './SlideNavigation';
import SplashScreen from '../screen/SplashScreen';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Index = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: 'horizontal-inverted',
      })}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SlideNavigation"
        component={SlideNavigation}
        options={{
          transitionSpec: {
            open: config,
            close: config,
            backgroundColor: 'black',
          },

          cardStyleInterpolator: forFade,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
    </Stack.Navigator>
  );
};
export default Index;
