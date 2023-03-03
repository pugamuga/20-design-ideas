"use client";
import BackButton from "@/components/BackButton";
import gsap from "gsap";
import { useRef, useEffect,useLayoutEffect } from "react";

export default function gsapHomePage(): JSX.Element {
  // const cube = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to("#circle", { x: 500, duration: 1,  ease: "linear" });
  },[]);
  return (
    <>
      <BackButton />
      <div className="p-12">
        <div 
        id="circle"
        className=" h-20 w-20 rounded-full bg-orange-500 cursor-pointer " />
        <div 
        id="circle1"
        className=" h-20 w-20 rounded-full bg-orange-500 cursor-pointer " />
      </div>
    </>
  );
}
