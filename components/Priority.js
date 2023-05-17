import React, { useState, Fragment } from "react";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  CheckIcon,
  ChevronUpDownIcon,
  FlagIcon,
} from "@heroicons/react/20/solid";
import { FlagIcon as OutlineFlag } from "@heroicons/react/24/outline";

import { Listbox, Transition } from "@headlessui/react";
import Tooltip from "./Tooltip";

export const PRIORITIES = [
  { name: "Reset", class: " text-accent" },
  { name: "Low", class: " text-green-500" },
  { name: "Medium", class: " text-orange-400" },
  { name: "High", class: " text-red-600" },
];

const Priority = ({ onChange }) => {
  const [selectedPriority, setSelectedPriority] = useState(null);
  const updatePriority = (value) => {
    const updated = PRIORITIES.find((p) => p.name === value);
    if (updated.name === "Reset") {
      setSelectedPriority(null);
      onChange(null);
    } else {
      setSelectedPriority(updated);
      onChange(updated.name);
    }
  };
  return (
    <>
      <div className="z-10">
        <Tooltip
          content={selectedPriority ? selectedPriority.name : "Priority"}
        >
          <Listbox value={selectedPriority} onChange={updatePriority}>
            <div className="relative">
              <Listbox.Button
                className={`rounded-lg p-2 text-sm inline-flex ${
                  selectedPriority ? selectedPriority.class : "text-accent"
                }`}
              >
                {selectedPriority ? (
                  <FlagIcon className="h-5 w-5"></FlagIcon>
                ) : (
                  <OutlineFlag className="h-5 w-5"></OutlineFlag>
                )}
              </Listbox.Button>

              <Listbox.Options className="absolute  rounded-md bg-white py-1 shadow-lg focus:outline-none text-sm ">
                {PRIORITIES.map((priority) => (
                  <Listbox.Option
                    key={priority.name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={priority.name}
                  >
                    <>
                      <span
                        className={`inline-flex ${priority.class} items-center`}
                      >
                        <FlagIcon className="h-4 w-4"></FlagIcon>
                        <span className="ml-2 ">{priority.name}</span>
                      </span>
                    </>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </Tooltip>
      </div>
      {/* <div className="z-10">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button
              as="FlagIcon"
              className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div> */}
    </>
  );
};

export default Priority;
