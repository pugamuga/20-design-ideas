"use client";
import ThreeScene from "@/components/ThreeScene";
import { data } from "@/utils/data";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Home() {
  const ref = useRef<any>();

  useEffect(() => {
    console.log(window.pageXOffset, window.pageYOffset) 
  }, [])

  return (
    <main className="w-full h-screen " ref={ref} >
      <div className="flex flex-col gap-y-10 absolute" style={{ zIndex: 3 }}>
        {data.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
      <ThreeScene 
        className="w-full h-screen fixed  select-none top-0 left-0  grayscale"
        style={{ zIndex: 2 }}
      />
      <div
        className="fixed w-full h-screen gradient inset-0"
        style={{ zIndex: -2 }}
      ></div>
    </main>
  );
}
