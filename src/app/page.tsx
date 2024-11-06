import Hero from "./components/herro";
import Skill from "./components/skill";
import Experience from "./components/experience";
import Work from "./components/work";
import Testimonials from "./components/testimonials";


 function Home() {
  return (
    <main>
          <Hero/>
          <Skill/>
          <Experience/>
          <Work/>
          <Testimonials/>
      </main>
  );
}
export default Home 