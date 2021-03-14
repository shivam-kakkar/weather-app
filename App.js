import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import Search from './screens/Search';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      {/* <Search /> */}
      <Home />
    </>
  );
};

export default App;
