import Navigation from "@/components/navigation";
import Sidebar from "@/components/sidebar";
import { DndContext } from "@dnd-kit/core";

import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import skincare from "../../public/skincare.jpg";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-8 mt-24 items-center">
        <div className="p-24 justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Really cool interesting tagline here. No idea what it will be.
        </div>
        <div className="flex justify-center items-center">
          <Image src={skincare} alt="" height={600} />
        </div>
      </div>

      <div className="grid grid-cols-5 text-center mt-24 space-x-4">
        <Link href="/product">
          <div className="h-80 bg-slate-300">PICTURE 1</div>
        </Link>
        <div className="h-80 bg-slate-300">PICTURE 2</div>
        <div className="h-80 bg-slate-300">PICTURE 3</div>
        <div className="h-80 bg-slate-300">PICTURE 4</div>
        <div className="h-80 bg-slate-300">PICTURE 5</div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-24 items-center">
        <div className="flex justify-center items-center">
          <Image src={skincare} alt="" height={600} />
        </div>
        <div className="p-24 justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Really cool interesting tagline here. No idea what it will be.
        </div>
      </div>

      <div className="w-full relative bg-[#A44A3F]">
        <div className="grid grid-cols-2 gap-8 mt-24 items-center">
          <div className="p-24 justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Really cool interesting tagline here. No idea what it will be.
          </div>
          <div className="flex justify-center items-center">
            <Image src={skincare} alt="" height={600} />
          </div>
        </div>
      </div>
    </main>
  );
}
