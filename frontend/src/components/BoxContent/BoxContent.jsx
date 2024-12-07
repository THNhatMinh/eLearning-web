import React, { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const BoxContent = ({
  fontText,
  h1,
  p,
  center,
  textBn,
  bgBn,
  colorTextBn,
  sizeH1,
  li,
  img,
  heightBn,
  bgBox,
  shadow,
  onClick, // Accept onClick prop
}) => {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (boxRef.current) {
        setWidth(boxRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`${bgBox ? bgBox : "bg-white"} ${
        li ? "p-0" : width ? "p-6" : "p-4"
      } flex-col ${center ? "text-center" : ""} justify-between max-w-[440px] ${
        fontText ? fontText : ""
      } ${shadow ? shadow : "shadow-lg"} tablet:max-w-none`}
    >
      {img && (
        <div className="flex tablet:justify-center">
          <img src={img} className="max-w-48" alt="" />
        </div>
      )}
      {h1 && (
        <h1
          className={`${width ? "font-times" : "font-sans"} mb-2 ${
            sizeH1 ? `text-[${sizeH1}px]` : ""
          } tablet:text-center`}
        >
          {h1}
        </h1>
      )}
      <ul>
        {li &&
          li.length > 0 &&
          li.map((data, index) => (
            <li
              key={`liContent-${index}`}
              className="ml-5 list-disc text-[19px]"
            >
              {data}
            </li>
          ))}
      </ul>
      <p>{p}</p>
      <ButtonComponent
        width={"w-80"}
        padding={3}
        text={textBn}
        bold={true}
        textColor={"white"}
        colorBg={"first"}
        onClick={onClick} // Pass onClick to ButtonComponent
      />
    </div>
  );
};
