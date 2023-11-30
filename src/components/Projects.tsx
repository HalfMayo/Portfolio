import { useState } from "react";
import BgImage from "./BgImage";
import { ProjectsList as projectsList } from "../utils/ProjectsList";

export default function Projects() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="projects">
      <BgImage src="../src/assets/images/mani.png" />
      <div className="w-full h-full bg-transparent border-surface border-x-[3vw] border-y-[4vh] inner-border absolute z-10"></div>
      <div className="h-screen flex items-center relative z-10">
        <div className="flex flex-col items-center gap-8 w-1/3 relative z-10 left-[75%] translate-x-[-75%] h-[81%]">
          <div className="px-12 py-8 bg-white text-on-surface border-black border-4 shadow-[7px_7px_0_1px_rgba(0,0,0,1)] rounded-sm w-full">
            <h1 className="font-bold text-4xl pb-4">What do I do?</h1>
            <p className="text-lg">
              My projects, including the Storybook library I've developed based
              on Material design 3.
            </p>
          </div>
          <ul className="w-full grid grid-cols-2 gap-4 overflow-y-auto scrollbar">
            {projectsList.map((el, i) => (
              <li
                key={i}
                className={`relative bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-center ${
                  i === projectsList.length - 1 ? "col-start-2" : ""
                }`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <a href={el.link} target="_blank" rel="noreferrer">
                  {hover === i && (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-[#ffd0bd]/75 p-8 gap-4 absolute">
                      <h2 className="text-3xl">{el.title}</h2>
                      <p>{el.description}</p>
                    </div>
                  )}
                  <img
                    className="w-full h-full object-cover"
                    src={el.url}
                    alt={el.altText}
                  />
                </a>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
