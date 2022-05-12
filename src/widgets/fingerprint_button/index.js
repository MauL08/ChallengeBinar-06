import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { FingerprintIcon } from '../../core/assets';

const FingerprintButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>Fingerprint Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.logoContainer}>
        <Image source={FingerprintIcon} style={styles.fingerLogo} />
      </TouchableOpacity>
    </View>
  );
};

export default FingerprintButton;
