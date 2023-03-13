import { RoundedBox } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function ColorCube(): JSX.Element {
  const cubeRef = useRef<any>();


  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta / 10;
    cubeRef.current.rotation.y += delta / 10;
  });

  return (
    <RoundedBox
      smoothness={8}
      ref={cubeRef}
      onPointerEnter={() => {
        gsap.to(cubeRef.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.2 });
      }}
      
      onClick={(event) => {
        gsap.to(cubeRef.current.scale, { x: .5, y: .5, z: .5, duration: 0.2,  });
        console.log(event)
      }}
      args={[1, 1, 1]}
      position={[0, 0, 0]}
    >
      <meshNormalMaterial />
    </RoundedBox>
  );
}
