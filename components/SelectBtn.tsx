import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import CONSTANTS from '~/constants';

type SelectBtnProps = {
  handleSelect: () => void;
};

const SelectBtn = ({ handleSelect }: SelectBtnProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSelect}>
      <Text style={styles.label}>Select</Text>
    </TouchableOpacity>
  );
};

export default SelectBtn;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 140,
    borderRadius: 13,
    backgroundColor: CONSTANTS.COLORS.primary_blue,
    marginTop: 10,
    marginBottom: 80,
  },
  label: {
    color: CONSTANTS.COLORS.white,
    fontWeight: 'bold',
  },
});
