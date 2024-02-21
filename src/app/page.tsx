import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSpace from '@/components/sections/ProblemSpace'

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
    </main>
  );
}
