import React from 'react'
import {View,Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';
import Index from './src/navigations/index'
import Password from './src/screen/Password'
import {Provider }from 'react-redux'
import {store} from './src/redux/store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Index/>
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App