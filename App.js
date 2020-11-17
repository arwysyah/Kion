import React from 'react'
import {View,Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';
import Index from './src/navigations/index'
import SplashScreen from './src/screen/SplashScreen'

const App =()=>{
  return(
    <>
 <NavigationContainer>

   <Index/>
  </NavigationContainer>

  
 
  </>
  )
}
export default App