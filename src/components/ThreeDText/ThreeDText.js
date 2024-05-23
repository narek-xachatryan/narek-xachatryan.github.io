import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function ThreeDText() {
  const textRef = useRef();

  useFrame(() => {
    textRef.current.rotation.y += 0.01;
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0, 0]}
      fontSize={1}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Narek Khachatryan
    </Text>
  );
}

export default ThreeDText;
