import { TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';

import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import crashlytics from '@react-native-firebase/crashlytics';

import { styles } from './styles';

import { GoogleIcon } from '../../core/assets';
// import { postLoginWithGoogle } from '../../data/slices/userSlice';

const LoginGoogleButton = () => {
  // const dispatch = useDispatch();
  const navigation = useNavigation();

  const onEvent = async () => {
    await analytics().logLogin({
      method: 'Google',
    });
  };

  const onGoogleButtonPress = async () => {
    onEvent();
    // dispatch(postLoginWithGoogle());
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(googleCredential);

      console.log('Token', googleCredential.token);
      console.log('User UID', res.user.uid);
      console.log('Welcome', res.additionalUserInfo.profile.given_name);

      crashlytics().log('User Logged');
      navigation.navigate('Main', {
        email: res.user.email,
      });
    } catch (err) {
      crashlytics().log('User Login Error');
      crashlytics().recordError(err);

      console.log(err);
    }
  };

  return (
    <TouchableOpacity onPress={onGoogleButtonPress} style={styles.container}>
      <Image source={GoogleIcon} style={styles.icon} />
      <Text style={styles.text}>Google Login</Text>
    </TouchableOpacity>
  );
};

export default LoginGoogleButton;
