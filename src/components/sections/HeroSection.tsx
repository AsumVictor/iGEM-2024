import React from "react";
import Button from "../topology/Button";
import { Problem_soln_pitch } from "../data";

function HeroSection(): JSX.Element {
  return (
    <section className="w-full hero-bg 1240px:h-[100vh] py-20 1240px:py-0 1240px:mt-[-1.8cm] flex justify-center items-center overflow-x-hidden">
      <div className="w-full flex gap-10 flex-col 1240px:flex-row justify-center px-5 400px:px-10 550px:px-20">
        <div className=" w-full 650px:w-[15cm] ">
          <h1 className="text-[3rem] 400px:text-[3.5rem] 550px:text-[4rem] 650px:text-[5rem] protest-strike-regular text-deep-blue leading-[5rem]">
          CoastBusters, <br /> To the Rescue!
          </h1>
          <p className=" font-semibold poppins-regular"><Problem_soln_pitch /></p>
          <div className="mt-7">
            <Button
              type="button"
              title="let talk"
              size="medium"
              textLabel="Learn more here"
            />
          </div>
        </div>
        <div className="w-full h-[10cm] 650px:w-[10cm] bg-deep-blue"></div>
      </div>
    </section>
  );
}

export default HeroSection;
