import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Import FontAwesome icons

type CheckboxProps = {
  label: string;
  status: 'active' | 'intermediate' | 'inactive';
  onPress: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, status, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onPress}>
      <View style={[styles.checkboxBox, statusStyles[status]]}>
        {status === 'active' && (
          <Icon name="check" size={12} color="#FFFFFF" />
        )}
        {status === 'intermediate' && (
          <Icon name="minus" size={16} color="#FFFFFF" />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
    color: '#171717',
  },
});

const statusStyles = StyleSheet.create({
  active: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  intermediate: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
    padding: 2,
  },
  inactive: {
    backgroundColor: 'transparent',
    borderColor: '#AAAAAA',
  },
});

export default Checkbox;
