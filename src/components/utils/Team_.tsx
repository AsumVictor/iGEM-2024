import Image from "next/image";
import React from "react";
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

function Team({ member, teamName }: { member: Team; teamName: string }) {
  return (
    <div className=" w-full 400px:w-[9cm] flex flex-col justify-center items-center">
      <Image
        src={member.image}
        height={180}
        width={180}
        alt="name"
        className=" rounded-full border-4 border-primary_brown "
      />
      <p className=" text-4xl mt-2 protest-strike-regular">
        {member.first_name.split("")[0]}
      </p>
      <p className=" text-[16px] poppins-regular">
        {member.last_name.split("")[0]}
      </p>
      <p className=" poppins-light-italic">{member.major}</p>
      <span className=" py-1 px-3 bg-red-500 rounded-md poppins-medium-italic text-[14px]">
        Wiki Team
      </span>
    </div>
  );
}
