import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';
import Spotify from '../assets/spotify.png';
import Website from '../assets/website.png';

import { AttractionDetails } from '~/interfaces/attractionDetails';

type SocialsProps = {
  attractionDetails: AttractionDetails | undefined;
  handleOpenSocials: (arg0: string) => void;
  name: string | undefined;
};

const Socials = ({ attractionDetails, handleOpenSocials, name }: SocialsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.attractionName}>{name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => handleOpenSocials(attractionDetails?.externalLinks?.twitter[0].url!)}>
          <Image source={Twitter} resizeMode="contain" style={styles.social} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOpenSocials(attractionDetails?.externalLinks?.youtube[0].url!)}>
          <Image source={Youtube} resizeMode="contain" style={styles.social} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOpenSocials(attractionDetails?.externalLinks?.spotify[0].url!)}>
          <Image source={Spotify} resizeMode="contain" style={styles.social} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOpenSocials(attractionDetails?.externalLinks?.homepage[0].url!)}>
          <Image source={Website} resizeMode="contain" style={[styles.social, { marginTop: 5 }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Socials;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  attractionName: {
    fontSize: 20,
    fontWeight: '400',
  },
  social: {
    width: 30,
    height: 30,
  },
});
