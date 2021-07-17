import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View style={styles.memoListItemInner}>
          <Text style={styles.memoListItemTitle}>Lorem ipsum</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 0:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
