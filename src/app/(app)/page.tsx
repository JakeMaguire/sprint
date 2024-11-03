import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

      <div className="container">
        <p className="font-bold text-lg">Most Popular</p>
        <div className="grid grid-cols-4 mt-2 space-x-4">
          <div>
            <Link href="/product">
              <Image
                src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce8a7cdf/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=320&sh=320&sm=fit"
                alt=""
                width={320}
                height={320}
                className="bg-slate-100"
              />
            </Link>
            <p className="mt-2">Saccharomyces Ferment 30% Milky Toner</p>
          </div>
          <div>
            <Image
              src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw8b57fa2b/Images/products/The%20Ordinary/ord-glyc-acid-7pct-100ml-Aug-UPC.png?sw=320&sh=320&sm=fit"
              alt=""
              width={320}
              height={320}
              className="bg-slate-100"
            />
            <p className="mt-2">
              Natural Moisturizing Factors + Inulin Body Lotion
            </p>
          </div>
          <div>
            <Image
              src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw8d4bac7c/Images/products/The%20Ordinary/ord-retinal-02pct-emulsion-15ml.png?sw=800&sh=800&sm=fit"
              alt=""
              width={320}
              height={320}
              className="bg-slate-100"
            />
            <p className="mt-2">Niacinamide 5% Face and Body Emulsion</p>
          </div>
          <div>
            <Image
              src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwedfce090/Images/products/The%20Ordinary/rdn-azelaic-acid-suspension-10pct-100ml.png?sw=320&sh=320&sm=fit"
              alt=""
              width={320}
              height={320}
              className="bg-slate-100"
            />
            <p className="mt-2">Balancing & Clarifying Serum</p>
          </div>
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
