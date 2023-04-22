import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { createTask } from "../firebase/db";
import { TODO_OPS } from "../reducers/todo.reducer";
import TWDatepicker from "./TWDatepicker";
import format from "date-fns/format";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NewTask = ({ onClose, dispatch }) => {
  const [taskDetails, setTaskDetails] = useState({ item: "", dueDate: null });
  const [isDueDateEnabled, setIsDueDateEnabled] = useState(false);

  const addTodo = async (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      const item = {
        name: taskDetails.item,
        completed: false,
        created: new Date().toISOString(),
        active: true,
        dueDate: taskDetails.dueDate,
      };
      const ref = await createTask(item);
      dispatch({ type: TODO_OPS.ADD, payload: { ...item, id: ref.id } });
      onClose();
    }
  };

  return (
    <>
      <Dialog open={true} onClose={() => onClose()}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
              <Dialog.Title
                as="div"
                className="text-xl font-bold flex justify-between"
              >
                <p>Add a new Task</p>
                <XMarkIcon
                  className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => onClose()}
                ></XMarkIcon>
              </Dialog.Title>
              <div className="mt-2 relative">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Quick Add and Enter"
                  className="w-full rounded-lg py-2 border border-gray-300 placeholder-gray-400 pl-4"
                  value={taskDetails.item}
                  onChange={(e) =>
                    setTaskDetails({ ...taskDetails, item: e.target.value })
                  }
                  onKeyDown={addTodo}
                />
                <div className="mt-2 inline-flex justify-between items-center">
                  {!isDueDateEnabled && (
                    <button
                      onClick={() => {
                        setIsDueDateEnabled(true);
                        setTaskDetails({
                          ...taskDetails,
                          dueDate: format(new Date(), "yyyy-MM-dd"),
                        });
                      }}
                      className="mt-2 ml-1 border bg-white p-1 rounded-lg text-sm border-[#424ac7] text-gray-600"
                    >
                      Add Date
                    </button>
                  )}
                  {isDueDateEnabled && (
                    <TWDatepicker
                      onCancel={() => setIsDueDateEnabled(false)}
                      onChange={(value) =>
                        setTaskDetails({
                          ...taskDetails,
                          dueDate: value.startDate,
                        })
                      }
                    ></TWDatepicker>
                  )}
                </div>
              </div>

              <div className="mt-2 relative ">
                <button
                  onClick={addTodo}
                  className="bg-accent text-primary px-2 py-2 text-sm rounded-md w-full"
                >
                  Add Task
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default NewTask;
