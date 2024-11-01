import React from "react";

type ButtonProps = {
  type: "primary-quiz" | "icon-quiz" | "primary-start" | "primary-main";
  onClick: () => void;
  label: string | JSX.Element;
  className?: string;
};

const Button = ({ type, onClick, label, className }: ButtonProps) => {
  return (
    <>
      {type === "primary-quiz" ? (
        <button
          onClick={onClick}
          className={`bg-light-ocean-purple hover:bg-ocean-purple transition-colors text-white px-12 font-semibold py-4 rounded-lg border-b-2 border-[#4923B0] ${className}`}
        >
          {label}
        </button>
      ) : type === "icon-quiz" ? (
        <button
          onClick={onClick}
          className={`bg-white p-4 border-2 border-b-4 border-gray-200 aspect-square rounded-lg hover:bg-violet-50 transition-colors ${className}`}
        >
          <div className="w-4">{label}</div>
        </button>
      ) : type === "primary-start" ? (
        <button
          onClick={onClick}
          className={`bg-blueish-purple text-white xl:text-sm font-manrope rounded-full py-3 px-6 font-semibold border-b-2 border-[#4940ae] ${className}`}
        >
          {label}
        </button>
      ) : type === "primary-main" ? (
        <button
          onClick={onClick}
          className={`bg-blueish-purple text-white xl:text-sm font-manrope rounded-full py-3 px-9 font-semibold border-b-2 border-[#4940ae] ${className}`}
        >
          {label}
        </button>
      ) : null}
    </>
  );
};

export default Button;
