/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Headerprops {
  title: string;
}

const Header: React.FC<Headerprops> = ({ title }) => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
});

export default Header;
