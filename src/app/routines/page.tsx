import Image from "next/image";
import skincare from "../../../public/skincare.jpg";

export default function Routines() {
  return (
    <main>
      <div className="mt-16 text-center">
        <h1>Cleansers</h1>
        <h4>Description about cleansers</h4>
      </div>

      <div className="mt-16">
        <h4 className="mb-2">Popular Routines</h4>
        <div className="grid grid-cols-5 gap-8">
          <div>
            <Image src={skincare} alt="" />
            <p className="font-semibold tracking-tight mt-2">
              Morning Acne Routine
            </p>
            <p className="text-sm text-muted-foreground">Jake Maguire</p>
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h4 className="mb-2">New Routines</h4>
        <div className="grid grid-cols-5 gap-8">
          <div>
            <Image src={skincare} alt="" />
            <p className="font-semibold tracking-tight mt-2">
              Morning Acne Routine
            </p>
            <p className="text-sm text-muted-foreground">Jake Maguire</p>
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h4 className="mb-2">Just Commented</h4>
        <div className="grid grid-cols-5 gap-8">
          <div>
            <Image src={skincare} alt="" />
            <p className="font-semibold tracking-tight mt-2">
              Morning Acne Routine
            </p>
            <p className="text-sm text-muted-foreground">Jake Maguire</p>
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
          <div>
            <Image src={skincare} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
