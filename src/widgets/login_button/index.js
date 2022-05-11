import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { FirebaseIcon } from '../../core/assets';

const LoginButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Main')}
      style={styles.container}>
      <Image source={FirebaseIcon} style={styles.icon} />
      <Text style={styles.text}>Firebase Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
