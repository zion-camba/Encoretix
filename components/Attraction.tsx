import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { Event } from '~/interfaces/apiresults';
import CONSTANTS from '~/constants';

type Arg0 = {
  id: string;
  name: string;
};

type AttractionProps = {
  item: Event;
  selectedAttraction: Arg0;
  setSelectedAttraction: (arg0: Arg0) => void;
};

const Attraction = ({ item, selectedAttraction, setSelectedAttraction }: AttractionProps) => {
  return (
    <TouchableOpacity onPress={() => setSelectedAttraction({ id: item.id, name: item.name })}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              selectedAttraction.id === item.id ? CONSTANTS.COLORS.primary_blue : 'white',
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
