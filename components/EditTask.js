import React, { useEffect, useRef, useState } from "react";
// import Button from "../core/Button";
// import Input from "../core/Input";
// import styles from "../../styles/task/EditTask.module.css";

const EditTask = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [completed, setCompleted] = useState(item.completed);
  const nameRef = useRef(null);

  useEffect(() => {
    setName(item.name);
    setCompleted(item.completed);
    nameRef.current.focus();
  }, [item]);

  const saveData = () => {
    const updated = { ...item, name: name, completed: completed };
    onSave(updated);
  };

  return (
    <>
      <div>
        <h2 className="text-secondary text-center">Edit Task</h2>
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-6 text-secondary">
            <label htmlFor="name">Task Info </label>
            <label htmlFor="completed">Completed</label>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <input
              type="text"
              name="name"
              id="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              className="p-2 my-0 mx-2 rounded-[7.5px] border border-solid border-black text-sm"
            />
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(!completed)}
              className="p-2 my-0 mx-2 rounded-[7.5px] border border-solid text-sm mr-auto mb-1"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="text-primary bg-blue-600 p-2 m-2 border-none cursor-pointer rounded-[7.5px] text-sm"
            onClick={saveData}
          >
            Save
          </button>
          <button
            className="text-primary bg-primary p-2 m-2 border-none cursor-pointer rounded-[7.5px] text-sm"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTask;
