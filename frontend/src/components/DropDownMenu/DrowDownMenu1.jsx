import React from "react";
import { Link } from "react-router-dom";

export const DrowDownMenu1 = ({ categories, handleClick, id }) => {
  const filteredCategories = id
    ? categories.filter((category) => category.categoryId === id)
    : categories;
  return (
    <div
      className={`bg-white w-[260px] border border-[#d1d7dc] ${
        filteredCategories?.length > 0 ? "block" : "hidden"
      }`}
    >
      <ul className="py-2">
        {filteredCategories?.length > 0 &&
          filteredCategories?.map((data, index) => {
            return (
              <li
                key={`categories-${index}`}
                onClick={() => handleClick({ id: data.id, level: 1 })}
                className="flex justify-between px-4 py-2 cursor-pointer"
              >
                <Link className="hover:text-eighth">{data?.name}</Link>
                <svg
                  fill="#2d2f31"
                  height="10px"
                  width="10px"
                  version="1.1"
                  viewBox="0 0 24 24"
                  stroke="#2d2f31"
                >
                  <g>
                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
                  </g>
                </svg>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
