import ThreeScene from "@/components/ThreeScene";
import { data } from "@/utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen ">
      <div>
        {data.map((item, index) => (
          <Link key={index} href={item.link}>{item.title}</Link>
        ))}
      </div>
      <ThreeScene
        className="w-full h-screen gradient fixed  select-none top-0 left-0 pointer-events-none "
        style={{ zIndex: -1 }}
      />
    </main>
  );
}
