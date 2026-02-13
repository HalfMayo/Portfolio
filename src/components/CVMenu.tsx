import { useImages } from "../context/ImagesContext";
import SectionElement from "./SectionElement";

export default function CVMenu({
  isActive,
  setIsActive,
}: {
  isActive: number;
  setIsActive: (i: number) => void;
}) {
  const { width } = useImages();
  return (
    <>
      {width <= 845 ? (
        <select
          value={isActive}
          onChange={(e) => setIsActive(Number(e.target.value))}
          className="text-center w-full p-3 diff-font text-2xl border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm hover:bg-surface-container focus:outline-none"
        >
          <option value="1">Work Experience</option>
          <option value="2">Tech Skills</option>
          <option value="3">Softwares/Tools</option>
          <option value="4">Education</option>
        </select>
      ) : (
        <div className="flex items-center justify-end gap-8 w-full">
          <SectionElement
            className={isActive === 1 ? "bg-tertiary-container" : "bg-white"}
            children={<p style={{userSelect: 'none', WebkitUserSelect: 'none'}}>Work Exp.</p>}
            onClick={() => setIsActive(1)}
            smallMenu={true}
          />
          <SectionElement
            className={isActive === 2 ? "bg-tertiary-container" : "bg-white"}
            children={<p style={{userSelect: 'none', WebkitUserSelect: 'none'}}>Tech Skills</p>}
            onClick={() => setIsActive(2)}
            smallMenu={true}
          />
          <SectionElement
            className={isActive === 3 ? "bg-tertiary-container" : "bg-white"}
            children={<p style={{userSelect: 'none', WebkitUserSelect: 'none'}}>Softwares/Tools</p>}
            onClick={() => setIsActive(3)}
            smallMenu={true}
          />
          <SectionElement
              className={isActive === 4 ? "bg-tertiary-container" : "bg-white"}
              children={<p style={{userSelect: 'none', WebkitUserSelect: 'none'}}>Education</p>}
              onClick={() => setIsActive(4)}
              smallMenu={true}
          />
        </div>
      )}
    </>
  );
}
