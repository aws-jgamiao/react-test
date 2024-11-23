import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface TimeSheetsProps {
  color: string;
}

const tailwindToHex = (colorClass: string): string => {
  const tailwindColors: { [key: string]: string } = {
    'gray-500': '#6B7280',
    'blue-500': '#3B82F6', 
  };

  return tailwindColors[colorClass] || '#000000'; // Default to black if color not found
};

const TimeSheets: React.FC<TimeSheetsProps> = ({ color }) => {
  const hexColor = tailwindToHex(color); // Convert to hex
    return (
    <Svg width={24} height={24} viewBox="0 0 100 100" fill="none">
      <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.8588235294117647}
          d="M45.5 1l1 2-1-2zM4.5 4l-1 2 1-2zM39.5 8l.5 13.5h-1L39.5 8zM63.5 19l1 2-1-2zM72.5 37l3.5.5-3.5.5v-1zM59.5 42l-4 5 4-5zM88.5 42l4 5-4-5zM50.5 63l.5 2.5h-1l.5-2.5zM10.5 76l1 1 37.5.5-37.5.5-1-2zM56.5 77l1 2-1-2zM91.5 77l-2 3 2-3zM50.5 79l5 6-5-6z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          d="M11.5 0h30l3 1L63 18.5q4.5 4.8 3 14.5l-7.5 3-.5-10H42.5L40 23.5V8H10v68.5l1.5 1.5h38l.5 1.5 4.5 5.5h-44L4 80.5l-2-5v-66L6.5 2l5-2z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          d="M68.5 38q8.9-1.4 14 1Q90 42 94 48.5q5.2 5.8 3 19-2.5 9-9.5 13.5l-9 4h-9Q59.3 82.3 54 74.5l-3-6-1-9Q52.3 46.8 61.5 41l7-3zM73 48l-2 2v13l2 1h11l1-1q1-4-2-5h-6v-8q-1-3-4-2z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.4}
          d="M6.5 1l-3 4 3-4zM46.5 1l18 19-18-19zM11.5 8l-1 2 1-2zM39.5 22l3 4 15.5.5-15.5.5-3.5-3.5.5-1.5zM68.5 37l3.5.5-3.5.5v-1zM76.5 37l3.5.5-3.5.5v-1zM61.5 40l-1 2 1-2zM86.5 40l1 2-1-2zM58.5 42L55 46.5 53.5 49l.5-1.5 4.5-5.5zM89.5 42l5.5 6.5-2-1-3.5-5.5zM72.5 48l3.5.5-3.5.5v-1zM71.5 50l.5 11.5h-1l.5-11.5zM76.5 50l.5 8 5 .5-6 .5.5-9zM50.5 54l.5 2.5h-1l.5-2.5zM83.5 59l1.5 2.5h-1l-.5-2.5zM53.5 74l2 3-2-3zM94.5 74l-2 3 2-3zM10.5 75l1 2-1-2zM49.5 77l3 4-3-4zM58.5 79l2 3-2-3zM3.5 80L9 84.5l-1.5.5-4-5zM88.5 80l-1 2 1-2zM85.5 82l-1 2-1.5-.5 2.5-1.5zM55.5 83l1.5 3-47-.5 46-1-.5-1.5zM70.5 85l7.5.5-7.5.5v-1z"
        />
    </Svg>
  );
};

export default TimeSheets;
