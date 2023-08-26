import React, { Suspense, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Select from "react-select";
import "./App.css";

function Barn_Testing(props) {
  const { nodes, materials } = useGLTF("/Barn_Testing.glb");
  return (
    <group {...props} dispose={null}>
      {/* Top and buttom from the barn*/}
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.Wood_Trim} />
        <mesh
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      {/* body */}
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          material-color={props.wall1_color ? "red" : "white"}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
          material={materials.Siding_LPSmartPanelSiding1}
        />
        <mesh
          material-color={props.wall2_color ? "red" : "white"}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
          material={materials.Siding_LPSmartPanelSiding2}
        />
        <mesh
          material-color={props.wall3_color ? "red" : "white"}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
          material={materials.Siding_LPSmartPanelSiding3}
        />
        <mesh
          material-color={props.wall4_color ? "red" : "white"}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
          material={materials.Siding_LPSmartPanelSiding4}
        />
      </group>
    </group>
  );
}

const options = [
  { value: "Wall_1", label: "Wall_1" },
  { value: "Wall_2", label: "Wall_2" },
  { value: "Wall_3", label: "Wall_3" },
  { value: "Wall_4", label: "Wall_4" },
];

export default function App() {
  const [wall1_color, setWall1Color] = useState(false);
  const [wall2_color, setWall2Color] = useState(false);
  const [wall3_color, setWall3Color] = useState(false);
  const [wall4_color, setWall4Color] = useState(false);

  //function to select the correct wall color
  const handleChange = (option) => {
    if (option.label == "Wall_1") {
      setWall1Color(!wall1_color);
    } else if (option.label == "Wall_2") {
      setWall2Color(!wall2_color);
    } else if (option.label == "Wall_3") {
      setWall3Color(!wall3_color);
    } else if (option.label == "Wall_4") {
      setWall4Color(!wall4_color);
    }
  };

  return (
    <>
      <div style={{ width: "25%" }}>
        <Select options={options} onChange={handleChange}></Select>
      </div>

      <Canvas
        className="canvas"
        camera={{ position: [-25, 5, 30.25], fov: 12 }}
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          height: "150vh",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Barn_Testing
            wall1_color={wall1_color}
            wall2_color={wall2_color}
            wall3_color={wall3_color}
            wall4_color={wall4_color}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
