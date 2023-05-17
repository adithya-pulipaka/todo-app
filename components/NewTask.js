import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { createTask } from "../firebase/db";
import { TODO_OPS } from "../reducers/todo.reducer";
import TWDatepicker from "./TWDatepicker";
import format from "date-fns/format";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CalendarIcon, HashtagIcon } from "@heroicons/react/24/outline";
import Priority from "./Priority";
import Tooltip from "./Tooltip";
import HashTagInput from "./HashTagInput";
import HashTag from "./HashTag";

const NewTask = ({ onClose, dispatch }) => {
  const [taskDetails, setTaskDetails] = useState({
    item: "",
    dueDate: null,
    priority: null,
    tags: [],
  });
  const [isDueDateEnabled, setIsDueDateEnabled] = useState(false);
  const [isHashTagEnabled, setIsHashTagEnabled] = useState(false);
  const [isDueTimeEnabled, setIsDueTimeEnabled] = useState(false);
  console.log(taskDetails);

  const addTodo = async (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      const item = {
        name: taskDetails.item,
        completed: false,
        created: new Date().toISOString(),
        active: true,
        dueDate: taskDetails.dueDate,
        priority: taskDetails.priority,
        tags: taskDetails.tags,
      };
      console.log(item);
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
                  className="w-full rounded-lg py-2 border border-gray-300 placeholder-gray-400 pl-4 font-light"
                  value={taskDetails.item}
                  onChange={(e) =>
                    setTaskDetails({ ...taskDetails, item: e.target.value })
                  }
                  onKeyDown={addTodo}
                />
                <div className="mt-2 flex items-center justify-start">
                  <Priority
                    onChange={(value) =>
                      setTaskDetails({ ...taskDetails, priority: value })
                    }
                  ></Priority>
                  {!isDueDateEnabled && (
                    <>
                      <Tooltip content="Due Date">
                        <CalendarIcon
                          className="h-5 w-5 text-accent mr-2"
                          onClick={() => {
                            setIsDueDateEnabled(true);
                            setTaskDetails({
                              ...taskDetails,
                              dueDate: format(new Date(), "yyyy-MM-dd"),
                            });
                          }}
                        ></CalendarIcon>
                      </Tooltip>
                    </>
                  )}
                  {isDueDateEnabled && (
                    <>
                      <TWDatepicker
                        onCancel={() => {
                          setIsDueDateEnabled(false);
                          setTaskDetails({ ...taskDetails, dueDate: null });
                        }}
                        onChange={(value) =>
                          setTaskDetails({
                            ...taskDetails,
                            dueDate: value.startDate,
                          })
                        }
                      ></TWDatepicker>
                    </>
                  )}
                  {!isHashTagEnabled && (
                    <>
                      <Tooltip content="Tags">
                        <HashtagIcon
                          className="h-5 w-5 text-accent"
                          onClick={() => {
                            setIsHashTagEnabled(true);
                          }}
                        ></HashtagIcon>
                      </Tooltip>
                    </>
                  )}
                  {isHashTagEnabled && (
                    <>
                      <HashTagInput
                        onClose={() => {
                          setIsHashTagEnabled(false);
                        }}
                        onTagAdd={(value) =>
                          setTaskDetails({
                            ...taskDetails,
                            tags: [...taskDetails.tags, value],
                          })
                        }
                      ></HashTagInput>
                    </>
                  )}
                </div>
                <div className="font-light mt-2">
                  Tags:{" "}
                  {taskDetails.tags.length > 0 && (
                    <>
                      {taskDetails.tags.map((tag, index) => {
                        return <HashTag key={index}>{tag}</HashTag>;
                      })}
                    </>
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
