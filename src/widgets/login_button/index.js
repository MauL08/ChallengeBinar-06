import { Text, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import { styles } from './styles';
import { FirebaseIcon } from '../../core/assets';

const LoginButton = props => {
  const navigation = useNavigation();

  const { email, password } = props;

  const onLogin = () => {
    if (email.length > 0 && password.length > 0) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('user signed');
          console.log('Token', res.user.uid);
        })
        .catch(error => {
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
