import React from 'react';
import {
  View, TextInput, StyleSheet, Keyboard,
} from 'react-native';

// import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      {/* <AppBar /> */}
      <View style={styles.inputContainer}>
        <TextInput value="Lorem ipsum" multiline style={styles.input} onSubmitEditing={Keyboard.dismiss} />
      </View>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});