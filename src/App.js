import React, { useEffect } from 'react';
import RootNavigator from './core/router';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  // return (
  //   <Provider store={store}>
  //     <PersistGate persistor={persistor}>
  //       <RootNavigator />
  //     </PersistGate>
  //   </Provider>
  // );

  return <RootNavigator />;
};

export default App;
