import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Proyects from "@/components/proyects";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <body className="bg-[#2b2c2c]">
      <NavBar />
      <Hero />
      <About />
      <Proyects />
      <Skills />
      <Experience />
      <Contact />
    </body>
  );
}
