/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { };
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView>
        <View style={styles.memoBodyInner}>
          <Text style={styles.memoText}>
            <Markdown
              style={{
                body: { color: '#6c7686' },
              }}
            >
              {String(memo && memo.bodyText)}
            </Markdown>
          </Text>
        </View>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="fountain-pen-tip"
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
    paddingHorizontal: 16,

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
  memoBodyInner: {
    paddingTop: 32,
    paddingBottom: 80,
    paddingHorizontal: 16,
  },
  memoText: {
    color: '#6c7686',
    fontSize: 16,
    lineHeight: 25,
  },
});
