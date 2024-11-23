import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import Svg from 'react-native-svg';

interface ActionButtonProps {
  onPress: () => void;
  icon: JSX.Element;
  text: string;
  style?: ViewStyle;
  iconStyle?: ViewStyle;
  textStyle?: TextStyle;
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
    className={`flex-1 bg-white border-2 border-${iconColor} rounded-lg p-2 flex-row items-center justify-center mx-1 ${style}`}
  >
    <Svg
      width="20"
      height="20"
      viewBox="0 0 70 70"
      className={`mr-1 ${iconStyle}`}
    >
      {icon}
    </Svg>
    <Text className={`text-${iconColor} text-sm font-bold ${textStyle}`}
>{text}</Text>
  </TouchableOpacity>
);

export default ActionButton;