import BgImage from "./BgImage";
import { ProjectsList as projectsList } from "../utils/ProjectsList";
import SectionTitle from "./SectionTitle";
import SectionBox from "./SectionBox";
import BiggerSectionBox from "./BiggerSectionBox";
import Carousel from "../storybook_components/Carousel";
import Grid from "./Grid";
import { useImages } from "../context/ImagesContext";

export default function Projects() {
  const { width } = useImages();
  return (
    <section id="projects">
      <BgImage src="../src/assets/images/mani.png" />
      <BiggerSectionBox>
        <SectionBox>
          <SectionTitle
            title="What do I do?"
            subtitle="My projects, including the Storybook library I've developed based
              on Material design 3."
          />
          {width >= 800 ? (
            <Grid elements={projectsList} />
          ) : (
            <Carousel elements={projectsList} alternative={true} />
          )}
        </SectionBox>
      </BiggerSectionBox>
    </section>
  );
}
