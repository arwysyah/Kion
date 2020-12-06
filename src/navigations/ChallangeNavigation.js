import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Challenge from '../screen/Challenge';
import Compete from '../screen/Compete';
const Stack = createStackNavigator();
const ChallangeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Challange"
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
        name="Challange"
        component={Challenge}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Compete"
        component={Compete}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal',
          })
        }
      />
    </Stack.Navigator>
  );
};
export default ChallangeNavigation;
