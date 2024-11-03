import Image from "next/image";
import skincare from "@/../public/skincare.jpg";
import { StarHalf, StarIcon } from "lucide-react";
import Reviews from "./components/reviews";
import Lists from "./components/lists";
import Related from "./components/related";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Product() {
  return (
    <main className="mt-[--navbar-height] container">
      <div className="grid grid-cols-2 mt-40 justify-between">
        <div className="col-span-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mr-20 mt-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Cerave Cleanser
          </h1>
          <div className="flex items-center space-x-1">
            <span>3.7</span>
            <StarIcon width={16} />
            <StarIcon width={16} />
            <StarIcon width={16} />
            <StarHalf width={16} />
            <p>356 reviews</p>
          </div>

          <div className="mt-4 text-sm">
            The Ordinary Hyaluronic Acid product is a standout formulation in
            the realm of skincare, known for its lightweight and hydrating
            properties. It primarily features three forms of hyaluronic acid,
            which help to deliver multi-depth hydration to the skin. This
            ingredient is a natural humectant, drawing moisture from the
            environment into the skin, resulting in a plump and dewy appearance.
            <br />
            <br />
            The product is often favored by individuals with varying skin types,
            as it provides intensive hydration without feeling heavy or greasy.
            In addition to its hydrating prowess, The Ordinary Hyaluronic Acid
            is known for its affordability and straightforward formulation,
            making it accessible to a wide audience. Typically, users apply it
            after cleansing and before moisturizing, allowing the serum to lock
            in moisture effectively. Its compatibility with other skincare
            products enhances its appeal, as it can be seamlessly integrated
            into both simple and elaborate skincare routines, yielding
            refreshed, hydrated, and rejuvenated skin with regular use.
          </div>

          <div className="mt-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Ingredients</AccordionTrigger>
                <AccordionContent>Ingredient List Here</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Allergies</AccordionTrigger>
                <AccordionContent>Allergy List Here</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <Image className="mt-4" src={skincare} alt="skincare-picture" />
      </div>

      <Related />
      <Reviews />
      <Lists />
    </main>
  );
}
