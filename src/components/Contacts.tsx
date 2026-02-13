import SvgButton from "../storybook_components/SvgButton";
import { ReactComponent as Email } from "../assets/svgs/email-1572-svgrepo-com.svg";
import { ReactComponent as Github } from "../assets/svgs/github-142-svgrepo-com.svg";
import { ReactComponent as Linkedin } from "../assets/svgs/linkedin-161-svgrepo-com.svg";
import BgImage from "./BgImage";
import SectionTitle from "./SectionTitle";
import SectionElement from "./SectionElement";
import SectionBox from "./SectionBox";
import BiggerSectionBox from "./BiggerSectionBox";
import feet from "../assets/images/piedi.png";

export default function Contacts() {
  return (
    <section id="contacts">
      <BgImage src={feet} />
      <BiggerSectionBox>
        <SectionBox boxHeight="screen" justify="center" contacts={true}>
          <SectionTitle title="Contacts" subtitle="Let's get in touch!" />
          <div className="grid grid-cols-2 min-[580px]:flex min-[580px]:flex-row items-center justify-center min-[580px]:justify-end gap-8 w-full">
            <SectionElement>
              <a
                href="mailto:barbara.sandrolini@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SvgButton
                  label="Email"
                  svg={Email}
                  color="white"
                  width="48px"
                  height="48px"
                />
              </a>
            </SectionElement>
            <SectionElement>
              <a
                href="https://github.com/HalfMayo"
                target="_blank"
                rel="noreferrer"
              >
                <SvgButton
                  label="Github"
                  svg={Github}
                  color="white"
                  width="48px"
                  height="48px"
                />
              </a>
            </SectionElement>
            <SectionElement>
              <a
                href="https://www.linkedin.com/in/barbara-sandrolini/"
                target="_blank"
                rel="noreferrer"
              >
                <SvgButton
                  label="Linkedin"
                  svg={Linkedin}
                  color="white"
                  width="48px"
                  height="48px"
                />
              </a>
            </SectionElement>
          </div>
        </SectionBox>
      </BiggerSectionBox>
    </section>
  );
}
