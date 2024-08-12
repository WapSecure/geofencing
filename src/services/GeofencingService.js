import Geolocation from 'react-native-geolocation-service';

const calculateDistance = (point1, point2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of Earth in km
  const dLat = toRad(point2.latitude - point1.latitude);
  const dLon = toRad(point2.longitude - point1.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(point1.latitude)) *
      Math.cos(toRad(point2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c * 1000; // Convert to meters
};

export const monitorLocation = (geofence, onEnter, onExit) => {
  Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const distance = calculateDistance(
        { latitude, longitude },
        geofence.center
      );

      if (distance <= geofence.radius) {
        onEnter();
      } else {
        onExit();
      }
    },
    (error) => console.error(error),
    { enableHighAccuracy: true, distanceFilter: 10 }
  );
};
