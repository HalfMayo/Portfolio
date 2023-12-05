import { useState } from "react";
import AltImageProps from "../interfaces/AltImageProps";

export default function Grid({ elements }: { elements: AltImageProps[] }) {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <ul className="w-full grid grid-cols-2 gap-4 overflow-y-auto scrollbar pr-2">
      {elements.map((el, i) => (
        <li
          key={i}
          className={`relative bg-white text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm diff-font text-center ${
            i === elements.length - 1 ? "col-start-2" : ""
          }`}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <a href={el.link} target="_blank" rel="noreferrer">
            {hover === i && (
              <div className="flex flex-col items-center justify-center w-full h-full bg-tertiary-container/75 p-8 gap-4 absolute">
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
  );
}
