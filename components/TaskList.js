import React from "react";
import { deleteTask, markAsCompleted } from "../firebase/db";
import { TODO_OPS } from "../reducers/todo.reducer";
import { TrashIcon, CheckBadgeIcon, FlagIcon } from "@heroicons/react/24/solid";
import Tooltip from "./Tooltip";
import { PRIORITIES } from "./Priority";

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

  const getPriorityClass = (priority) => {
    return PRIORITIES.find((p) => p.name === priority).class;
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
                <div className="flex items-center">
                  {todo.priority && (
                    <Tooltip content={todo.priority}>
                      <FlagIcon
                        className={`w-4 h-4 mx-1 ${getPriorityClass(
                          todo.priority
                        )}`}
                      ></FlagIcon>
                    </Tooltip>
                  )}
                  {!todo.completed && (
                    <Tooltip content="Complete">
                      <CheckBadgeIcon
                        className="w-5 h-5 mx-1 hover:text-green-600"
                        onClick={() => onComplete(todo.id)}
                      ></CheckBadgeIcon>
                    </Tooltip>
                  )}
                  <Tooltip content="Delete">
                    <TrashIcon
                      className="w-5 h-5 mx-1 hover:text-red-500"
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
