import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import firebase from 'firebase';

// import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { };
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updateAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(doc.id, doc.data());
        });
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
      {/* <AppBar /> */}
      <MemoList />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6faff',
  },
});
