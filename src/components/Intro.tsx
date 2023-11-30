import { HashLink } from "react-router-hash-link";
import BgImage from "./BgImage";
import { useImages } from "../context/ImagesContext";

export default function Intro() {
  const { buttonRef, visible, handleClick, displayNone } = useImages();

  return (
    <>
      <BgImage src="../src/assets/images/testa.png" />
      <div className="h-screen flex items-center relative z-10">
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
        <div
          className={`transition-all ${
            !visible ? "opacity-100 duration-500" : "opacity-0 duration-200"
          } absolute left-[75%] translate-x-[-75%] flex flex-col items-center justify-center gap-4 w-1/3 h-[75%] overflow-y-auto scrollbar`}
        >
          <div className="p-12 bg-white text-on-surface border-black border-4 shadow-[7px_7px_0_1px_rgba(0,0,0,1)] rounded-sm">
            <h1 className="font-bold text-4xl pb-4">Hi! I'm Barbara.</h1>
            <p className="text-2xl pb-4">
              I'm a <strong>React developer</strong> and an{" "}
              <strong>illustrator</strong>.
            </p>
            <p className="text-lg pb-4">
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
            <p className="text-lg">
              And now here I am, arranging hooks and effects to{" "}
              <strong>create wonders!</strong>
            </p>
          </div>
          <div className="px-12 py-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm w-full font-bold text-lg">
            {" "}
            And now choose...
          </div>
          <div className="flex items-center justify-end gap-8 w-full">
            <HashLink smooth to="#projects">
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-3xl hover:bg-surface-container">
                Projects
              </div>
            </HashLink>
            <HashLink smooth to="#cv">
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-3xl hover:bg-surface-container">
                CV
              </div>
            </HashLink>
            <HashLink smooth to="#contacts">
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-3xl hover:bg-surface-container">
                Contacts
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}
