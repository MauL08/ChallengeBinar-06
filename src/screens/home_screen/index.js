import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import GeoLocation from 'react-native-geolocation-service';
import Snackbar from 'react-native-snackbar';

import { ExitIcon, LocationIcon, RefreshIcon } from '../../core/assets';
import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [permission, setPermission] = useState(false);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const openSnackbar = () => {
    Snackbar.show({
      text: 'Location Refreshed',
      duration: Snackbar.LENGTH_LONG,
    });
  };

  const LocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermission(granted);
      } else {
        setPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = useCallback(() => {
    if (permission) {
      GeoLocation.getCurrentPosition(position => {
        const { longitude, latitude } = position.coords;
        setLocation({
          ...location,
          latitude,
          longitude,
        });
      });
    }
  }, [location, permission]);

  useEffect(() => {
    LocationPermission();
    getLocation();
  }, [getLocation, location, permission]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -6.33756,
            longitude: 106.89662,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      </View>
      <View style={styles.userContainer}>
        <View>
          <Text style={styles.greetText}>Hello, Akbar!</Text>
          <View style={styles.locationContainer}>
            <Image source={LocationIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Jalan Bambu Hijau</Text>
            <TouchableOpacity
              onPress={() => {
                openSnackbar();
                getLocation();
              }}>
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
