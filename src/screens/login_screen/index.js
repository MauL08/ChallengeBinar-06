import { View, Text, TextInput } from 'react-native';
import React from 'react';

import { styles } from './styles';
import LoginButton from '../../widgets/login_button';
import ScreenStatusBar from '../../widgets/screen_status_bar';
import LoginGoogleButton from '../../widgets/login_google_button';
import FingerprintButton from '../../widgets/fingerprint_button';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenStatusBar />
      <View style={styles.main}>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput style={styles.usernameInputBar} placeholder="Email" />
        <TextInput
          style={styles.passwordInputBar}
          placeholder="Password"
          secureTextEntry={true}
        />
        <LoginButton />
        <LoginGoogleButton />
        <FingerprintButton />
      </View>
    </View>
  );
};

export default LoginScreen;
