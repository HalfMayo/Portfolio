import BgImage from "./BgImage";
import { useImages } from "../context/ImagesContext";
import MenuBig from "./MenuBig";
import SectionBox from "./SectionBox";
import BiggerSectionBox from "./BiggerSectionBox";

export default function Intro() {
  const { width, height, buttonRef, visible, handleClick, displayNone } =
    useImages();

  return (
    <section id="home">
      <BgImage src="../src/assets/images/testa.png" />
      <BiggerSectionBox>
        <button
          ref={buttonRef}
          className={`absolute z-20 transition-all left-[50%] translate-x-[-50%] top-[25%] ${
            visible ? "opacity-100 duration-500" : "opacity-0 duration-200"
          } w-[285px] h-[150px] px-5 py-4 bg-white border-black border-4 rounded-full diff-font text-4xl hover:bg-surface-container`}
          onClick={handleClick}
          onTransitionEnd={displayNone}
        >
          NEED A REACT DEVELOPER?
        </button>
        <SectionBox justify="center">
          <div className="p-6 sm:p-12 bg-white text-on-surface border-black border-4 shadow-[7px_7px_0_1px_rgba(0,0,0,1)] rounded-sm">
            <h1 className="font-bold text-xl sm:text-4xl pb-2 sm:pb-4">
              Hi! I'm Barbara.
            </h1>
            <p
              className={`${
                width < 540 && height > 840 ? "text-lg" : "text-md"
              } sm:text-2xl pb-2 sm:pb-4`}
            >
              I'm a <strong>React developer</strong> and an{" "}
              <strong>illustrator</strong>.
            </p>
            <p
              className={`${
                width < 540 && height > 840 ? "text-md" : "text-sm"
              } sm:text-lg pb-2 sm:pb-4`}
            >
              <i>How and why did you start programming?</i> you may ask. Good
              question.
              <br />
              Well, in the beginning it wasn't something I took too seriously. I
              learned C# and Unity because some friends needed a programmer for
              a game. But then I realized,{" "}
              <i>
                Hey! I'm actually good at it. Let's take it to the next level
              </i>
              .<br />
              So I started to study Js and all the regular front-end stuff, with
              the goal of becoming skilled enough to build useful apps initially
              for myself and then for the rest of the world.
            </p>
            <p
              className={`${
                width < 540 && height > 840 ? "text-md" : "text-sm"
              } sm:text-lg`}
            >
              And now here I am, arranging hooks and effects to{" "}
              <strong>create wonders!</strong>
            </p>
          </div>
          {width < 768 || height <= 600 ? null : <MenuBig />}
        </SectionBox>
      </BiggerSectionBox>
    </section>
  );
}
