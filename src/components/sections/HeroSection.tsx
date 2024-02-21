import React from "react";
import Button from "../topology/Button";
import { Problem_soln_pitch } from "../data";
import Image from "next/image";
import waste_hero from '@/assets/images/plastic_waste_hero.png'

function HeroSection(): JSX.Element {
    

  return (
    <section className="green-dotted-bg w-full overflow-y-hidden 1240px:h-[100vh] py-20 1240px:py-0 flex justify-center items-center overflow-x-hidden">
      <div className="w-full flex gap-10 flex-col 1240px:flex-row justify-center px-5 400px:px-10 550px:px-20">
        <div className=" w-full 650px:w-[15cm] ">
          <h1 className="text-[3rem] 400px:text-[3.5rem] 550px:text-[4rem] 650px:text-[5rem] protest-strike-regular text-primary_green leading-[5rem]">
          CoastBusters, <br /> To the Rescue!
          </h1>
          <p className=" mt-10 font-semibold poppins-regular"><Problem_soln_pitch /></p>
          <div className="mt-10">
            <Button
              type="button"
              title="let talk"
              size="medium"
              textLabel="Learn more here"
            />
          </div>
        </div>
        <div className="relative w-full h-[10cm] 650px:w-[10cm] bg-transparent">
            <Image src={waste_hero} width={500} height={2} alt=" Waste " className="absolute"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
