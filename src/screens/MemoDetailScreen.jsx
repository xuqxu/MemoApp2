/* eslint-disable max-len */
import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      {/* AppBar */}
      <AppBar />
      {/* MemoHeader */}
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>Lorem ipsum</Text>
        <Text style={styles.memoDate}>2021/1/1 0:00</Text>
      </View>
      {/* MemoListDetail */}
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      {/* CircleButton */}
      <CircleButton style={{ top: 160, bottom: 'auto' }} name="fountain-pen-tip" />
      {/* end */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6faff',
  },
  memoHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,

    /* shadow */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 1,
  },
  memoTitle: {
    color: '#6c7686',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#848484',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    color: '#6c7686',
    fontSize: 16,
    lineHeight: 25,
  },
});
