import { useState } from "react";import BgImage from "./BgImage";
import { ProjectsList as projectsList } from "../utils/ProjectsList";
import { ProList as proList } from "../utils/ProList";

import SectionTitle from "./SectionTitle";
import SectionBox from "./SectionBox";
import BiggerSectionBox from "./BiggerSectionBox";
import Carousel from "../storybook_components/Carousel";
import Grid from "./Grid";
import { useImages } from "../context/ImagesContext";
import hands from "../assets/images/mani.png";
import ProjectsMenu from "./ProjectsMenu.tsx";

export default function Projects() {
  const { width } = useImages();
    const [isActive, setIsActive] = useState<number>(1);

  return (
    <section id="projects">
      <BgImage src={hands} />
      <BiggerSectionBox>
        <SectionBox>
          <SectionTitle
            title="What do I do?"
            subtitle="My projects, both professional and personal"
          />

            <ProjectsMenu isActive={isActive} setIsActive={setIsActive} />
            {isActive === 1
                ? width >= 800
                    ? <Grid elements={proList} />
                    : <Carousel elements={proList} alternative={true} />
                :
                  width >= 800
                      ? <Grid elements={projectsList} />
                      : <Carousel elements={projectsList} alternative={true} />

            }
        </SectionBox>
      </BiggerSectionBox>
    </section>
  );
}
