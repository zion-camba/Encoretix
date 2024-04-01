import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { Event } from '~/interfaces/apiresults';
import CONSTANTS from '~/constants';

type AttractionProps = {
  item: Event;
  selectedAttractionID: string;
  setSelectedAttractionID: (arg0: string) => void;
};

const Attraction = ({ item, selectedAttractionID, setSelectedAttractionID }: AttractionProps) => {
  return (
    <TouchableOpacity onPress={() => setSelectedAttractionID(item.id)}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              selectedAttractionID === item.id ? CONSTANTS.COLORS.primary_blue : 'white',
          },
        ]}>
        <Image source={{ uri: item.images[0].url }} resizeMode="cover" style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Attraction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 16,

    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 70,
  },
  text: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
});
