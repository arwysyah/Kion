import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SlideNavigation from './SlideNavigation';
import PhoneLogin from '../screen/PhoneLogin';
import Login from '../screen/Login'
import Password from '../screen/Password';
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
const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: 'horizontal-inverted',
      })}>
      <Stack.Screen
        name="SplashScreen"
        component={Login}
        options={{headerShown: false}}
      />

     
            <Stack.Screen
        name="Password"
        component={Password}
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
  
         <Stack.Screen
        name="PhoneLogin"
        component={PhoneLogin}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.ModalSlideFromBottomIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
    </Stack.Navigator>
  );
};
export default Auth;
