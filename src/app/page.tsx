import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSpace from "@/components/sections/ProblemSpace";
import VideoSection from "@/components/sections/VideoSection";
import MeetTeam from "@/components/sections/MeetTeam";
import StoryHeading from "@/components/sections/StoryHeading";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section>
        <StoryHeading />
      </section>
      <section>
        <HeroSection />
      </section>
      <section>
        <ProblemSpace />
      </section>
      <section>
        <VideoSection />
      </section>
      <section>
        <MeetTeam />
      </section>
    </main>
  );
}
