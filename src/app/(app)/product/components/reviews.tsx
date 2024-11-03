import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  MessageCircle,
  MessageCircleIcon,
  StarHalf,
  StarIcon,
} from "lucide-react";
import React from "react";

export default function Reviews() {
  return (
    <div className="mt-14">
      <h3 className="scroll-m-20 text-2xl font-semibold text-[#A44A3F] tracking-tight">
        Customer Reviews
      </h3>

      <div className="mt-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="border-y grid grid-cols-12 gap-8 py-8">
            <div className="col-span-2 flex space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="font-bold">Jake Maguire</p>
            </div>
            <div className="col-span-10 space-y-2">
              <div className="flex justify-between">
                <div className="flex">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalf />
                </div>
                <p className="text-sm">7 hours ago</p>
              </div>
              <p className="text-sm">
                Watching the two leads converse on screen was honestly
                enthralling. The lead actor during the Q&A after the film at the
                SCAD Savannah Film Festival brought up My Dinner with Andre as a
                comparison, and I can definitely see the comparison! Seeing the
                two leads disagree but also converse on a variety of topics
                while slowly opening up to one another was honestly fun to
                watch; the camera also felt very personal and intimate, and it
                felt often times like I was watching and eavesdropping on the
                lives of two people. I understand what they were going for with
                the ending, and I think it recontextualizes a lot of past scenes
                that will make for sn intriguing rewatch. At the same time, I
                think it could have done more to make it feel less jarring.
              </p>
              <p className="text-sm font-bold">46 Likes</p>
              <div className="flex space-x-2 items-center">
                <HeartIcon size={24} />
                <MessageCircleIcon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 w-36">View all reviews</Button>
      </div>
    </div>
  );
}
