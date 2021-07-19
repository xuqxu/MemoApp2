import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

// import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line */}
      <StatusBar style="dark" />
      {/* <AppBar /> */}
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
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
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
