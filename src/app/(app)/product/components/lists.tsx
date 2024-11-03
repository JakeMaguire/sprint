import Image from "next/image";
import React from "react";
import skincare from "@/../public/skincare.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartIcon } from "lucide-react";

export default function Lists() {
  return (
    <div className="mt-14">
      <h3 className="scroll-m-20 text-2xl font-semibold text-[#A44A3F] tracking-tight">
        Routines
      </h3>

      <div className="mt-2">
        <div className="grid grid-cols-3 gap-4 text-sm">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={skincare}
                  alt=""
                  className="h-auto w-auto object-cover transition-all hover:scale-105"
                />
              </div>

              <h3 className="font-medium leading-none">Name of list</h3>
              <div className="flex space-x-2 items-center">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    width={16}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex space-x-1 items-center">
                  <HeartIcon width={16} />
                  <div className="flex space-x-1 text-sm">50k</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
