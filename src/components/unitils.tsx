import React from 'react'

export function VideoPlay() {
  return (
    <video width="640" height="360" controls className=' h-full w-full bg-black'>
        <source src={"../assets/video/ashesi_igem_video.mp4"} type="video/mp4" />
       Your browser does not support the video tag.
    </video>
  )
}

