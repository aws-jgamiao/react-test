import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface HomeIconProps {
  color: string;
}

const tailwindToHex = (colorClass: string): string => {
  const tailwindColors: { [key: string]: string } = {
    'gray-500': '#6B7280',
    'blue-500': '#3B82F6', 
  };

  return tailwindColors[colorClass] || '#000000'; // Default to black if color not found
};

const Home: React.FC<HomeIconProps> = ({ color }) => { 
  const hexColor = tailwindToHex(color);
    return (
    <Svg width={24} height={24} viewBox="0 0 100 100" fill="none">
      <Path
        fill={hexColor}
        stroke={hexColor}
        opacity={0.5372549019607843}
        d="M48.5 9h3l9.5 8.5-5.5-4.5-4-3h-3l-29 25 5-6 24-20z"
      />
      <Path
        fill={hexColor}
        stroke={hexColor}
        opacity={0.5372549019607843}
        d="M49.5 18L67 32.5 61.5 28l-12-9L24 40.5v35l1 2h-1l-1-2v-35L49.5 18zM62.5 18L81 34.5 75.5 30q-8.5-5.1-13-12zM68.5 33l8.5 7.5v35L74.5 79l-1.5-.5 2-.5 1-2.5v-35L68.5 33zM17.5 35l-5 6-5 4 4-5 6-5zM82.5 35L94 45.5 92.5 50l-.5-1.5 1-3L82.5 35zM6.5 46L8 49.5H7L6.5 46zM15.5 47l1.5.5v30h-1L15.5 48l-6 3v-1l6-3zM83 47l8 3.5-2.5.5-4-3-1 30-.5-31z"
      />
      <Path
        fill={hexColor}
        stroke={hexColor}
        opacity={0.5372549019607843}
        d="M39.5 50h21l3.5 2.5 1 2V79l7 .5-6.5.5-1.5-1.5v-24L63 52l-2.5-1h-21L37 52l-1 2.5v24L34.5 80l-6.5-.5 7-.5V54.5l2.5-3.5 2-1z"
      />
      <Path
        fill={hexColor}
        stroke={hexColor}
        opacity={0.5372549019607843}
        d="M43.5 57h13l1.5 1.5v20L56.5 80h-13L42 78.5v-20l1.5-1.5zm-.5 1v21h14V58H43zM17.5 79l4.5 5.5-5-4 .5-1.5zM82.5 79l.5 1.5-5 4 4.5-5.5zM23.5 85l2 1h49l2-1v1l-2 1h-49l-2-2z"
      />
      <Path
        fill={hexColor}
        stroke={hexColor}
        d="M48.5 10h3l4 3L93 45.5 92 50h-3.5L83 47v31.5L77.5 85l-3 1h-49L18 80.5l-1-2V47l-5.5 3H8l-1-4.5L48.5 10zm1.5 8L23 41v35l1 2q3 3 11 2l1-1V55l1-3 3-1h21l2 1 1 3v24l2 1 9-1 2-3V41L50 18zm-6 39l-2 2v20l2 1h13l1-1V59l-1-2H44z"
      />
    </Svg>
  );
}

export default Home;
