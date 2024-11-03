import { SiInstagram, SiX, SiTiktok } from "@icons-pack/react-simple-icons";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-16 py-16 text-sm bg-black">
      <div className="container flex items-center justify-between">
        <span className="text-4xl font-extrabold text-white tracking-wide">
          Olivia
        </span>
        <div className="flex space-x-4">
          <SiInstagram color="white" size={24} />
          <SiX color="white" size={24} />
          <SiTiktok color="white" size={24} />
        </div>
      </div>
    </div>
  );
}
