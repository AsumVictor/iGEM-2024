import React from 'react'
import TeamMembers from '../utils/Team_'
import { team_members } from '../config'

function MeetTeam() {
    console.log(team_members)
  return (
    <section className=' w-full  py-10 poppins-extrabold'>
    <h3 className=' text-center text-3xl'>MEET THE TEAM</h3>
    {Object.entries(team_members).map(([t_name, members])=>(

     <TeamMembers teamType={t_name} members={members} />
    ))}
    </section>
  )
}

export default MeetTeam