import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ExitIcon, LocationIcon, RefreshIcon } from '../../core/assets';
import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View>
          <Text style={styles.greetText}>Hallo, Akbar!</Text>
          <View style={styles.locationContainer}>
            <Image source={LocationIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Jalan Bambu Hijau</Text>
            <TouchableOpacity onPress={() => console.log('Location refreshed')}>
              <Image source={RefreshIcon} style={styles.refreshIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={ExitIcon} style={styles.exitIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
