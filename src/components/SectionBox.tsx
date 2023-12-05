import { useImages } from "../context/ImagesContext";
import { ChildrenProps } from "../interfaces/ChildrenProps";

interface SectionBox extends ChildrenProps {
  boxHeight?: "screen" | "3/4";
  justify?: "start" | "center";
  contacts?: boolean;
}

export default function SectionBox({
  children,
  boxHeight = "3/4",
  justify = "start",
  contacts = false,
}: SectionBox) {
  const { visible, width, height } = useImages();

  return (
    <div
      className={`transition-all ${
        !visible ? "opacity-100 duration-500" : "opacity-0 duration-200"
      } lg:left-[75%] lg:translate-x-[-75%] w-[80vw] min-[1192px]:w-4/6 min-[1579px]:w-1/2 min-[2000px]:w-2/5 pr-2 pb-2 ${
        boxHeight === "3/4" ? "h-[75%]" : "h-screen"
      } ${
        justify === "start" || (width < 540 && !contacts)
          ? "justify-start"
          : "justify-center"
      } ${
        width >= 640 && width < 800 && height < 1066
          ? "h-screen justify-center"
          : ""
      }
            absolute flex flex-col items-center gap-4 overflow-y-auto overflow-x-hidden scrollbar`}
    >
      {children}
    </div>
  );
}
