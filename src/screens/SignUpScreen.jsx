import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import CancelLogIn from '../components/CancelLogIn';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CancelLogIn />,
    });
  }, []);

  function handlePress() {
    setLoading(true);
    const { currentUser } = firebase.auth();
    if (!currentUser) { return; }
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    currentUser.linkWithCredential(credential)
      .then(() => {
        Alert.alert('登録完了', '登録したメールアドレスとパスワードは大切に保管してください。', [
          {
            text: 'OK',
            onPress: () => {
              navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
            },
          },
        ]);
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .then(() => {
        setLoading(false);
      });
  }
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <StatusBar style="dark" />
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Log In.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6faff',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#6c7686',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 56,
    borderColor: '#d2d2d7',
    borderRadius: 12,
    color: '#86868b',
    borderWidth: 1,
    backgroundColor: '#f6faff',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#6c7686',
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgb(88, 135, 245)',
  },
  footer: {
    flexDirection: 'row',
  },
});
