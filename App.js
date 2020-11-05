import React from 'react'
import HomeScreen from './src/navigations/StackNavigation'
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';
const App =()=>{
  return(
<NavigationContainer>
  <BottomNavigation/>
  </NavigationContainer>

  )
}
export default App