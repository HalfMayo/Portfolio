import { useState } from "react";
import { ReactComponent as Hamburger } from "../assets/svgs/hamburger-7-svgrepo-com.svg";
import { ReactComponent as Close } from "../assets/svgs/close-circle-svgrepo-com.svg";
import { useImages } from "../context/ImagesContext";
import SvgButton from "../storybook_components/SvgButton";
import { HashLink } from "react-router-hash-link";

export default function MenuMobile() {
  const { width } = useImages();
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  return (
    <div className="relative">
      {isMenuShown ? (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center fixed z-20">
          <ul className="list-none diff-font text-3xl flex flex-col items-center justify-center text-center w-full">
            <li
              className="p-2 w-11/12 text-on-surface hover:text-white hover:bg-black"
              onClick={() => setIsMenuShown(false)}
            >
              <HashLink smooth to="#home">
                Home
              </HashLink>
            </li>
            <li
              className="p-2 w-11/12 text-on-surface hover:text-white hover:bg-black"
              onClick={() => setIsMenuShown(false)}
            >
              <HashLink smooth to="#projects">
                Projects
              </HashLink>
            </li>
            <li
              className="p-2 w-11/12 text-on-surface hover:text-white hover:bg-black"
              onClick={() => setIsMenuShown(false)}
            >
              <HashLink smooth to="#cv">
                CV
              </HashLink>
            </li>
            <li
              className="p-2 w-11/12 text-on-surface hover:text-white hover:bg-black"
              onClick={() => setIsMenuShown(false)}
            >
              <HashLink smooth to="#contacts">
                Contacts
              </HashLink>
            </li>
          </ul>
          <SvgButton
            className="mt-4"
            label="close menu"
            svg={Close}
            width={width >= 640 ? "48px" : "32px"}
            height={width >= 640 ? "48px" : "32px"}
            onClick={() => setIsMenuShown(false)}
          />
        </div>
      ) : (
        <div
          className={`fixed top-[2vh] left-[50%] translate-x-[-50%] z-20 cursor-pointer ${
            width >= 640 ? "p-4" : "p-2"
          } bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container`}
        >
          <SvgButton
            label="menu"
            svg={Hamburger}
            width={width >= 640 ? "48px" : "32px"}
            height={width >= 640 ? "48px" : "32px"}
            onClick={() => setIsMenuShown(true)}
          />
        </div>
      )}
    </div>
  );
}
