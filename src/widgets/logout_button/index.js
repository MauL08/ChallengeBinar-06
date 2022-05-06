import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
