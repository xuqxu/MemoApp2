import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CircleButton() {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'rgb(88, 135, 245)',
    width: 56,
    height: 56,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 17,
    bottom: 33,

    /* shadow */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});
