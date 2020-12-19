/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation/index'
import {NavigationContainer} from  '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
       <AppNavigator/>
    </NavigationContainer>
  );
};



export default App;
