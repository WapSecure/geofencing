import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import GeofenceSetup from '../components/GeofenceSetup';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Geofencing App</Text>
      <GeofenceSetup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default HomeScreen;
