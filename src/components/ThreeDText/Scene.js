// src/Scene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDText from './ThreeDText';

function Scene() {
  return (
    <Canvas style={{
        height: '70px'
    }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ThreeDText />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
