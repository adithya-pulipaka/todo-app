import React from "react";
// import Button from "../core/Button";
// import styles from "../../styles/task/TaskList.module.css";
// import classnames from "classnames";

const TaskList = ({ items, onComplete, onDelete, onEdit }) => {
  const todoStatus = (todo) => {
    return todo.completed ? "line-through" : "";
  };

  return (
    <>
      {items.length == 0 ? (
        <p className="text-red-600 font-bold text-center text-3xl my-4">
          No Tasks Pending!
        </p>
      ) : (
        <div className="flex flex-col">
          <h2 className="text-secondary text-center">Tasks</h2>
          {items.map((todo) => {
            return (
              <div
                key={todo.id}
                className="inline-flex justify-between items-center border-b border-b-solid border-b-[rgb(128,122,122)] m-4 gap-4"
              >
                <p className={`max-w-[60%] text-secondary ${todoStatus(todo)}`}>
                  {todo.name}
                </p>
                <div>
                  {!todo.completed && (
                    <button
                      className="text-primary bg-accent p-2 border-none m-2 cursor-pointer rounded-[7.5px] text-sm"
                      onClick={() => onComplete(todo.id)}
                    >
                      Mark as Completed
                    </button>
                  )}
                  <button
                    className="text-primary bg-red-600 p-2 m-2 border-none cursor-pointer rounded-[7.5px] text-sm"
                    onClick={() => onDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-primary bg-primary p-2 m-2 border-none cursor-pointer rounded-[7.5px] text-sm"
                    onClick={() => onEdit(todo.id)}
                  >
                    Edit
                  </button>
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
