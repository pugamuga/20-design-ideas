"use client";

import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import ColorCube from "./ColorCube";
import GlassCube from "./GlassCube";

export default function ThreeScene(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
): JSX.Element {
  return (
    <>
      <main {...props}>
        <Canvas
          camera={{
            position: [0, 0, 3.5],
            fov: 45,
          }}
        >
          <Environment preset="sunset" blur={0.9} />
          <ambientLight intensity={0.5} />
          {/* <OrbitControls /> */}
          {/* <GlassCube /> */}
          <ColorCube/>
        </Canvas>
      </main>
    </>
  );
}
