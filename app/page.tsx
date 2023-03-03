import ThreeScene from "@/components/ThreeScene";
import { data } from "@/utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen ">
      <div className="flex flex-col gap-y-10">
        {data.map((item, index) => (
          <Link key={index} href={item.link}>{item.title}</Link>
        ))}
      </div>
      <ThreeScene
        className="w-full h-screen fixed  select-none top-0 left-0 pointer-events-none grayscale"
        style={{ zIndex: -1 }}
      />
      <div className="fixed w-full h-screen gradient inset-0" style={{zIndex:-2}}></div>
    </main>
  );
}
