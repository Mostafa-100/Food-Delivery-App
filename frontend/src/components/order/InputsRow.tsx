import React from "react";

type InputsRowProps = {
  children: React.JSX.Element[];
};

function InputsRow({ children }: InputsRowProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-3">
      {children}
    </div>
  );
}

export default InputsRow;
