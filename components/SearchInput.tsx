import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import CONSTANTS from '../constants';

type SearchInputProps = {
  searchString: string;
  setSearchString: (arg0: string) => void;
  onSubmit: () => void;
};

const SearchInput = ({ searchString, setSearchString, onSubmit }: SearchInputProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          color={CONSTANTS.COLORS.primary_blue}
          size={25}
          style={{ marginRight: 5 }}
        />
        <TextInput
          value={searchString}
          onChangeText={(val) => setSearchString(val)}
          placeholder="Search for Attractions"
          style={{ flex: 1 }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.label}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: CONSTANTS.COLORS.light_blue,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginRight: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 13,
    backgroundColor: CONSTANTS.COLORS.primary_blue,
  },
  label: {
    color: CONSTANTS.COLORS.white,
    fontWeight: 'bold',
  },
});
