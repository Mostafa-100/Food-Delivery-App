import { ReactEventHandler } from "react";
import { IoCloseSharp } from "react-icons/io5";

function CloseButton({ onClick }: { onClick: ReactEventHandler }) {
  return (
    <button
      className="hover:bg-slate-100 p-1 rounded-full transition-colors"
      type="button"
      onClick={onClick}
    >
      <IoCloseSharp className="w-6 h-6" />
    </button>
  );
}

export default CloseButton;
