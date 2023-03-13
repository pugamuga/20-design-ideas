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
import { useEffect, useRef } from "react";

export default function page(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // const wheel = () => (e:Event) => {
    //   console.log("is loaded");
    // };

    // window.addEventListener("load", wheel());
    // return () => document.removeEventListener("load", wheel());

    const scrollYHandler = () =>{
      console.log(window)
    }
    window.addEventListener("click", scrollYHandler);
    return () => document.removeEventListener("click", scrollYHandler);
    
  },[]);

  return (
    <>
      <BackButton />
      <div className="w-full h-screen bg-red-300/30">
        <Canvas camera={{ fov: 45 }} ref={canvasRef}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 3, 1]} intensity={2} />
          <ScrollControls pages={3} damping={0.1} infinite>
            <Cannon rotation={[0, 0, 0]} scale={1.25} position={[0, -0.6, 0]} />
            {/* @ts-ignore */}
            <Scroll html style={{ width: "100%" }}>
              <section className="absolute top-0 h-[100vh] w-full flex justify-end items-center">
                <div className="h-[50vh] w-[300px] bg-black/70" />
              </section>
              <section className="absolute top-[100vh] h-[100vh] w-full flex items-center">
                <div className="h-[50vh] w-[300px] bg-black/70" />
              </section>
              <section className="absolute top-[200vh] h-[100vh] w-full flex justify-end items-center">
                <div className="h-[50vh] w-[300px] bg-black/70" />
              </section>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}
