import React from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";

const Logo = () => {
  const mobile = useMediaQuery("(max-width:1024px)");
  return (
    <>
    <div className="logo bg-white shadow">
      <Image src={logo} alt="bump to parenthood" height={mobile ? 70:120} />
    </div>
    </>
  );
};

export default Logo;
