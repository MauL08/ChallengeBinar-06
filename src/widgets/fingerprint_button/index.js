import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TouchID from 'react-native-touch-id';

import { styles } from './styles';
import { FingerprintIcon } from '../../core/assets';

const FingerprintButton = () => {
  const navigation = useNavigation();

  const optionalConfigObject = {
    title: 'Place your Finger to Scan',
    imageColor: 'green', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch Sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
  };

  const checkHandle = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const pressHandler = () => {
    TouchID.authenticate('', optionalConfigObject)
      .then(() => {
        navigation.navigate('Main', {
          email: 'Anonymous',
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>Fingerprint Login</Text>
      <TouchableOpacity
        onPress={() => {
          checkHandle();
          pressHandler();
        }}
        style={styles.logoContainer}>
        <Image source={FingerprintIcon} style={styles.fingerLogo} />
      </TouchableOpacity>
    </View>
  );
};

export default FingerprintButton;
