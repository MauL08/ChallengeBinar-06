import { View, Text, Alert } from 'react-native';
import React from 'react';

import { styles } from './styles';
import { CameraScreen, CameraType } from 'react-native-camera-kit';
import { useIsFocused } from '@react-navigation/native';

const ScanScreen = () => {
  const focus = useIsFocused();

  const onRead = data => {
    Alert.alert(data.nativeEvent.codeStringValue);
  };

  return focus ? (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <CameraScreen
        cameraType={CameraType.Back}
        scanBarcode={true}
        onReadCode={e => onRead(e)}
        showFrame={true}
        laserColor="#60d67a"
        frameColor="white"
      />
    </View>
  ) : null;
};

export default ScanScreen;
