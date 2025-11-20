import ScrollToTop from "@/Components/Shared/ScrollToTop";
import BestCourses from "@/Home/BestCourses";
import Courses from "@/Home/Courses";
import Framework from "@/Home/Framework";
import Future from "@/Home/Future";
import Hero from "@/Home/Hero";
import Learn from "@/Home/Learn";
import SkillDevelopment from "@/Home/SkillDevelopment";
import Success from "@/Home/Success";
import Updates from "@/Home/Updates";
import WithUs from "@/Home/WithUs";
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
      <WithUs></WithUs>
      <Updates></Updates>
      <ScrollToTop></ScrollToTop>

    </div>
  );
}
