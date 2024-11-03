import Image from "next/image";
import React from "react";
import skincare from "@/../public/skincare.jpg";

export default function Related() {
  return (
    <div className="mt-14">
      <h3 className="scroll-m-20 text-2xl font-semibold text-[#A44A3F] tracking-tight">
        Related Products
      </h3>

      <div className="mt-2">
        <div className="grid grid-cols-4 gap-4 text-sm">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={skincare}
                  alt=""
                  width={350}
                  height={350}
                  className="h-auto w-auto object-cover transition-all hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
