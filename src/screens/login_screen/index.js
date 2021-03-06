import { View, Text, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

import analytics from '@react-native-firebase/analytics';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import crashlytics from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';

import { styles } from './styles';
import LoginButton from '../../widgets/login_button';
import ScreenStatusBar from '../../widgets/screen_status_bar';
import LoginGoogleButton from '../../widgets/login_google_button';
import FingerprintButton from '../../widgets/fingerprint_button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'LoginScreen',
        screen_class: 'LoginScreen',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSetupMessageNotification = () => {
    messaging().onNotificationOpenedApp(log => {
      Alert.alert(log.notification.title, log.notification.body);
    });
  };

  useEffect(() => {
    onLogScreenView();
    onSetupMessageNotification();
    crashlytics().log('App mounted.');
    GoogleSignin.configure({
      webClientId:
        '763831033371-5110lhqle5u8dg9sgv9pi3qj9he9vnt6.apps.googleusercontent.com',
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScreenStatusBar />
      <View style={styles.main}>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          style={styles.usernameInputBar}
          placeholder="Email"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.passwordInputBar}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <LoginButton email={email} password={password} />
        <LoginGoogleButton />
        <FingerprintButton />
      </View>
    </View>
  );
};

export default LoginScreen;
