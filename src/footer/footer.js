import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useGLTF } from "@react-three/drei";

const Model = () => {
  const { nodes, materials } = useGLTF("/models/earth.glb");

  return (
    <primitive object={nodes.Sphere_2} material={materials["Material.001"]} />
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Canvas camera={{ position: [0, 10, 5] }}>
            <ambientLight intensity={2.0} />
            <Model />
            <OrbitControls enablePan={false} enableRotate={false} autoRotate />
          </Canvas>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="1">Link 1</a>
            </li>
            <li>
              <a href="2">Link 2</a>
            </li>
            <li>
              <a href="3">Link 3</a>
            </li>
            <li>
              <a href="4">Link 4</a>
            </li>
          </ul>
        </nav>
        <div>
          <p>Contact Info</p>
        </div>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Text color="white" anchorX="center" anchorY="middle">
          Footer
        </Text>
        <Text
          color="white"
          position={[0, -1, 0]}
          anchorX="center"
          anchorY="middle"
        >
          Follow us on social media
        </Text>
      </Canvas>
    </footer>
  );
};

export default Footer;
