import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import Svg from 'react-native-svg';

interface ActionButtonProps {
  onPress: () => void;
  icon: JSX.Element;
  text: string;
  style?: ViewStyle; // custom style for the container
  iconStyle?: ViewStyle; // custom style for the icon
  textStyle?: TextStyle; // custom style for the text
  iconColor?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  icon,
  text,
  style,
  iconStyle,
  textStyle,
  iconColor
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{ flex: 1, backgroundColor: 'white', borderWidth: 2, borderColor: iconColor, borderRadius: 8, padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 4 }, style]} // Default styles
  >
    <Svg width="20" height="20" viewBox="0 0 70 70" style={[{ marginRight: 4 }, iconStyle]}>
      {icon}
    </Svg>
    <Text style={[{ color: iconColor, fontSize: 14, fontWeight: 'bold' }, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

export default ActionButton;