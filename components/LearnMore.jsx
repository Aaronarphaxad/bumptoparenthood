import { urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

function LearnMore({ about }) {
  const { homeImage, shortDesc, name } = about[0];
  return (
    <div class="flex flex-wrap p-5 justify-center p-10 bg-gray-100">
      <div class=" flex items-center ">
        <img
          class="rounded-lg desc-img"
          src={urlFor(homeImage)}
          alt="raven"
          height={400}
          width={500}
        />
      </div>
      <div class=" flex flex-col w-full h-2/3  md:w-1/2 justify-between gap-2 p-5">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Raven</h4>
        <p class="text-gray-600 mb-2 text-justify">
         {shortDesc}
        </p>
        <Link href="/about" className="rounded-full bg-rose-300 hover:bg-rose-200 w-1/2 text-center p-2 text-white mt-5">
            Learn more
        </Link>
      </div>
    </div>
  );
}

export default LearnMore;
