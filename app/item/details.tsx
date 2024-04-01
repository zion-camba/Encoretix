import { StyleSheet, Text, View, Image, FlatList, Linking, Alert } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import CONSTANTS from '~/constants';
import { getAttractionDetails } from '~/services/api';
import Header from '~/components/Header';
import Socials from '~/components/Socials';

const page = () => {
  const { id, name } = useLocalSearchParams<{
    id: string;
    name: string;
  }>();

  const { data: attractionDetails } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getAttractionDetails(id),
  });

  console.log('attractionDetails', attractionDetails?.upcomingEvents);

  const handleOpenSocials = (url: string) => {
    Linking.openURL(url).catch((err) => Alert.alert("Couldn't load page", err));
  };

  return (
    <View style={styles.bg}>
      <Header />
      <Image
        source={{ uri: attractionDetails?.images[0].url }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.container}>
        <Socials
          handleOpenSocials={handleOpenSocials}
          attractionDetails={attractionDetails}
          name={name}
        />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text>Upcoming Events: </Text>
          <Text>{attractionDetails?.upcomingEvents._total}</Text>
        </View>
      </View>
    </View>
  );
};

export default page;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: CONSTANTS.COLORS.white,
  },
  container: {
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
