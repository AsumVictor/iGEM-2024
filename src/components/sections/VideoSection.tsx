import React from "react";
import { VideoPlay } from "../utils/unitils";

function VideoSection() {
  return (
    <section className="green-dotted-bg-white px-3 py-10 flex justify-center items-center flex-col bg-primary_green">
      <h2 className=" text-3xl poppins-extrabold mb-4 text-white">WATCH OUR VIDEO</h2>
      <div className="flex justify-center items-center h-[12cm] w-full 600px:w-10/12 rounded-2xl p-2 bg-primary_green relative overflow-hidden">
        <video muted autoPlay loop playsInline className=" h-full video">
          <source src="/ashesi_igem_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
