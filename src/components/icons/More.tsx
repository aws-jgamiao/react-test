import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface MoreProps {
  color: string;
}

const tailwindToHex = (colorClass: string): string => {
  const tailwindColors: { [key: string]: string } = {
    'gray-500': '#6B7280',
    'blue-500': '#3B82F6', 
  };

  return tailwindColors[colorClass] || '#000000'; // Default to black if color not found
};

  const More: React.FC<MoreProps> = ({ color }) => {
    const hexColor = tailwindToHex(color); // Convert to hex
    return (
    <Svg width={24} height={24} viewBox="0 0 100 100" fill="none">
      <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.4235294117647059}
          d="M46.5 4l7.5.5-7.5.5V4zM40.5 5l3.5.5-3.5.5V5zM57.5 5l2.5.5-2.5.5V5zM36.5 6l2.5.5-2.5.5V6zM61.5 6L66 7.5l-1.5.5-3-1V6zM31.5 8l1.5.5Q21.9 12.9 15.5 22l9-10 7-4zM67.5 8l4.5 2.5-1.5-.5q-3.8-.3-3-2zM73.5 11l1 2-1-2zM42.5 13l4.5.5-4.5.5v-1zM53.5 13l3.5.5-3.5.5v-1zM76.5 13q9.3 6.2 13.5 17.5h-1l-4-8-8.5-9.5zM36.5 15l1.5.5-6.5 3.5 1-2 4-2zM62.5 15l6.5 3.5-1.5-.5-5-2v-1zM29.5 19l-8 9 8-9zM70.5 19l8 9-8-9zM14.5 23l-1 2 1-2zM12.5 26l-.5 1.5-1.5 3.5-.5-1.5 2.5-3.5zM20.5 29l-.5 1.5-2.5 5.5-.5-1.5 3.5-5.5zM79.5 29l3.5 6.5h-1L79.5 29zM9.5 32l.5 1.5L8.5 37 8 34.5 9.5 32zM91.5 34l.5 2.5h-1l.5-2.5zM7.5 38l.5 2.5H7l.5-2.5zM92.5 38l.5 3.5h-1l.5-3.5zM84.5 40l.5 4.5h-1l.5-4.5zM15.5 41l.5 3.5h-1l.5-3.5zM32.5 42q5.1-.6 6.5 2.5l1 4h-1L38 44l-5.5-1v-1zM48.5 42l3.5.5-3.5.5v-1zM64.5 42l3.5.5-3.5.5v-1zM30.5 43L29 45.5q-1.2 5.8 2 7l-3-2q-1.2-6.2 2.5-7.5zM46.5 43l-1 2 1-2zM53.5 43l1 2-1-2zM62.5 43l-.5 1.5-.5 1.5-.5-1.5 1.5-1.5zM69.5 43q3.8 1.3 2.5 7.5l-3 2q3.3-1.2 2-7L69.5 43zM6.5 44l.5 7.5H6l.5-7.5zM93.5 44l.5 7.5h-1l.5-7.5zM44.5 46l.5 3.5h-1l.5-3.5zM55.5 46l.5 3.5h-1l.5-3.5zM60.5 47l1.5 5 6 1.5-3.5.5-3.5-2.5-.5-4.5zM38.5 50l.5 1.5-2 1 1.5-2.5zM15.5 51l.5 4.5h-1l.5-4.5zM45.5 51l1 2-1-2zM54.5 51l-1 2 1-2zM84.5 51l.5 3.5h-1l.5-3.5zM32.5 53l3.5.5-3.5.5v-1zM48.5 53l3.5.5-3.5.5v-1zM7.5 54l.5 3.5H7l.5-3.5zM92.5 55l.5 2.5h-1l.5-2.5zM8.5 59l.5 2.5H8l.5-2.5zM91.5 59l.5 2.5-1.5 2.5-.5-1.5 1.5-3.5zM17.5 60l3.5 6.5-2-1-1.5-5.5zM82.5 60l.5 1.5-3.5 5.5.5-1.5 2.5-5.5zM10.5 65Q14.9 76.1 24 82.5l-10-9-4-7 .5-1.5zM89.5 65l.5 1.5-2.5 3.5.5-1.5 1.5-3.5zM21.5 68l8 9-8-9zM78.5 68l-8 9 8-9zM86.5 71l-1 2 1-2zM84.5 74l-9 10-8 4v-1q11-4 17-13zM31.5 77l6.5 3.5-1.5.5q-4.6-1.2-5-4zM68.5 77l-1 2-5 2v-1l6-3zM43.5 82l3.5.5-3.5.5v-1zM53.5 82l4.5.5-4.5.5v-1zM25.5 83l1 2-1-2zM28.5 85l4.5 2.5-1.5.5-3-3zM34.5 88l4.5 1.5-2.5.5-2-2zM61.5 89l2.5.5-2.5.5v-1zM40.5 90l2.5.5-2.5.5v-1zM56.5 90l3.5.5-3.5.5v-1zM46.5 91l7.5.5-7.5.5v-1z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.996078431372549}
          d="M44.5 5h12l10 3Q78.1 12.9 85 22.5q9.3 10.7 8 32-4 19-17.5 28.5-10.7 9.3-32 8-19-4-28.5-17.5-9.3-10.7-8-32 4-19 17.5-28.5l11-6 9-2zM43 13l-13 6q-12 7-15 23v14l6 13q7 11 23 14h14l13-6q11-7 14-22V41l-6-13q-6-9-15-13-8-4-21-2z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.996078431372549}
          d="M31.5 43l6.5 1 1 5.5-2.5 3.5q-6.2 1.3-7.5-2.5-1.2-6.2 2.5-7.5zM47.5 43q6.3-1.2 7.5 2.5 1.3 6.3-2.5 7.5-6.2 1.3-7.5-2.5-1.2-6.2 2.5-7.5zM63.5 43q6.3-1.2 7.5 2.5 1.3 6.3-2.5 7.5L62 52l-1-5.5 2.5-3.5z"
        />
    </Svg>
  );
}

export default More;