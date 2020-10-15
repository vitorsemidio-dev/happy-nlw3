/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orphanage Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0089a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffd666',
    fontSize: 32,
  },
});
