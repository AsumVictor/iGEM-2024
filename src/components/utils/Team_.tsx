import Image from "next/image";
import React from "react";
import Asum from "@/assets/images/team_asum.jpg";
import { Team } from "../types";

export default function TeamMembers({
  teamType,
  members,
}: {
  teamType: string;
  members: Team[];
}) {
  return (
    <section className="w-full flex-wrap gap-x-2 gap-y-14 py-10 mt-10 flex justify-center items-center">
      <Team />
    </section>
  );
}

function Team({ member }: { member: Team }) {
  return (
    <div className=" w-full 400px:w-[9cm] flex flex-col justify-center items-center">
      <Image
        src={member.image}
        height={180}
        width={180}
        alt="name"
        className=" rounded-full border-4 border-primary_brown "
      />
      <p className=" text-4xl mt-2 protest-strike-regular">Victor</p>
      <p className=" text-[16px] poppins-regular">Asum</p>
      <p className=" poppins-light-italic">Bsc. Computer Science</p>
      <span className=" py-1 px-3 bg-red-500 rounded-md poppins-medium-italic text-[14px]">
        Wiki Team
      </span>
    </div>
  );
}
