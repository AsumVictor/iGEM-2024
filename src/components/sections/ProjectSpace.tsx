import Image from "next/image";
import React from "react";
import { problem_statement } from "../config";
import vibro from "@/assets/images/Vibrio.jpg";
import story from "@/assets/images/story_igem.jpg";

function ProjectSpace(): JSX.Element {
  return (
    <section className=" py-10">
      <h2 className=" text-3xl poppins-bold text-center uppercase">
        Project overview
      </h2>
      <div className="mt-10 py-5 gap-3 grid 750px:grid-cols-2">
        <div className="w-full flex flex-col justify-start items-center px-4">
          <h2 className=" font-bold text-3xl text-justify poppins-bold">
            Our Solution
          </h2>
          <p className=" text-justify poppins-regular mt-5">
            We seek to solve the problem of plastic pollution on the beach and
            in the sea as well as coastal erosion. The aim of our project is to
            create a bio-brick from the processes of plastic degradation and
            biocementation. To achieve this we hope to engineer a series of the
            bacterium Vibrio natriegens, to degrade plastic (PET) and to induce
            biocementation through the hydrolysis of urea respectively.
            <br />
            <ul className=" mt-2">
              <li className=" flex flex-row flex-wrap gap-2 items-center">
                <div className="h-[0.4cm] w-[0.4cm] bg-primary_green"></div>
                <span>
                  Vibrio natriegens has shown promise in degrading PET plastic
                  in laboratory studies
                </span>
              </li>
              <li className=" flex flex-row flex-wrap gap-2 items-center">
                <div className="h-[0.4cm] w-[0.4cm] bg-primary_green"></div>
                <span>
                  Biocementation using microbes offers a sustainable and
                  eco-friendly alternative to traditional concrete.
                </span>
              </li>
            </ul>
          </p>
        </div>

        <div className="  w-full flex justify-center items-start">
          <Image src={vibro} height={3} width={600} alt=" Image" />
        </div>
      </div>
      <div className="w-full">
        <Image
          quality={80}
          src={story}
          height={2}
          width={600}
          alt="image"
          className=" w-full"
        />
      </div>
      <p className=" text-primary_green text-2xl font-bold text-center mt-5">
        We hope to eventually reduce plastic pollution and coastal erosion over
        time.
      </p>
    </section>
  );
}

export default ProjectSpace;
