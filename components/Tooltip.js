import React from "react";

const Tooltip = ({ children, content }) => {
  return (
    <div className="group relative">
      <span
        className="hidden group-hover:absolute group-hover:bottom-8 
                  group-hover:block group-hover:bg-slate-700 group-hover:text-white group-hover:p-1 group-hover:px-2
                  group-hover:rounded-md group-hover:text-sm"
      >
        {content}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
