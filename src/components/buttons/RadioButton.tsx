import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type RadioButtonProps = {
  label: string;
  status: 'active' | 'pressed' | 'inactive';
  onPress: () => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, status, onPress }) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <View style={[styles.radioCircle, statusStyles[status]]}>
        {status === 'pressed' && (
          <>
            <View style={styles.whiteOutline} />
            <View style={styles.blueOutline} />
          </>
        )}
        
        {status === 'active' && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
    color: '#171717',
  },
  
  whiteOutline: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'blue',
  },
  blueOutline: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    margin: 4,
  },
});

const statusStyles = StyleSheet.create({
  active: {
    backgroundColor: '#3B82F6',
    borderWidth: 0,
  },
  pressed: {
    backgroundColor: '#808080',
    borderColor: '#2fa6dd',
    borderWidth: 2,
    padding: 2,
  },
  inactive: {
    backgroundColor: '#AAAAAA',
    borderWidth: 0,
  },
});

export default RadioButton;
