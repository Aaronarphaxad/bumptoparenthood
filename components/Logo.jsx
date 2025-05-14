import React from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image 
        src={logo} 
        alt="bump to parenthood" 
        height={100} 
        width={100} 
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
