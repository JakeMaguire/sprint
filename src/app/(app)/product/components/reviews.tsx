import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import React from "react";

export default function Reviews() {
  return (
    <div className="mt-14">
      <h3 className="scroll-m-20 text-2xl font-semibold text-[#A44A3F] tracking-tight">
        Customer Reviews
      </h3>

      <div className="grid grid-cols-2 gap-24 mt-2">
        <div>
          <div className="flex space-x-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <h2>Jake Maguire</h2>
              <span className="text-xs">4 days ago</span>
            </div>
          </div>

          <div className="flex space-x-1">
            <StarIcon width={12} />
            <StarIcon width={12} />
            <StarIcon width={12} />
            <StarIcon width={12} />
            <StarIcon width={12} />
          </div>

          <span className="text-sm">
            A great stay at this wonderful lodge! Scott was fantastic and gave
            really great recommendations! The lodge is so spacious and easily
            housed 5 adults and 3 children. I wish I’d actually looked at what
            the lodge came with as there was a travel cot and high chair there.
            Small touches like salt & pepper in the kitchen and kids utensils
            were fab! The hot tub was a highlight and easy to operate! Already
            looking at dates to stay again, highly recommend, fab host and fab
            lodge !
          </span>
        </div>

        <div>
          <div className="flex space-x-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" text-sm">
              <h2>Jake Maguire</h2>
              <span className=" text-xs">4 days ago</span>
            </div>
          </div>

          <div className="flex space-x-1">
            <StarIcon width={12} />
            <StarIcon width={12} />
            <StarIcon width={12} />
            <StarIcon width={12} />
            <StarIcon width={12} />
          </div>

          <span className="text-sm">
            A great stay at this wonderful lodge! Scott was fantastic and gave
            really great recommendations! The lodge is so spacious and easily
            housed 5 adults and 3 children. I wish I’d actually looked at what
            the lodge came with as there was a travel cot and high chair there.
            Small touches like salt & pepper in the kitchen and kids utensils
            were fab! The hot tub was a highlight and easy to operate! Already
            looking at dates to stay again, highly recommend, fab host and fab
            lodge !
          </span>
        </div>
      </div>
    </div>
  );
}
