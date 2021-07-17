import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>φ</Text>
        <Text style={styles.appbarRight}>Log Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 106,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    justifyContent: 'flex-end',

    /* shadow */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 1,
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    left: 150,
    bottom: 16,
    color: '#848484',
  },
  appbarTitle: {
    bottom: 8,
    fontSize: 24,
    color: '#848484',
  },
});
