import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const TWDatepicker = ({ onChange, onCancel }) => {
  const [dueDateVal, setDueDateVal] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (updatedValue) => {
    if (updatedValue.startDate) {
      setDueDateVal(updatedValue);
      onChange(updatedValue);
    } else {
      onCancel();
    }
  };

  return (
    <>
      <Datepicker
        asSingle={true}
        useRange={false}
        value={dueDateVal}
        onChange={handleValueChange}
        containerClassName="relative text-gray-700 w-auto"
        inputClassName="border border-gray-300 rounded-lg pl-4 py-1 font-light w-[75%]"
        toggleClassName="absolute h-full pl-3 text-gray-400 right-12"
      />
    </>
  );
};

export default TWDatepicker;
