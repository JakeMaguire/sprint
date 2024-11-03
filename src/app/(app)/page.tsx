import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ContactRound,
  ContactRoundIcon,
  ListIcon,
  SearchIcon,
  SquarePenIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mt-[--navbar-height] space-y-36">
      <div className="py-36 bg-black">
        <div className="container grid grid-cols-2">
          <div className="p-24 justify-center scroll-m-20 text-white">
            <p className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Community for beauty
            </p>
            <p className="font-bold mt-4 text-lg">
              Discover new products and find your routine.
            </p>
            <Button className="mt-4 bg-white text-black">
              Discover products
            </Button>
            <Button className="mt-4 ml-2 bg-white text-black">
              Join the community
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 container">
        <div className="flex flex-col items-center text-center">
          <SearchIcon width={36} height={36} />
          <p className="mt-4">Find beauty products that are perfect for you</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <ListIcon width={36} height={36} />
          <p className="mt-4">Keep track of the products you love</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <ContactRoundIcon width={36} height={36} />
          <p className="mt-4">
            See what your friends and the community are using
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SquarePenIcon width={36} height={36} />
          <p className="mt-4">Create and share you perfect routine</p>
        </div>
      </div>

      <div>
        <p className="font-bold text-xl text-center">Most Popular</p>
        <div className="flex justify-center mt-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-11/12"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="p-0 flex flex-col aspect-square items-center justify-center">
                        <Image
                          src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce8a7cdf/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=320&sh=320&sm=fit"
                          alt=""
                          height={720}
                          width={720}
                          className="bg-slate-100"
                        />
                        <p className="mt-2 text-sm p-2">
                          Saccharomyces Ferment 30% Milky Toner
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="container">
        <p className="font-bold text-lg">Recent Comments</p>
        <div className="border">
          <p className="text-xl text-center p-28">
            &quot;I love this product so muuchhh!!&quot;
          </p>
        </div>
      </div>
    </main>
  );
}
