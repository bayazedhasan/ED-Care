import BestCourses from "@/Home/BestCourses";
import Courses from "@/Home/Courses";
import Framework from "@/Home/Framework";
import Future from "@/Home/Future";
import Hero from "@/Home/Hero";
import Learn from "@/Home/Learn";
import SkillDevelopment from "@/Home/SkillDevelopment";
import Success from "@/Home/Success";
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
      <Success></Success>
      <Framework></Framework>
      <BestCourses></BestCourses>
      <Future></Future>
      

    </div>
  );
}
