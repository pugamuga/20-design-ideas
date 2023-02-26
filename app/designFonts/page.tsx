"use client";
import BackButton from "@/components/BackButton";
import MovingText from "@/components/MovingText";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Neon from "@/components/Neon";

export default function Home(): JSX.Element {
 

  return (
    <>
      <BackButton />
      <main className="w-full h-screen ">
        <MovingText place="top">REKT</MovingText>
        <div className="bg-black h-[80%] w-full">
          <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls />
           <Neon/>
            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={10}
                mipmapBlur
                intensity={1}
              />
              {/* <GlowingEdges /> */}
            </EffectComposer>
          </Canvas>
        </div>
      </main>
    </>
  );
}
