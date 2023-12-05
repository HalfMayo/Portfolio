import { HashLink } from "react-router-hash-link";
import SectionElement from "./SectionElement";

export default function MenuBig() {
  return (
    <>
      <div className="px-12 py-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm w-full font-bold text-lg">
        {" "}
        And now choose...
      </div>
      <div className="flex items-center justify-end gap-8 w-full">
        <HashLink smooth to="#projects">
          <SectionElement children={<p>Projects</p>} />
        </HashLink>
        <HashLink smooth to="#cv">
          <SectionElement children={<p>CV</p>} />
        </HashLink>
        <HashLink smooth to="#contacts">
          <SectionElement children={<p>Contacts</p>} />
        </HashLink>
      </div>
    </>
  );
}
