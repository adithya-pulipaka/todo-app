import React from "react";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Timepicker = () => {
  return (
    <div className="border border-gray-300 mx-2 rounded-lg inline-flex pr-1 items-center">
      <select
        name="dueTime"
        id="dueTime"
        className="border-gray-300 ml-2 text-md border-none no-outline px-0 !pr-2 !bg-none"
        value={"02"}
      >
        <option value="01">01</option>
        <option value="02">02</option>
      </select>
      <span className="inline-flex items-center">:</span>
      <select
        name="dueTime1"
        id="dueTime"
        className="border-gray-300 ml-2 text-md border-none no-outline px-0 !pr-2 !bg-none"
      >
        <option value="01">01</option>
        <option value="02">02</option>
      </select>
      <span className="inline-flex items-center">:</span>
      <select
        name="dueTime1"
        id="dueTime"
        className="border-gray-300 ml-2 text-md border-none no-outline pl-0 !pr-3 !bg-none"
      >
        <option value="01">AM</option>
        <option value="02">PM</option>
      </select>
      <XMarkIcon className="w-4 h-4 -ml-1"></XMarkIcon>
    </div>
  );
};

export default Timepicker;
