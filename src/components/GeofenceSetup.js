import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import MapComponent from './MapView';
import { monitorLocation } from '../services/GeofencingService';
import { requestLocationPermission } from '../utils/Permissions';

const GeofenceSetup = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [geofence, setGeofence] = useState(null);

  const onPressMap = async (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setGeofence({ center: { latitude, longitude }, radius: 100 });

    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      monitorLocation(
        { center: { latitude, longitude }, radius: 100 },
        () => Alert.alert('Entered Geofence'),
        () => Alert.alert('Exited Geofence')
      );
    } else {
      Alert.alert('Location permission is required');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapComponent region={region} geofence={geofence} onPress={onPressMap} />
    </View>
  );
};

export default GeofenceSetup;
