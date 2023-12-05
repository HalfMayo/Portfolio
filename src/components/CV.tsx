import { useState } from "react";
import BgImage from "./BgImage";
import SectionTitle from "./SectionTitle";
import SectionElement from "./SectionElement";
import SectionBox from "./SectionBox";
import BiggerSectionBox from "./BiggerSectionBox";
import CVMenu from "./CVMenu";

export default function Cv() {
  //845px
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <section id="cv">
      <BgImage src="../src/assets/images/clarence.png" />
      <BiggerSectionBox>
        <SectionBox>
          <SectionTitle
            title="What have I done?"
            subtitle="My journey so far."
          />
          <CVMenu isActive={isActive} setIsActive={setIsActive} />
          {isActive === 1 ? (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar pr-2">
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>
                      2020 - 2022: Freelance Concept Artist and Unity3D
                      Programmer
                    </strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>2018 - 2020: Museum consultant</strong> -
                    Municipality of San Giovanni in Persiceto (BO)
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>2017 - 2018: Civilian Service</strong> - Palazzo
                    Poggi Museum, Bologna
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>
                      2017 - 2018: Graphic designer and gallery assistant
                    </strong>{" "}
                    - MAGMA gallery, Bologna
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>2017 - 2018: Graphic designer</strong> - La
                    Comunicazione Diffusa, Bologna
                  </p>
                }
              />
              <div></div>
            </div>
          ) : isActive === 2 ? (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar pr-2">
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>2023: Frontend Developer course</strong> - tree
                    school
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>
                      2022 - 2023: HTML, CSS, Js and React modules
                    </strong>{" "}
                    - freecodecamp.com, Udemy
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>2021 - 2022: Unity course</strong> - GameDev.tv
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>2018 - 2020: Concept Art for Videogames</strong> -
                    International School of Comics, Padova
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>
                      2013 - 2016: Master's degree in Economics e Management of
                      Arts and Cultural Activities
                    </strong>{" "}
                    - Ca' Foscari University, Venezia
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>
                      2009 - 2013: Bachelor's degree in Comics and Illustration
                    </strong>{" "}
                    - Academy of Fine Arts, Bologna
                  </p>
                }
              />
              <div></div>
            </div>
          ) : isActive === 3 ? (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar pr-2">
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>React (w/Vite, w/Storybook)</strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                className="ml-8 bg-white"
                children={
                  <p>
                    <strong>React Query (w/Supabase), React Router</strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>JavaScript + TypeScript</strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>HTML + CSS (w/Tailwind, Bootstrap)</strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>C# (w/Unity)</strong>
                  </p>
                }
              />
              <div></div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 overflow-y-auto scrollbar pr-2">
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>Visual Studio Code, Git (w/GitHub)</strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>Trello, Figma, Miro</strong>
                  </p>
                }
              />
              <SectionElement
                bangers={false}
                children={
                  <p>
                    <strong>Photoshop, Blender, InDesign</strong>
                  </p>
                }
              />
              <div></div>
            </div>
          )}
        </SectionBox>
      </BiggerSectionBox>
    </section>
  );
}
