import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Test from '../screen/Test';
import Upload from '../screen/Upload';
import Posting from '../screen/Posting'
import Profile from '../screen/Profile'
import EditProfile from '../screen/EditProfile'
import ActionSheet from '../screen/actionSheet'
import Chat from '../screen/Chat'
import ProfileById from '../screen/ProfileById'
import Camera from '../screen/Camera'
import GalleryPhoto from '../screen/GalleryPhoto'

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
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },

          cardStyleInterpolator: forFade,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
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
        name="GalleryPhoto"
        component={GalleryPhoto}
        options={
          ({headerShown: false},
            {
              ...TransitionPresets.SlideFromRightIOS,
              gestureDirection: 'horizontal',
            })
        
        }
      />
           <Stack.Screen
        name="Action"
        component={ActionSheet}
        options={
          ({headerShown: false},
            {
              ...TransitionPresets.SlideFromRightIOS,
              gestureDirection: 'horizontal',
            })
        }
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
        <Stack.Screen
        name="Camera"
        component={Camera}
        options={
          ({headerShown: false},
            {
              ...TransitionPresets.ModalSlideFromBottomIOS,
              gestureDirection: 'horizontal-inverted',
            })
          }
      />
        <Stack.Screen
        name="ProfileById"
        component={ProfileById}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
        <Stack.Screen
        name="Chat"
        component={Chat}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal',
          })
        }
      />
         <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal',
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
