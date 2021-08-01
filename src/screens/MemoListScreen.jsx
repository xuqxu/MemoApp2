import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Alert, Text,
} from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import Button from '../components/Button';
import Loading from '../components/Loading';
import HeaderRightButton from '../components/HeaderRightButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const cleanupFuncs = {
      auth: () => { },
      memos: () => { },
    };
    cleanupFuncs.auth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const ref = db.collection(`users/${user.uid}/memos`).orderBy('updatedAt', 'desc');
        cleanupFuncs.memos = ref.onSnapshot((snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
          setLoading(false);
        }, () => {
          setLoading(false);
        });
        navigation.setOptions({
          headerRight: () => (
            <HeaderRightButton currentUser={user} cleanupFuncs={cleanupFuncs} />
          ),
        });
      } else {
        firebase.auth().signInAnonymously()
          .catch(() => {
            Alert.alert('エラー', 'アプリを再起動してください');
          })
          .then(() => { setLoading(false); });
      }
    });
    return () => {
      cleanupFuncs.auth();
      cleanupFuncs.memos();
    };
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        {/* eslint-disable-next-line */}
        <StatusBar style="auto" />
        <Loading isLoading={isLoading} />
        <View>
          <Text style={emptyStyles.title}>最初のメモを作成しましょう。</Text>
          <Button
            label="作成する"
            onPress={() => { navigation.navigate('MemoCreate'); }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
      <MemoList memos={memos} />
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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6faff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
});
