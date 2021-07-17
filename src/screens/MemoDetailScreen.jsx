/* eslint-disable max-len */
import React from 'react';
import {
  View, ScrollView, Text,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      {/* AppBar */}
      <AppBar />
      {/* MemoListItem */}
      <View>
        <Text>Lorem ipsum</Text>
        <Text>2021/1/1 0:00</Text>
      </View>
      {/* MemoListDetail */}
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      {/* CircleButton */}
      <CircleButton>+</CircleButton>
      {/* end */}
    </View>
  );
}
