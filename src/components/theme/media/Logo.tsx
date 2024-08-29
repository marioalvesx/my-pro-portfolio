import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../app/projects/assets/logo/portfolioLogo.svg";

function Logo() {
  return (
    <div className="flex flex-direction-column items-center gap-2">
      <a className="flex items-center gap-2" href="/">
        <span className="text-3xl lg:text-5xl">*dev</span>
        <span className="hidden text-base lg:block text-center mt-2">
          Marioalves
        </span>
      </a>
    </div>
  );
}

export default Logo;
