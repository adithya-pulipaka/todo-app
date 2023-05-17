import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const HashTagInput = ({ onTagAdd, onClose }) => {
  const [tagValue, setTagValue] = useState("");
  const updateTagValue = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      onTagAdd(e.target.value);
      setTagValue("");
    }
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={tagValue}
        onChange={(e) => setTagValue(e.target.value)}
        onKeyDown={updateTagValue}
        placeholder="Add Tag and Enter"
        className="rounded-lg py-1 border border-gray-300 placeholder-gray-400 pl-4 font-light placeholder:text-xs"
      />
      <XMarkIcon
        className="w-5 h-5 hover:cursor-pointer -ml-6"
        onClick={() => onClose()}
      ></XMarkIcon>
    </div>
  );
};

export default HashTagInput;
