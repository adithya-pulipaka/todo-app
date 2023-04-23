import React from "react";
import { deleteTask, markAsCompleted } from "../firebase/db";
import { TODO_OPS } from "../reducers/todo.reducer";
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
                <div className="text-left">
                  <p className={` ${todoStatus(todo)}`}>{todo.name}</p>
                  {todo.dueDate && (
                    <p className="text-secondary text-xs">
                      Due: {todo.dueDate}
                    </p>
                  )}
                </div>
                <div className="flex">
                  {!todo.completed && (
                    <Tooltip content="Complete">
                      <CheckBadgeIcon
                        className="w-5 h-5 mx-2 hover:text-green-600"
                        onClick={() => onComplete(todo.id)}
                      ></CheckBadgeIcon>
                    </Tooltip>
                  )}
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
