import React from "react";

const Tooltip = ({ children, content }) => {
  return (
    <span className="group relative">
      <span
        className="hidden group-hover:absolute group-hover:bottom-8 
                  group-hover:block group-hover:bg-slate-700 group-hover:text-white group-hover:p-1 group-hover:px-2
                  group-hover:rounded-md group-hover:text-sm min-w-max group-hover:-left-[50%] "
      >
        {content}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
