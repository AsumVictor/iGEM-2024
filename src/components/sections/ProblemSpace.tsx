import Image from "next/image";
import plasticWaste from "@/assets/images/plasttic waste.jpg";
import { problem_statement } from "../config";

function ProblemSpace(): JSX.Element {
  return (
    <section className="mt-10 py-20 gap-3 grid 750px:grid-cols-2">
      <div className="  w-full flex justify-center items-start">
        <Image src={plasticWaste} height={3} width={600} alt=" Image" />
      </div>
      <div className="w-full flex flex-col justify-start items-center px-4">
        <h2 className=" font-bold text-3xl text-justify poppins-bold">
          What problems do we hope to solve?
        </h2>
        <p className=" text-justify poppins-regular mt-5">
          {problem_statement}

          <br />
          <ul className=" mt-2">
            <li className=" flex flex-row flex-wrap gap-2 items-center">
              <div className="h-[0.4cm] w-[0.4cm] bg-primary_brown"></div>
              <span> 8 million tons of plastic enter the ocean annually</span>
            </li>
            <li className=" flex flex-row flex-wrap gap-2 items-center">
              <div className="h-[0.4cm] w-[0.4cm] bg-primary_brown"></div>
              <span>
                By 2050, there could be more plastic than fish in the sea.
              </span>
            </li>
            <li className=" flex flex-row flex-wrap gap-2 items-center">
              <div className="h-[0.4cm] w-[0.4cm] bg-primary_brown"></div>
              <span>
                Over 40% of the world's coastlines are affected by erosion
              </span>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default ProblemSpace;
