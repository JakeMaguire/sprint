import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  HomeIcon,
  InboxIcon,
  SquarePenIcon,
  UsersIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export default function Sidebar() {
  return (
    <nav className="p-5 space-y-4 text-sm ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold px-4 text-xl tracking-tight">My Project</h1>
        <SquarePenIcon className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <div>
          <Button variant="ghost" className="w-full justify-start">
            <HomeIcon className="mr-2" width={16} />
            <span>Home</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <InboxIcon className="mr-2" width={16} />
            <span>Inbox</span>
          </Button>
        </div>
      </div>

      <div className="px-4">
        <Collapsible>
          <CollapsibleTrigger>
            <h2 className="flex items-center space-x-2 font-semibold tracking-tight w-full hover:bg-accent hover:text-accent-foreground">
              <span>Teams</span>
              <ChevronDown className="w-4 h-4" />
            </h2>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <Button variant="ghost" className="w-full justify-start">
                  <UsersIcon height={16} />
                  <div>Jalapenos</div>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6">
                <span>|</span>
                <span className="ml-3">Backlog</span>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <Button variant="ghost" className="w-full justify-start">
                  <UsersIcon height={16} />
                  <div>Kokomo</div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>Backlog</CollapsibleContent>
            </Collapsible>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </nav>
  );
}
