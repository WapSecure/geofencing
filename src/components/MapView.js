import React from 'react';
import MapView, {  Circle } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const MapComponent = ({ region, geofence, onPress }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onPress={onPress}
      >
        {geofence && (
          <Circle
            center={geofence.center}
            radius={geofence.radius}
            strokeColor="rgba(158,158,255,0.3)"
            fillColor="rgba(158,158,255,0.3)"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
