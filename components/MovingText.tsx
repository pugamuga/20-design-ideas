"use client"
import React, {useEffect} from 'react';


interface IProps {
  children: React.ReactNode;
  place: "top" | "bottom";
}

export default function MovingText({
  children,
  place = "top",
}: IProps): JSX.Element {
        const [start, setStart] = React.useState<10|1|2|5>(1);

        const str = toString()

  const amount = 10/start;
  return (
    <>
      <div
        className={`marquee-w h-[40px] bg-red-500 
        ${place === "top" ? "top-[40px]" : "bottom-[40px]"} `}
      >
        <div className="marquee ">
          <span className={`text-sm animate-[marquee_${amount}s_linear_infinite]`}>{children}</span>
        </div>
        {Array.from(Array(10 - 1).keys()).map((i, index) => {
          return (
            <div key={index} className={`marquee`}>
              <span
                style={{ animationDelay: `${(index + 1)/start}s` }}
                className={`text-sm animate-[marquee_${amount}s_linear_infinite]`}
              >
                {children}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
