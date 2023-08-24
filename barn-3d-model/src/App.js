import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.js";
import Barn_Testing from "./components/Barn_Testing.js";

export default function App() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Barn_Testing position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
