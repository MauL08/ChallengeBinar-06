import { StatusBar, useColorScheme } from 'react-native';
import React from 'react';

const ScreenStatusBar = () => {
  const theme = useColorScheme();

  return theme === 'dark' ? (
    <StatusBar barStyle="dark-content" />
  ) : (
    <StatusBar barStyle="light-content" />
  );
};

export default ScreenStatusBar;
