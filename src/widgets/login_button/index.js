import { Text, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';

// import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
// import crashlytics from '@react-native-firebase/crashlytics';

import { styles } from './styles';
import { FirebaseIcon } from '../../core/assets';
// import { postLoginWithEmail } from '../../data/slices/userSlice';

const LoginButton = props => {
  // const dispatch = useDispatch();
  const { email, password } = props;
  const navigation = useNavigation();

  const onEvent = async () => {
    await analytics().logLogin({
      method: 'Email',
    });
  };

  const onLogin = () => {
    onEvent();
    if (email.length > 0 && password.length > 0) {
      const content = {
        email: email,
        password: password,
      };
      // dispatch(postLoginWithEmail(content));
      auth()
        .signInWithEmailAndPassword(content.email, content.password)
        .then(res => {
          crashlytics().log('User Logged');
          console.log(res);
          navigation.navigate('Main', {
            email: res.user.email,
          });
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
