import { Alert } from 'react-native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from '../../core/router/navigator';

// Google Login Packages
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import crashlytics from '@react-native-firebase/crashlytics';

// Email Login Packages

export const postLoginWithGoogle = createAsyncThunk(
  'user/googleLogin',
  async ({ rejectWithValue }) => {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(googleCredential);

      //   console.log('Token', googleCredential.token);
      //   console.log('User UID', res.user.uid);
      //   console.log('Welcome', res.additionalUserInfo.profile.given_name);

      crashlytics().log('User Logged');
      navigate('Main');

      return res;
    } catch (error) {
      crashlytics().log('User Login Error');
      crashlytics().recordError(error);

      return rejectWithValue(error.response.data);
    }
  },
);

export const postLoginWithEmail = createAsyncThunk(
  'user/emailLogin',
  async (data, { rejectWithValue }) => {
    try {
      // auth()
      //   .signInWithEmailAndPassword(data.email, data.password)
      //   .then(res => {
      //     crashlytics().log('User Logged');
      //     navigate('Main');
      //     result = res;
      //   })
      //   .catch(error => {
      //     crashlytics().log('User Login Error');
      //     crashlytics().recordError(error);
      //     Alert.alert('Error', error.message);
      //   });
      const result = auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );

      console.log(result);

      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  userInfo: {},
  id: '',
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: state => {
      return {
        ...state,
        userInfo: {},
        id: '',
        isLoading: false,
      };
    },
  },
  extraReducers: {
    [postLoginWithGoogle.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [postLoginWithEmail.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [postLoginWithGoogle.fulfilled]: (state, action) => {
      return {
        ...state,
        userInfo: action.payload.additionalUserInfo.profile,
        id: action.payload.user.uid,
        isLoading: false,
      };
    },
    [postLoginWithEmail.fulfilled]: (state, action) => {
      return {
        ...state,
        userInfo: action.payload.additionalUserInfo.profile,
        token: action.payload.user.uid,
        isLoading: false,
      };
    },
  },
});

export const { setLogout } = userSlice.actions;
export default userSlice.reducer;
