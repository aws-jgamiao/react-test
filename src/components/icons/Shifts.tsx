import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface ShiftsIconProps {
  color: string;
}

const tailwindToHex = (colorClass: string): string => {
  const tailwindColors: { [key: string]: string } = {
    'gray-500': '#6B7280',
    'blue-500': '#3B82F6', 
  };

  return tailwindColors[colorClass] || '#000000'; // Default to black if color not found
};

const Shifts: React.FC<ShiftsIconProps> = ({ color }) => { 
  const hexColor = tailwindToHex(color); // Convert to hex
    return (  
    <Svg width={24} height={24} viewBox="0 0 100 100" fill="none">
      <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.8352941176470589}
          d="M18.5 16l-1 2 1-2zM38.5 16l4.5.5-4.5.5v-1zM63.5 17l2 3-2-3zM57.5 21l1 2-1-2zM20.5 23l-5 6 5-6zM69.5 23l2 3-2-3zM10.5 24l-1 2 1-2zM61.5 24l2 3-2-3zM14.5 30l-1 2 1-2zM75.5 38l2.5.5-2.5.5v-1zM68.5 41l-1 2 1-2zM2.5 42l.5 2.5H2l.5-2.5zM44.5 46l1 2-1-2zM47.5 48l1 2-1-2zM37.5 49l2 3-2-3zM64.5 49l.5 2.5h-1l.5-2.5zM2.5 50l.5 3.5H2l.5-3.5zM50.5 50l1 2-1-2zM9.5 52l.5 2.5H9l.5-2.5zM41.5 52l1 2-1-2zM53.5 52l1 2-1-2zM44.5 54l1 2-1-2zM56.5 54l1 2-1-2zM47.5 56l1 2-1-2zM86.5 56l-1 2 1-2zM50.5 58l1 2-1-2zM57.5 59l-1 2 1-2zM13.5 64l1 2-1-2zM66.5 67l20.5.5-20.5.5v-1zM16.5 68l4 5-4-5zM91.5 69l4 5-4-5zM9.5 70l1 2-1-2zM16.5 77l1 2-1-2zM38.5 79l4.5.5-4.5.5v-1zM55.5 83l2 3-2-3zM96.5 84l-1 2 1-2zM46.5 85l2.5.5-2.5.5v-1z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          opacity={0.30196078431372547}
          d="M35.5 9l10.5.5-10.5.5V9zM24.5 12l1.5.5-4.5 2.5 1-2 2-1zM61.5 15l1 2-1-2zM16.5 17l-7 8 7-8zM34.5 17l2.5.5-2.5.5v-1zM44.5 17l2.5.5-2.5.5v-1zM64.5 17l6 7-6-7zM56.5 21l1 2-1-2zM22.5 22l-7 8 7-8zM59.5 23l6 7-6-7zM38.5 24L37 26.5 36.5 49 36 26.5l2.5-2.5zM42.5 24l1 2-1-2zM8.5 26l-1 2 1-2zM72.5 26l3.5 7.5h-1L72.5 26zM14.5 31l-1 2 1-2zM66.5 31l3.5 4.5-2 .5-1.5-5zM2.5 39l.5 2.5H2l.5-2.5zM70.5 39l1.5.5-2.5 1.5 1-2zM81.5 39l5.5 4.5-4.5-3.5-1-1zM9.5 43l.5 8.5H9l.5-8.5zM66.5 43l-1 2 1-2zM45.5 46l1 2-1-2zM88.5 47l.5 5.5h-1l.5-5.5zM48.5 48l1 2-1-2zM37.5 50l1 2-1-2zM51.5 50l1 2-1-2zM40.5 52l1 2-1-2zM54.5 52l1 2-1-2zM2.5 54l.5 2.5H2l.5-2.5zM43.5 54l1 2-1-2zM65.5 55l4.5 5.5-5-4 .5-1.5zM46.5 56l1 2-1-2zM58.5 56l.5 2.5h-1l.5-2.5zM86.5 57l-3 4 3-4zM49.5 58l1 2-1-2zM73.5 62l6.5.5-6.5.5v-1zM13.5 63l1 2-1-2zM15.5 66l7 8-7-8zM7.5 68l1 2-1-2zM60.5 69l-3 4 3-4zM92.5 69l3 4-3-4zM9.5 71l7 8-7-8zM56.5 74l-.5 1.5-.5 1.5-.5-1.5 1.5-1.5zM49.5 77q2.6-.8 1.5 2.5h-1l-.5-2.5zM34.5 78l2.5.5-2.5.5v-1zM44.5 78l2.5.5-2.5.5v-1zM18.5 79l1 2-1-2zM54.5 79l.5 3.5h-1l.5-3.5zM55.5 84l1 2-1-2zM35.5 86l10.5.5-10.5.5v-1zM58.5 86l36.5.5-36.5.5v-1z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          d="M34.5 10q11.8-1.3 19 2Q63 15.5 69 22.5L75 33l-5.5 2-8-11q-7.8-7.7-23-8-1.2 2.2-6 1l-9 4-8.5 7.5-6 13v13q3 12 11.5 18.5 7.5 7 22 7l7-2 .5 7q-5.6 1.9-15.5 1Q19.4 82.6 11 72.5l-7-12-2-15q2.3-1.2 1-6l5-12 8.5-9.5q7-6 18-8z"
        />
        <Path
          fill={hexColor}
          stroke={hexColor}
          d="M40.5 24l2.5 1 1 2.5v19l1.5 1.5L58 56.5q.5 4-2.5 4.5L37 48.5v-22l1.5-1.5 2-1zM72.5 39q10.4-1.4 13.5 4.5 3 3 2 10L83.5 60q-3 3-10 2L67 57.5q-3.4-2.6-2-10l5.5-7.5 2-1zM64.5 68h24l7.5 6.5 1 9-2.5 2.5h-36Q54 85 55 78.5l5.5-8.5 4-2z"
        />
    </Svg>
  );
};

export default Shifts;
