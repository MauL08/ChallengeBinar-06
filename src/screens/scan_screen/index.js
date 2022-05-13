import { View, Text, Alert, TouchableOpacity, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';

import { styles } from './styles';
import { CameraScreen, CameraType } from 'react-native-camera-kit';
import { useIsFocused } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

const ScanScreen = () => {
  const focus = useIsFocused();
  const [scan, setScan] = useState('');

  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'ScanScreen',
        screen_class: 'ScanScreen',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onScan = result => {
    if (result.length > 0) {
      Alert.alert('QR Code Result', result, [
        {
          text: 'Open URL',
          onPress: () => {
            Linking.openURL(result);
            setScan('');
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => setScan(''),
        },
      ]);
    }
    if (result === '') {
      setScan('');
      Alert.alert('Error', 'QR Code not detected.');
    }
  };

  useEffect(() => {
    onLogScreenView();
  }, []);

  return focus ? (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <View style={styles.cameraContainer}>
        <CameraScreen
          cameraType={CameraType.Back}
          scanBarcode={true}
          onReadCode={e => {
            setScan(e.nativeEvent.codeStringValue);
          }}
          showFrame={true}
          laserColor="#60d67a"
          frameColor="white"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onScan(scan)}>
        <Text style={styles.buttonText}>Capture QR Code</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

export default ScanScreen;
