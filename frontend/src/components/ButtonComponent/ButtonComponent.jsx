import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const ButtonComponent = ({
  listCourses,
  AddCart,
  link,
  address,
  underline,
  text,
  img,
  icon,
  textColor = "black",
  colorBoder = "first",
  colorBg,
  bold,
  padding = 4,
  hover,
  height = "h-10",
  fullScreen,
  width,
  colorHover,
  notHover,
  cursor,
  rounder,
  onClick,
  onMouseEnter,
  checked
}) => {
  const buttonClasses = classNames(
    "flex items-center justify-center border",
    fullScreen && "w-full",
    colorBg && `bg-${colorBg}`,
    cursor || "",
    width || "",
    bold && "font-bold",
    rounder && "rounded-full",
    `border-${colorBoder}`,
    `text-${textColor}`,
    `px-${padding}`,
    height,
    {
      "hover:bg-[#1739531f]": !notHover && !colorHover && hover,
      [`hover:bg-${colorHover}`]: colorHover,
      "hover:bg-[#3e4143]": !notHover && !colorHover && !hover,
    }
  );

  return (
    <button
      onClick={
        onClick ??
        (listCourses && AddCart ? () => AddCart(listCourses) : undefined)
      }
      onMouseEnter={
        typeof onMouseEnter === "function" ? onMouseEnter : undefined
      }
      className={buttonClasses}
      disabled={checked}
    >
      {icon && <>{icon}</>}
      {img && <img className="max-w-6" src={img} alt="" />}
      {text && <span className="tablet:text-base">{text}</span>}

      {link && (
        <Link
          className={classNames(
            underline ? "" : "underline",
            `decoration-1 underline-offset-4 font-bold text-eighth`,
            !notHover && "hover:text-sixth"
          )}
          to={address || ""}
        >
          {link}
        </Link>
      )}
    </button>
  );
};
