
import React from 'react';

import Navigation from "./src/navigator/navigator.js"

import {
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
}

export default App;
