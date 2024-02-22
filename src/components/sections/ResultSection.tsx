import Image from "next/image";
import React from "react";
import resultBig from "@/assets/images/result_big.png";
import result1 from "@/assets/images/result1.jpg";
import result2 from "@/assets/images/result2.png";
import Button from "../topology/Button";


function ResultSection() {
  return (
    <section className=" w-full py-10 mt-10">
      <h2 className=" text-3xl poppins-bold text-center uppercase">
        OUR PREDICTED LAB WORKS
      </h2>
      <div className="gap-3 grid 750px:grid-cols-2 mt-10">
        <div className="w-full flex flex-col justify-start items-center px-4">
          <p className=" text-justify poppins-regular mt-5">
            Due to the inability to be in the lab this year, we performed
            experiments in silico using the SnapGene Software. After obtaining
            our genetic parts and coding sequences from the UniProt database or
            peer-reviewed articles, we used Snap Gene to clone the vector
            (pSB1C3) to obtain five (5) recombinant plasmids which had different
            inserts pertaining to the role they performed in our project. We
            used the Restriction Enzyme Cloning assembly method while adhering
            to the BioBrick Standards using the restriction enzymes, EcoRI,
            XbaI, and SpeI. The vector was cut with EcoRI and XbaI and the
            inserts with EcoRI and SpeI. These five recombinant plasmids
            included the following inserts:
          </p>
        </div>

        <div className="  w-full flex justify-center items-start">
          <Image src={resultBig} height={3} width={600} alt=" Image" />
        </div>
      </div>

      <div className="gap-3 grid 750px:grid-cols-2 py-10 mt-10">
        <div className="w-full flex flex-col justify-start items-center px-4">
          <div className=" flex flex-row flex-wrap gap-2 items-center text-primary_green font-bold poppins-medium-italic">
            <div className="h-[0.4cm] w-[0.4cm] bg-primary_green"></div>
            <span>
              A plastic biodegradation insert with a constitutive promoter
            </span>
          </div>
          <Image src={result1} height={3} width={600} alt=" Image" />
        </div>
        <div className="w-full flex flex-col justify-start items-center px-4">
          <div className=" flex flex-row flex-wrap gap-2 items-center text-primary_green font-bold poppins-medium-italic">
            <div className="h-[0.4cm] w-[0.4cm] bg-primary_green"></div>
            <span>
              A plastic biodegradation insert with a high pH inducible promoter
            </span>
          </div>
          <Image src={result2} height={3} width={600} alt=" Image" />
        </div>
      </div>

      <div className="flex flex-row mt-5 gap-10 flex-wrap justify-center">
          <Button
            type="button"
            title="CTA"
            size="medium"
            textLabel="Read More"
            color="bg-black font-semibold poppins-regular underline border-2 border-black text-black"
          />
          
        </div>

    </section>
  );
}

export default ResultSection;
