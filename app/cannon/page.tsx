"use client";
import BackButton from "@/components/BackButton";
import Cannon from "@/components/cannonPage/Cannon";
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function page(): JSX.Element {
  return (
    <>
      <BackButton />
      <div className="w-full h-screen bg-red-300/30">
        <Canvas camera={{ fov: 45 }}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 3, 1]} intensity={2} />
          <ScrollControls pages={3} damping={0.1}>
            <Cannon rotation={[0, 0, 0]} scale={1.25} position={[0, -0.6, 0]} />
            {/* @ts-ignore */}
            <Scroll html style={{ width: "100%" }}>
              <section className="absolute top-0 h-[100vh] w-full flex justify-end">
                <div className="h-[100vh] w-[300px] bg-black/70" />
              </section>
              <section className="absolute top-[100vh] h-[100vh] w-full ">
                <div className="h-[100vh] w-[300px] bg-black/70" />
              </section>
              <section className="absolute top-[200vh] h-[100vh] w-full flex justify-end">
                <div className="h-[100vh] w-[300px] bg-black/70" />
              </section>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}