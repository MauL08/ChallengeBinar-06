import { TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import { GoogleIcon } from '../../core/assets';

const LoginGoogleButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Main')}
      style={styles.container}>
      <Image source={GoogleIcon} style={styles.icon} />
      <Text style={styles.text}>Google Login</Text>
    </TouchableOpacity>
  );
};

export default LoginGoogleButton;
