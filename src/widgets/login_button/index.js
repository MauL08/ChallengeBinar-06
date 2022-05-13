import { Text, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import { styles } from './styles';
import { FirebaseIcon } from '../../core/assets';

const LoginButton = props => {
  const navigation = useNavigation();

  const { email, password } = props;

  const onEvent = async () => {
    await analytics().logLogin({
      method: 'Email',
    });
  };

  const onLogin = () => {
    onEvent();
    if (email.length > 0 && password.length > 0) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          crashlytics().log('User Logged');
          console.log('Token', res.user.uid);
          navigation.navigate('Main');
        })
        .catch(error => {
          crashlytics().log('User Login Error');
          crashlytics().recordError(error);
          Alert.alert('Error', error.message);
        });
    } else {
      Alert.alert('Error', 'Invalid Credentials');
    }
  };
  return (
    <TouchableOpacity onPress={onLogin} style={styles.container}>
      <Image source={FirebaseIcon} style={styles.icon} />
      <Text style={styles.text}>Firebase Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
