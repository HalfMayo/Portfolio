import SvgButton from "../storybook_components/SvgButton";
import { ReactComponent as Email } from "../assets/svgs/email-1572-svgrepo-com.svg";
import { ReactComponent as Github } from "../assets/svgs/github-142-svgrepo-com.svg";
import { ReactComponent as Instagram } from "../assets/svgs/instagram-svgrepo-com (1).svg";
import { ReactComponent as Linkedin } from "../assets/svgs/linkedin-161-svgrepo-com.svg";
import BgImage from "./BgImage";

export default function Contacts() {
  return (
    <section id="contacts">
      <BgImage src="../src/assets/images/piedi.png" />
      <div className="w-full h-full bg-transparent border-surface border-x-[3vw] border-y-[4vh] inner-border absolute z-10"></div>
      <div className="h-screen flex flex-col items-center relative z-10 justify-center gap-12 w-1/3 left-[75%] translate-x-[-75%]">
        <div className="p-12 py-8 bg-white text-on-surface border-black border-4 shadow-[7px_7px_0_1px_rgba(0,0,0,1)] rounded-sm w-full">
          <h1 className="font-bold text-4xl pb-4">Contacts</h1>
          <p className="text-lg">Let's get in touch!</p>
        </div>
        <div className="flex items-center justify-end gap-8 w-full">
          <div className="p-6 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container">
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
          </div>
          <div className="p-6 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container">
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
          </div>
          <div className="p-6 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container">
            <a
              href="https://www.instagram.com/the.barbroid/"
              target="_blank"
              rel="noreferrer"
            >
              <SvgButton
                label="Instagram"
                svg={Instagram}
                color="white"
                width="48px"
                height="48px"
              />
            </a>
          </div>
          <div className="p-6 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container">
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
          </div>
        </div>
      </div>
    </section>
  );
}
