import Courses from "@/Home/Courses";
import Hero from "@/Home/Hero";
import Learn from "@/Home/Learn";
import SkillDevelopment from "@/Home/SkillDevelopment";
import World from "@/Home/World";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SkillDevelopment></SkillDevelopment>
      <Learn></Learn>
      <World></World>
      <Courses></Courses>
    </div>
  );
}
