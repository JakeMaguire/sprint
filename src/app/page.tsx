import Sidebar from "@/components/sidebar";
import { DndContext } from "@dnd-kit/core";

import { UserIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="grid bg-zinc-300 min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />

      <div className="m-2 p-3 bg-slate-50 rounded-sm">
        <h2 className="text-2xl font-semibold tracking-tight">
          Current Sprint
        </h2>

        <div className="grid grid-cols-4 gap-4 space-x-8 mt-2">
          <div className="bg-gray-200 h-full p-4 space-y-2">
            <span>Todo</span>
            <div className="p-4 bg-white rounded-sm text-sm space-y-2">
              <div className="flex justify-between">
                <div className=" text-muted-foreground">JIRA-1456</div>
                <UserIcon className="h-4 w-4" />
              </div>
              <div>Create new component for library</div>
            </div>

            <div className="p-4 bg-white rounded-sm text-sm space-y-2">
              <div className="flex justify-between">
                <div className=" text-muted-foreground">JIRA-1456</div>
                <UserIcon className="h-4 w-4" />
              </div>
              <div>Create new component for library</div>
            </div>
          </div>
          <div>
            <span>In Progress</span>
          </div>
          <div>Done</div>
        </div>
      </div>
    </main>
  );
}
