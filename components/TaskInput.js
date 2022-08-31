import React, { useState } from "react";

const TaskInput = ({ onTodoAdd }) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    onTodoAdd(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        name="addTodo"
        id="addTodo"
        value={input}
        placeholder="Add a new Task"
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded-lg border border-solid my-0 mx-2 min-w-[22rem] text-sm border-black"
      />
      <button
        onClick={addTodo}
        className="text-primary bg-primary p-2 border-none m-2 cursor-pointer rounded-[7.5px] text-sm"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TaskInput;
