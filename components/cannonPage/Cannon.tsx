"use client";
import {
  ContactShadows,
  Sparkles,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Cannon(props: GroupProps): JSX.Element {
  const cannon = useGLTF("./media/cannon_main.glb");
  const cannonRef = useRef<any>(null);
  const tl = useRef<any>(null);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useEffect(() => {
   
    tl.current = gsap.timeline({
      defaults: {
        duration: 4,
        ease: "power1.inOut",
      },
    });
    tl.current
      .to(cannonRef.current.rotation, { y: -Math.PI / 2 }, 8)
      .to(cannonRef.current.position, { x: 1 }, 8)

      .to(cannonRef.current.rotation, { y: Math.PI / 2 }, 18)
      .to(cannonRef.current.position, { x: -1 }, 18)

      .to(cannonRef.current.rotation, { y: Math.PI / 2 }, 24)
      .to(cannonRef.current.position, { x: -1 }, 24);
  }, []);

  return (
    <>
      <group {...props}>
        {/* <Sparkles size={6} color={"mediumpurple"} scale={[10, 10, 10]} /> */}
        <primitive
          ref={cannonRef}
          object={cannon.scene}
          position={[-1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <ContactShadows position-y={-0.6} opacity={0.4} blur={2.4} />
    </>
  );
}
