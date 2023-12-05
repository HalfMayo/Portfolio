import { ChildrenProps } from "../interfaces/ChildrenProps";

interface SectionElement extends ChildrenProps {
  onClick?: () => void;
  bangers?: boolean;
  className?: string;
  smallMenu?: boolean;
}

export default function SectionElement({
  children,
  onClick,
  bangers = true,
  className,
  smallMenu = false,
}: SectionElement) {
  return (
    <div
      className={`${className ? className : "bg-white"} ${
        smallMenu && bangers
          ? "diff-font text-2xl min-[977px]:text-3xl cursor-pointer hover:bg-surface-container"
          : bangers
          ? "diff-font text-3xl cursor-pointer hover:bg-surface-container"
          : "text-md sm:text-xl"
      } p-4 text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] rounded-sm`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
