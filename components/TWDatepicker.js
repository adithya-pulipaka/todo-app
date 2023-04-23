import React, { useEffect, useState } from "react";
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
    <div>
      <Datepicker
        asSingle={true}
        useRange={false}
        value={dueDateVal}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default TWDatepicker;
