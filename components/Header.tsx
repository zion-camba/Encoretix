import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

import HEADER from '../assets/header.png';

const header = () => {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: '#182F40' },
        headerTitle: () => (
          <View
            style={{
              backgroundColor: '#182F40',
              width: '100%',
            }}>
            <Image source={HEADER} style={{ width: 150, height: 40 }} resizeMode="contain" />
          </View>
        ),
        headerBackVisible: false,
      }}
    />
  );
};

export default header;

const styles = StyleSheet.create({});
