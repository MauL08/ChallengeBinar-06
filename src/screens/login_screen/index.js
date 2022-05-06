import { View, Text } from 'react-native';
import React from 'react';

import LoginButton from '../../widgets/login_button';
import ScreenStatusBar from '../../widgets/screen_status_bar';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScreenStatusBar />
      <Text>Login Screen</Text>
      <LoginButton />
    </View>
  );
};

export default LoginScreen;
