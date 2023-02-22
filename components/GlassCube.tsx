import { RoundedBox } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GlassCube(): JSX.Element {
  const cubeRef = useRef<any>();

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta / 10;
    cubeRef.current.rotation.y += delta / 10;
  });
  return (
    <RoundedBox smoothness={8} ref={cubeRef}>
      <meshPhysicalMaterial
        flatShading={false}
        color={"white"}
        clearcoat={1}
        metalness={0.9}
        roughness={0.0}
        transmission={1}
        ior={1.33}
        transparent
        opacity={0.9}
        // side={THREE.DoubleSide}
      />
    </RoundedBox>
  );
}
