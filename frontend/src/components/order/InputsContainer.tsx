import React from "react";

type InputsContainerProps = {
  children: React.JSX.Element[];
};

function InputsContainer({ children }: InputsContainerProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-3">
      {children}
    </div>
  );
}

export default InputsContainer;
