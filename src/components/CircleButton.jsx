import React from 'react';
import { StyleSheet, View } from 'react-native';
import { string, shape } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <MaterialCommunityIcons name={name} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'rgb(88, 135, 245)',
    width: 56,
    height: 56,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 17,
    bottom: 33,

    /* shadow */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});
