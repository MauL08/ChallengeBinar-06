import { View, Text } from 'react-native';
import React from 'react';

import LogoutButton from '../../widgets/logout_button';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <LogoutButton />
    </View>
  );
};

export default ProfileScreen;
