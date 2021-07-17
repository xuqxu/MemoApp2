import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
      {/* appBar */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>φ</Text>
          <Text style={styles.appbarRight}>Log Out</Text>
        </View>
      </View>
      {/* memoList */}
      <View>
        <View style={styles.memoListItem}>
          <View style={styles.memoListItemInner}>
            <Text style={styles.memoListItemTitle}>memo 1</Text>
            <Text style={styles.memoListItemDate}>2021/1/1 0:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/* circleButton */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
      {/* end */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6faff',
  },
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
  memoListItem: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 5,
    paddingVertical: 12,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderRadius: 4,

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
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: '#6c7686',
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
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
