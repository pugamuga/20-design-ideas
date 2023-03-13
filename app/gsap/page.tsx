"use client";
"use strict";
import BackButton from "@/components/BackButton";
import gsap from "gsap";
import { useRef, useEffect, useState, ReactNode } from "react";
import { text } from "stream/consumers";

export default function gsapHomePage(): JSX.Element {
  return (
    <>
      <div
        id="item"
        className="w-full h-[200px] px-10 border bg-red-300/30
       border-black uppercase font-extrabold  text-[40px] overflow-hidden"
      >
        <Item num={1}>rect</Item>
        <Item num={2}>text</Item>
        <Item num={3}>three</Item>
      </div>
      <div
        onClick={(e) => {
          console.log(e.target);
        }}
        className="w-[400px] h-[400px] bg-red-300"
      >
        <div
          onClick={(e) => {
            console.log(e.target);
          }}
          className="w-[300px] h-[300px] bg-violet-300"
        >
          <div
            onClick={(e) => {
              console.log(e.target);
              e.stopPropagation();
            }}
            className="w-[200px] h-[200px] bg-green-300"
          />
        </div>
      </div>
    </>
  );
}

function Item(props: any): JSX.Element {
  const textRef = useRef<any>(null);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    textRef.current = gsap
      .timeline({
        defaults: {
          duration: 0.3,
        },
      })
      .to(`#text${props.num}`, { color: "white", x: 10, paused: pause })
      .to(
        `#dot${props.num}`,
        { backgroundColor: "pink", scale: 1.3, paused: pause },
        "<"
      );
  }, [pause]);
  return (
    <>
      <div className="flex items-center space-x-2">
        <div
          id={`dot${props.num}`}
          className="w-6 h-6 bg-slate-400 rounded-full"
        />
        <h1
          onMouseEnter={() => {
            textRef.current.play();
            setPause(false);
          }}
          onMouseLeave={() => {
            textRef.current.reverse();
          }}
          id={`text${props.num}`}
          className="cursor-pointer"
        >
          {props.children}
        </h1>
      </div>
    </>
  );
}
