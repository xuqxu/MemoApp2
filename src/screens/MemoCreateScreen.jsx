import React from 'react';
import {
  View, TextInput, StyleSheet, Keyboard,
} from 'react-native';

import firebase from 'firebase';

// import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref.add({
      bodyText: 'Hello',
    })
      .then((docRef) => {
        // eslint-disable-next-line no-console
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error!', error);
      });
  }

  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      {/* <AppBar /> */}
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} onSubmitEditing={Keyboard.dismiss} />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
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
