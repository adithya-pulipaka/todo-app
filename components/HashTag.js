import React from "react";

const HashTag = ({ size, tagStyle, children }) => {
  const textSize = size ? `text-${size} ml-[1px]` : "text-sm mx-1";
  const outline =
    tagStyle === "outline" ? `text-accent` : `bg-accent text-white`;
  return (
    <span
      className={`${outline} rounded-md p-1 ${textSize}`}
    >{`#${children} `}</span>
  );
};

export default HashTag;
