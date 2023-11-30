import { useState } from "react";
import BgImage from "./BgImage";

export default function Cv() {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <section id="cv">
      <BgImage src="../src/assets/images/clarence.png" />
      <div className="w-full h-full bg-transparent border-surface border-x-[3vw] border-y-[4vh] inner-border absolute z-10"></div>
      <div className="h-screen flex items-center relative z-10">
        <div className="flex flex-col gap-8 relative z-10 w-1/3 left-[75%] translate-x-[-75%] h-[80%]">
          <div className="px-12 py-8 bg-white text-on-surface border-black border-4 shadow-[7px_7px_0_1px_rgba(0,0,0,1)] rounded-sm w-full">
            <h1 className="font-bold text-4xl pb-4">What have I done?</h1>
            <p className="text-lg">My journey so far.</p>
          </div>
          <div className="flex items-center justify-end gap-8 w-full">
            <div
              className="cursor-pointer p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-2xl hover:bg-surface-container"
              onClick={() => setIsActive(1)}
            >
              Working Exp.
            </div>
            <div
              className="cursor-pointer p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-2xl hover:bg-surface-container"
              onClick={() => setIsActive(2)}
            >
              Education
            </div>
            <div
              className="cursor-pointer p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-2xl hover:bg-surface-container"
              onClick={() => setIsActive(3)}
            >
              Skills
            </div>
          </div>
          {isActive === 1 ? (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar">
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>
                    2020 - now: Concept Artist and Unity Programmer freelance
                  </strong>
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2018 - 2020: Museum consultant</strong> - Municipality
                  of San Giovanni in Persiceto (BO)
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2017 - 2018: Civilian Service</strong> - Palazzo Poggi
                  Museum, Bologna
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>
                    2017 - 2018: Graphic designer and gallery assistant
                  </strong>{" "}
                  - MAGMA gallery, Bologna
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2017 - 2018: Graphic designer</strong> - La
                  Comunicazione Diffusa, Bologna
                </p>
              </div>
              <div></div>
            </div>
          ) : isActive === 2 ? (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar">
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2023: Frontend Developer course</strong> - tree school
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2022 - 2023: HTML, CSS, Js and React modules</strong>{" "}
                  - freecodecamp.com
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2021 - 2022: Unity course</strong> - GameDev.tv
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>2018 - 2020: Concept Art for Videogames</strong> -
                  International School of Comics, Padova
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>
                    2013 - 2016: Master's degree in Economics e Management of
                    Arts and Cultural Activities
                  </strong>{" "}
                  - Ca' Foscari University, Venezia
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl w-full">
                <p>
                  <strong>
                    2009 - 2013: Bachelor's degree in Comics and Illustration
                  </strong>{" "}
                  - Academy of Fine Arts, Bologna
                </p>
              </div>
              <div></div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar">
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-2xl w-full">
                <p>
                  <strong>React (w/Vite, w/Storybook)</strong>
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-xl ml-8">
                <p>
                  <strong>
                    React Query (w/Supabase), React Hook Form, Redux Toolkit
                  </strong>
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-2xl w-full">
                <p>
                  <strong>Javascript + Typescript</strong>
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-2xl w-full">
                <p>
                  <strong>HTML + CSS (w/Tailwind, Bootstrap)</strong>
                </p>
              </div>
              <div className="p-4 bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm text-2xl w-full">
                <p>
                  <strong>C# (w/Unity)</strong>
                </p>
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
