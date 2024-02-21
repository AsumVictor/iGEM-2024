import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TODO } from "../types";

type ButtonType = "button" | "submit";
type ButtonSize = "small" | "medium" | "large";

function Button({
  type,
  title,
  color = "bg-primary_blue",
  textColor = "text-white",
  textLabel = "Text Label",
  size = "small",
  icon,
  action,
}: {
  type: ButtonType;
  color?: string;
  textColor?: string;
  textLabel: string;
  size: ButtonSize;
  icon?: JSX.Element;
  action?: TODO;
  title: string;
}) {
  const buttonSize: {
    small: string;
    medium: string;
    large: string;
  } = {
    small: "text-[14px] ",
    medium: "text-[16px] ",
    large: "text-[18px] ",
  };

  return (
    <button
      type={type}
      title={title}
      className={`${buttonSize[size]}  gap-3 flex flex-row py-2 px-4 text-center  ${color} ${textColor} text-white`}
    >
      <span>{textLabel}</span>
      <MdOutlineArrowOutward />
    </button>
  );
}

export default Button;
