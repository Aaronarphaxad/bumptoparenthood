import { urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function LearnMore({ about }) {
  const { homeImage, shortDesc, name } = about[0];

  return (
    <section className="py-8 md:py-24 bg-pink-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-[400px] aspect-[5/6]">
              <Image
                src={urlFor(homeImage).url()}
                fill
                alt="Professional maternal care nurse"
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
              About Me
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">
              {name}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              {shortDesc}
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-bold text-pink-700">7+</span>
                <span className="text-xs md:text-sm text-muted-foreground text-center md:text-left">Years Experience</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-bold text-pink-700">100+</span>
                <span className="text-xs md:text-sm text-muted-foreground text-center md:text-left">Families Supported</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-bold text-pink-700">100%</span>
                <span className="text-xs md:text-sm text-muted-foreground text-center md:text-left">Satisfaction Rate</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-bold text-pink-700">24/7</span>
                <span className="text-xs md:text-sm text-muted-foreground text-center md:text-left">Support Available</span>
              </div>
            </div>

            <Link href="/about" className="block mt-6 md:mt-8">
              <Button className="w-full md:w-auto bg-pink-500 hover:bg-pink-700 rounded-full">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
