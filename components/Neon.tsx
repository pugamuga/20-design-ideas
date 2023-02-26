"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Neon(): JSX.Element {
    const intensRef = useRef<any>(null);
  
    useFrame((_, delta) => {
      if (intensRef.current) {
        intensRef.current.emissiveIntensity = Math.sin(
          Date.now() / 300
        )/5 + 0.3;
      }
    });

  return (
    <>
     <mesh scale={1}>
              <boxBufferGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                ref={intensRef}
                color="pink"
                emissive="pink"
                emissiveIntensity={1}
                toneMapped={false}
              />
            </mesh>
    </>
  );
}
