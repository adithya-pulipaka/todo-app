import React from "react";
import { deleteTask, markAsCompleted } from "../firebase/db";
import { TODO_OPS } from "../reducers/todo.reducer";
// import Button from "../core/Button";
// import styles from "../../styles/task/TaskList.module.css";
// import classnames from "classnames";
import { TrashIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import Tooltip from "./Tooltip";

const TaskList = ({ items, dispatch }) => {
  const onComplete = async (id) => {
    await markAsCompleted(id);
    dispatch({ type: TODO_OPS.COMPLETED, payload: id });
  };

  const onDelete = async (id) => {
    await deleteTask(id);
    dispatch({ type: TODO_OPS.DELETE, payload: id });
  };

  const todoStatus = (todo) => {
    return todo.completed ? "line-through" : "";
  };

  return (
    <>
      {items.length == 0 ? (
        <p className="text-accent font-bold text-center text-3xl my-4">
          All Tasks Completed! ✅
        </p>
      ) : (
        <div className="w-[60%] mx-auto mt-8 flex flex-col">
          {items.map((todo) => {
            return (
              <div
                key={todo.id}
                className="inline-flex justify-between items-center border-b border-b-solid border-b-[rgb(128,122,122)] m-4 gap-4"
              >
                <p className={`max-w-[60%] text-secondary ${todoStatus(todo)}`}>
                  {todo.name}
                </p>
                <div className="flex">
                  {!todo.completed && (
                    <Tooltip content="Complete">
                      <CheckBadgeIcon
                        className="w-5 h-5 mx-2 hover:text-green-600"
                        onClick={() => onComplete(todo.id)}
                      ></CheckBadgeIcon>
                    </Tooltip>

                    // <button
                    //   className="text-primary bg-accent p-2 border-none m-2 cursor-pointer rounded-[7.5px] text-sm"
                    //   onClick={() => onComplete(todo.id)}
                    // >
                    //   Mark as Completed
                    // </button>
                  )}
                  {/* <button
                    className="text-primary bg-red-600 p-2 m-2 border-none cursor-pointer rounded-[7.5px] text-sm"
                    onClick={() => onDelete(todo.id)}
                  >
                    Delete
                  </button> */}
                  <Tooltip content="Delete">
                    <TrashIcon
                      className="w-5 h-5 mx-2 hover:text-red-500 hover:content-['hello']"
                      onClick={() => onDelete(todo.id)}
                    ></TrashIcon>
                  </Tooltip>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TaskList;
