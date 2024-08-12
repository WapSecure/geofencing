import { PermissionsAndroid, Platform } from 'react-native';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    return Promise.resolve(true); // iOS handles permissions differently so i added this block of code to handle that
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};
