import React from "react";
import TeamMembers from "../utils/Team_";
import { team_members } from "../config";

function MeetTeam() {
  return (
    <section className=" w-full  mt-20 py-10 poppins-extrabold">
      <h3 className=" text-center text-3xl">MEET THE TEAM</h3>
      <TeamMembers members={team_members} />
    </section>
  );
}

export default MeetTeam;
