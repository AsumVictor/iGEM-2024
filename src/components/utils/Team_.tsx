import Image from "next/image";
import React from "react";
import { Team } from "../types";

export default function TeamMembers({ members }: { members: Team[] }) {
  return (
    <section className="w-full flex-wrap gap-x-2 gap-y-14 py-10 mt-10 flex justify-center items-center">
      {members.map((m) => (
        <Team key={m.image} member={m} teamName={m.teamtype} />
      ))}
    </section>
  );
}

function Team({ member, teamName }: { member: Team; teamName: string }) {
  return (
    <div className=" w-full 400px:w-[9cm] flex flex-col justify-center items-center">
      <Image
        src={member.image}
        height={150}
        width={150}
        alt="name"
        className=" rounded-full border-4 border-primary_brown "
      />
      <p className=" text-4xl mt-2 protest-strike-regular">
        {member.first_name.split(" ")[0]}
      </p>
      <p className=" text-[16px] poppins-regular">
        {member.last_name.split(" ")[0]}
      </p>
      <p className=" poppins-light-italic">{member.major}</p>
      <TeamBadge name={teamName} />
    </div>
  );
}

function TeamBadge({ name }: { name: string }): JSX.Element {
  const teamColors: { [key: string]: string } = {
    "lab team": "bg-blue-500",
    "wiki team": "bg-primary_green",
    "modelling team": "bg-primary_brown",
    "engineering team": "bg-primary_green",
    "entrepreneurship team": "bg-blue-500",
  };

  return (
    <span
      className={` ${teamColors[name]} py-1 px-3  rounded-md poppins-medium-italic text-[14px] capitalize text-white`}
    >
      {name}
    </span>
  );
}
