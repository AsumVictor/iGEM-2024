import Image from "next/image";
import React from "react";
import Sponser1 from "@/assets/images/adknowdgement1.png";
import Sponser2 from "@/assets/images/adknowdgement2.png";
import Sponser3 from "@/assets/images/ashesiLogo.png";

function Sponors() {
  return (
    <section className=" py-10">
      <h2 className=" text-3xl poppins-bold text-center uppercase">
        OUR SPONSORS
      </h2>
      <div className="flex flex-row justify-center items-center gap-5">
        <Image src={Sponser1} height={150} width={150} alt="ack" />
        <Image src={Sponser2} height={150} width={50} alt="ack" />
        <Image src={Sponser3} height={150} width={100} alt="ack" />
      </div>
    </section>
  );
}

export default Sponors;
