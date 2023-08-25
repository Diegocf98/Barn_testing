import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.js";
import Barn_Testing from "./components/Barn_Testing.js";

export default function App() {
  return (
    <Canvas
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[20, 40, 20]} />
      <directionalLight intensity={1} position={[-20, -40, -20]} />
      <directionalLight intensity={1} position={[-20, 40, -20]} />
      <directionalLight intensity={1} position={[-20, -40, 20]} />
      <directionalLight intensity={1} position={[20, -40, 20]} />
      <directionalLight intensity={1} position={[20, -40, -20]} />
      <Suspense fallback={null}>
        <Barn_Testing />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
