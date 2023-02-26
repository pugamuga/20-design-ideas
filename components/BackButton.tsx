"use client";
import Link from "next/link";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function BackButton(): JSX.Element {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="h-12 w-12 fixed flex justify-center top-1 left-1 "
      style={{ zIndex: 999 }}
    >
      <m.div
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        exit={{ y: -100 }}
        className="h-12 w-12 border-black border-[1px] rounded-full pb-[2px] flex justify-center items-center"
      >
        <Link
          href={"/"}
          className="h-12 w-12 rounded-full flex justify-center text-sm items-center hover:text-white hover:bg-black tr-300 "
        >
          Back
        </Link>
      </m.div>
    </div>
  );
}
