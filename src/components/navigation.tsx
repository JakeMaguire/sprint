import { SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

export default function Navigation() {
  return (
    <nav className="py-8 text-[#A44A3F] fixed top-0 w-full bg-white h-[--navbar-height]">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl tracking-wide font-extrabold">OLIVIA</div>
        </Link>

        <div className="mspace-x-4 lg:space-x-6">
          <ul className="flex space-x-6 text-sm font-semibold">
            <li className="relative group">
              <Link href="/" className="cursor-pointer ">
                Brands
              </Link>
              <div className="fixed left-0 mt-6 py-8 auto bg-slate-400 w-full opacity-0 transition duration-300 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100 group-hover:opacity-100">
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
