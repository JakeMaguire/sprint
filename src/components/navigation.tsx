import { SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Separator } from "./ui/separator";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center my-6 text-[#A44A3F]">
      <Link href="/">
        <div className="text-2xl tracking-wide font-extrabold">OLIVIA</div>
      </Link>

      {/* <div className="space-x-4 lg:space-x-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[2000px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-full ">
                  <ListItem key="1" title="Brand 1" href="/brand/1">
                    Brand 1 description
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Routines</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}

      <div className="space-x-4 lg:space-x-6">
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
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
