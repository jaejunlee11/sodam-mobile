/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
} from 'react-native';

import Onboard1 from './src/screens/Onboard1';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Onboard1></Onboard1>
    </SafeAreaView>
  );
}

export default App;
