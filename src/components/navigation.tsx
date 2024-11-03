"use client";

import { SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import clsx from "clsx";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log("scrolled");
        setScrolled(true);
      } else {
        console.log("back to top");
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <nav
      className={clsx(
        "py-8 text-[#A44A3F] fixed top-0 w-full h-[--navbar-height] transition z-50",
        { "bg-white": scrolled || hovered }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl tracking-wide font-extrabold">OLIVIA</div>
        </Link>

        <div className="mspace-x-4 lg:space-x-6">
          <ul className="flex space-x-6 text-sm font-semibold">
            <li className="relative group">
              <Link href="/" className="cursor-pointer ">
                Products
              </Link>
              <div className="fixed left-0 mt-6 py-8 auto bg-white w-full opacity-0 transition duration-300 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100 group-hover:opacity-100">
                <div className="m-auto max-w-2xl space-y-4">
                  <ul className="grid grid-cols-3 gap-2">
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                    <li className="cursor-pointer">Brand One</li>
                  </ul>
                  <Separator />
                  <p>View All Brands</p>
                </div>
              </div>
            </li>
            <li className="cursor-pointer">
              <Link href="/routines">Routines</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/routines">Community</Link>
            </li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>

        <div className="flex space-x-2">
          <UserIcon width={40} />
          <SearchIcon width={40} />
        </div>
      </div>
    </nav>
  );
}
