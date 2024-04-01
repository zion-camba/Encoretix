import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';

import CONSTANTS from '~/constants';
import SadFace from '../assets/sadface_icon.png';

const EpmtyListBanner = () => {
  return (
    <View style={styles.container}>
      <Image source={SadFace} resizeMode="center" style={styles.image} />
      <Text style={styles.font}>No Results Found</Text>
    </View>
  );
};

export default EpmtyListBanner;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 66,
    paddingVertical: 26,
    borderRadius: 20,
    marginTop: 50,
  },
  image: {
    width: 80,
    height: 80,
  },
  font: {
    fontSize: 25,
    fontWeight: '400',
    color: CONSTANTS.COLORS.primary_blue,
  },
});
