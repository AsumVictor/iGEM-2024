"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../topology/Button";

function StoryHeading() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error: any) => {
          setIsPlaying(false);
          console.error("Autoplay failed:", error.message);
        });
    }
  }, []); 

  return (
    <section className="relative w-full overflow-y-hidden h-[100vh] py-20 1240px:py-0 mt-[-1.8cm] flex justify-center items-center overflow-x-hidden ">
      <div className="w-full h-full absolute top-0 left-0">
        <video ref={videoRef} muted autoPlay loop className=" video">
          <source src="/Trim_.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col text-white items-center justify-end w-full h-full story-bg z-10 absolute top-0 left-0 pb-10">
        <h1 className="text-[3rem] 400px:text-[3.5rem] 550px:text-[4rem]  protest-strike-regular text-white leading-[3rem]">
          CoastBusters, <br /> To the Rescue!
        </h1>
        <p className=" mt-2 font-semibold poppins-regular px-3 text-justify">
          Coastal Erosion and Plastic Pollution is now a thing of the past.
        </p>
        <div className="flex flex-row mt-5 gap-10 flex-wrap justify-center">
          <Button
            type="button"
            title="CTA"
            size="medium"
            textLabel="Find out now"
            color="bg-transparent font-semibold poppins-regular underline border-2"
          />
          <Button
            type="button"
            title="CTA"
            size="medium"
            textLabel="Sponsor"
            color="bg-transparent border-2 "
          />
        </div>
      </div>
    </section>
  );
}

export default StoryHeading;
