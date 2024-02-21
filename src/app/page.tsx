import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSpace from '@/components/sections/ProblemSpace'
import VideoSection from '@/components/sections/VideoSection';
import   MeetTeam from  '@/components/sections/MeetTeam'

export default function Home() {
  return (
    <main className="">
       <Navbar />
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
