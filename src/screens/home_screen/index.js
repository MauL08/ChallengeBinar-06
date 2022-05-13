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

import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';

// import Snackbar from 'react-native-snackbar';
// import Geocoder from 'react-native-geocoding';

import { ExitIcon } from '../../core/assets';
import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  // const onCrash = () => {
  //   crashlytics().log('Log Mounted');
  //   await Promise.all([
  //     crashlytics()
  //   ])
  // };

  const [permission, setPermission] = useState(false);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'HomeScreen',
        screen_class: 'HomeScreen',
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const getAddress = useCallback(() => {
  //   Geocoder.from({
  //     lat: location.latitude,
  //     lng: location.longitude,
  //   }).then(res => {
  //     setAddress(res.results[0].address_components[0]);
  //   });
  // }, [location.latitude, location.longitude]);

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

  const onLogout = () => {
    auth()
      .signOut()
      .then(res => console.log(res));
  };

  useEffect(() => {
    LocationPermission();
    getLocation();
    onLogScreenView();
    // crashlytics().log('Mounted');
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
        <Text style={styles.greetText}>Hello, Akbar!</Text>
        <TouchableOpacity
          onPress={() => {
            onLogout();
            navigation.navigate('Login');
          }}>
          <Image source={ExitIcon} style={styles.exitIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
