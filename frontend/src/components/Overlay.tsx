import { JSX } from "react";

type OverlayProps = {
  children: JSX.Element[];
  open: boolean;
};

function Overlay({ children, open }: OverlayProps) {
  return (
    <div
      className={
        open
          ? "relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:z-30 before:bg-slate-950/40"
          : ""
      }
    >
      {children}
    </div>
  );
}

export default Overlay;
