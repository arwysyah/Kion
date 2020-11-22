import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Test from '../screen/Test';
import Upload from '../screen/Upload';
import Posting from '../screen/Posting'
import Notification from '../screen/Notification'
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
const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        cardOverlayEnabled: true,
        headerStatusBarHeight:
          navigation
            .dangerouslyGetState()
            .routes.findIndex((r) => r.key === route.key) > 3
            ? 0
            : undefined,
        ...TransitionPresets.ModalPresentationIOS,
      })}
      mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
         <Stack.Screen
        name="Posting"
        component={Posting}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.ModalSlideFromBottomIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
       <Stack.Screen
        name="Notification"
        component={Notification}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={
          ({headerShown: false},
          {
            cardStyleInterpolator: forFade,
            ...TransitionPresets.RevealFromBottomAndroid,
          })
        }
      />

      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },

          cardStyleInterpolator: forFade,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeScreen;
