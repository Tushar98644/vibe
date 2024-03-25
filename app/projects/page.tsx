import { CommonHero } from "@/components";
import { Projects } from "@/components/Projects/Projects";

const Projects_Page = () => {
  return (
    <>
      <CommonHero
        title={"Projects"}
        subtitle={"Here are some my selected projects worth looking into."}
        position={"start"}
      />
      <Projects />
    </>
  );
};

export default Projects_Page;
