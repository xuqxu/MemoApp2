import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
      {/* appBar */}
      <View>
        <View>
          <Text>φ</Text>
          <Text>Log Out</Text>
        </View>
      </View>
      {/* memoList */}
      <View>
        <View>
          <View>
            <Text>memo 1</Text>
            <Text>2021/1/1 0:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/* circleButton */}
      <View>
        <Text>+</Text>
      </View>
      {/* end */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
