import { useGLTF } from "@react-three/drei";
import { proxy, snapshot } from "valtio";

const state = proxy({
  current: null,
  //top-buttom-barn items
  tb_barn: {
    Siding_LPSmartPanelSiding1: "yellow",
    Siding_LPSmartPanelSiding2: "blue",
    Siding_LPSmartPanelSiding3: "white",
    Siding_LPSmartPanelSiding4: "white",
    //sliders de la casa (2)
    Siding_BoardandBatten: "yellow",
    Roofing_Shingles_DesertTan: "white",
    Wood_Trim_Interior: "yellow",

    Wood_InteriorFloor: "white",

    Wood_Interior: "white",
    Wood_Trim: "red",
    Metal_Interior: "red",
    Metal_Exterior: "white",
  },
});

export default function Barn_Testing(props) {
  const { nodes, materials } = useGLTF("/Barn_Testing.glb");
  const barn_state = snapshot(state);
  return (
    <group {...props} dispose={null}>
      {/* Top and buttom from the barn*/}
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          material-color={barn_state.tb_barn.Siding_LPSmartPanelSiding}
          geometry={nodes.Mesh.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        />
        <mesh
          material-color={barn_state.tb_barn.Siding_BoardandBatten}
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          material-color={barn_state.tb_barn.Roofing_Shingles_DesertTan}
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          material-color={barn_state.tb_barn.Wood_Trim_Interior}
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          material-color={barn_state.tb_barn.Wood_InteriorFloor}
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh
          material-color={barn_state.tb_barn.Wood_Trim}
          geometry={nodes.Mesh_5.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          material-color={barn_state.tb_barn.Metal_Interior}
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          material-color={barn_state.tb_barn.Metal_Exterior}
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      {/* body */}
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          material-color={barn_state.tb_barn.Wood_Trim_Interior}
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          material-color={barn_state.tb_barn.Wood_Interior}
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          material-color={barn_state.tb_barn.Wood_Trim}
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          material-color={barn_state.tb_barn.Siding_LPSmartPanelSiding1}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
          material={materials.Siding_LPSmartPanelSiding1}
        />
        <mesh
          material-color={barn_state.tb_barn.Siding_LPSmartPanelSiding2}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
          material={materials.Siding_LPSmartPanelSiding2}
        />
        <mesh
          material-color={barn_state.tb_barn.Siding_LPSmartPanelSiding3}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
          material={materials.Siding_LPSmartPanelSiding3}
        />
        <mesh
          material-color={barn_state.tb_barn.Siding_LPSmartPanelSiding4}
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
          material={materials.Siding_LPSmartPanelSiding4}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Barn_Testing.glb");
