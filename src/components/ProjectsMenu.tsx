import { useImages } from "../context/ImagesContext";
import SectionElement from "./SectionElement";

export default function ProjectsMenu({
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
          <option value="1">Professional Projects</option>
          <option value="2">Personal Projects</option>
        </select>
      ) : (
        <div className="flex items-center justify-end gap-8 w-full">
          <SectionElement
            className={isActive === 1 ? "bg-tertiary-container" : "bg-white"}
            children={<p style={{userSelect: 'none', WebkitUserSelect: 'none'}}>Professional Projects</p>}
            onClick={() => setIsActive(1)}
            smallMenu={true}
          />
          <SectionElement
            className={isActive === 2 ? "bg-tertiary-container" : "bg-white"}
            children={<p style={{userSelect: 'none', WebkitUserSelect: 'none'}}>Personal Projects</p>}
            onClick={() => setIsActive(2)}
            smallMenu={true}
          />
        </div>
      )}
    </>
  );
}
