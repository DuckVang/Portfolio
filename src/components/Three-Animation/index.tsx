"use client"

import { OrbitControls, AsciiRenderer } from "@react-three/drei";
import { useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";

import { Mesh } from "three";


// const effect = new AsciiEffect(renderer);
// effect.setSize(width, height);©

const Donut = () => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef<Mesh>(null!);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      // {...props.meshProps}
      position={[0, 0, -30]}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
      {/* <torusBufferGeometry attach="geometry" args={[10, 5, 22, 22]} /> */}
      <torusKnotGeometry args={[12, 3, 20, 20]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
};


const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef<any>();

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      
      <pointsMaterial color="#5786F5" size={0.02} sizeAttenuation />
    </points>
  );
};



const CanvasAnimation = () => {
  return (
    <Canvas>

      <ambientLight intensity={0.5} />
      {/* <BasicParticles /> */}
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Donut></Donut>
      <AsciiRenderer fgColor="white" bgColor="transparent" color={true}/>
      {/* <OrbitControls autoRotate /> */}
    </Canvas>
  );
};
export default CanvasAnimation;
