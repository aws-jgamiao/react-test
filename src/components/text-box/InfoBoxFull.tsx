import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FullWidthTextBox = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        placeholder="Some string"
        placeholderTextColor="#9CA3AF"
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textBox: {
    width: '100%',
    height: 150,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    textAlignVertical: 'top',
  },
});

export default FullWidthTextBox;
