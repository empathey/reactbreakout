
import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

const Triangle = () => {
  return (
    <Svg width="100%" height="100%">
      <Polygon
        points="0,0 50,100 100,0"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
        transform="rotate(90)"
      />
    </Svg>
  );
};

export default Triangle;