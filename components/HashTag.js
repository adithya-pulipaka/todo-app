import React from "react";

const HashTag = ({ children }) => {
  return (
    <span className="bg-accent mx-1 rounded-md p-1 text-sm text-white">{`#${children} `}</span>
  );
};

export default HashTag;
