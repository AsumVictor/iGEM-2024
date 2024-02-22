"use client";
import React, { useEffect, useRef, useState } from "react";
import { VideoPlay } from "../utils/unitils";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="mt-20 green-dotted-bg-white px-3 py-10 flex justify-center items-center flex-col bg-primary_green">
      <h2 className=" text-3xl poppins-extrabold mb-4 text-white">
        WATCH OUR VIDEO
      </h2>
      <div className="flex justify-center items-center h-[12cm] w-full 600px:w-10/12 rounded-2xl p-2 bg-primary_green relative overflow-hidden">
        <video ref={videoRef} autoPlay={false} className=" h-full video">
          <source src="/ashesi_igem_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className={` ${
            isPlaying ? "opacity-30" : null
          } z-10 text-primary_green text-[10rem]`}
          type="button"
          title="play-video"
          onClick={() => togglePlay()}
        >
          {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
