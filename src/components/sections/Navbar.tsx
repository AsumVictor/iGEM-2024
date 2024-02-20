"use client";
import { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Logo from '@/assets/images/IGEM-Ashesi2024.png'

function Navbar(): JSX.Element {
  const [isShow, setShow] = useState<boolean>(false);

  const toggleIsShow: any = () => {
    setShow((prev: boolean) => !prev);
  };

  return (
    <header className=" z-[99] bg-transparent backdrop-blur-lg relative w-full h-[1.8cm] flex justify-between items-center px-5">
      <div className=""> 
       <Image src={} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden  650px:flex flex-row">
        <ul className=" flex flex-row gap-4 capitalize">
          <li>Home</li>
          <li>Research</li>
          <li>Projects</li>
          <li>blog</li>
          <li>Sponors</li>
        </ul>
      </nav>

      {/* Mobile & Tablet Navigation */}
      {isShow && (
        <nav className=" bg-white absolute flex w-full left-0  650px:hidden flex-row  top-[1.8cm]">
          <ul className=" flex flex-col gap-4 capitalize">
            <li>Home</li>
            <li>Research</li>
            <li>Projects</li>
            <li>blog</li>
            <li>Sponors</li>
          </ul>
        </nav>
      )}

      <button
        type="button"
        onClick={toggleIsShow}
        title="_toggler"
        className="bg-gray-100 h-[1cm] w-[1cm] justify-center flex 650px:hidden items-center "
      >
        {isShow ? (
          <GrClose title="_toggler" size={23} />
        ) : (
          <HiMiniBars2 title="_toggler" size={34} />
        )}
      </button>
    </header>
  );
}

export default Navbar;
