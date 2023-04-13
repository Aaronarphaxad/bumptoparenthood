import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-screen h-screen text-white hero pt-5">
      
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-5/12 w-full mt-5">
          <h1 className="my-4 text-5xl font-bold leading-tight">
          The Ultimate Solution for new Parents
          </h1>
          <p className="text-2xl mb-8 ">
            Registered Nurse and Lactation Counselor,
            Specializing in Labor and Delivery and Motherhood Support Services
          </p>
          <div className="flex justify-center mx-auto ">
            <Link href="/appointment" className="hover:underline bg-white hover:bg-rose-300 hover:text-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Book an Appointment
            </Link>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
