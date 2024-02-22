"use client";
import { useEffect, useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Logo from "@/assets/images/IGEM-Ashesi2024.png";
import Link from "next/link";

function Navbar(): JSX.Element {
  const [isShow, setShow] = useState<boolean>(false);

  const toggleIsShow: any = () => {
    setShow((prev: boolean) => !prev);
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  return (
    <header
      className={`${
        scrollY > 150 ? "bg-white" : "bg-transparent"
      } z-[99]  w-full h-[1.8cm] flex justify-between items-center px-2 400px:px-5 sticky top-0 `}
    >
      <Link href={"/"} className=" h-full justify-center items-center flex ">
        <Image src={Logo} width={270} height={100} alt="iGEMxAshesi-logo" />
      </Link>

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
        <nav className=" bg-white absolute flex w-full left-0  650px:hidden flex-row  top-[1.8cm] py-5 px-10">
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
