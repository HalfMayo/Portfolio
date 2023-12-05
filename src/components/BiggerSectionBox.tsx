import { ChildrenProps } from "../interfaces/ChildrenProps";

export default function BiggerSectionBox({ children }: ChildrenProps) {
  return (
    <div className="h-screen flex items-center lg:justify-start justify-center relative z-10">
      {children}
    </div>
  );
}
