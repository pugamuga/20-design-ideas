import { RoundedBox } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ColorCube(): JSX.Element {
  const cubeRef = useRef<any>();

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta / 10;
    cubeRef.current.rotation.y += delta / 10;
  });
  return (
    <RoundedBox smoothness={8} ref={cubeRef}>
      <meshNormalMaterial />
    </RoundedBox>
  );
}
