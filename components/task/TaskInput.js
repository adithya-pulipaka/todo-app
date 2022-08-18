import React, { useState } from "react";
import Button from "../core/Button";
import Input from "../core/Input";

const TaskInput = ({ onTodoAdd }) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    onTodoAdd(input);
    setInput("");
  };
  return (
    <div>
      <Input
        name="addTodo"
        id="addTodo"
        value={input}
        placeholder="Add a new Task"
        onChange={(e) => setInput(e.target.value)}
        minWidth="22rem"
      ></Input>
      <Button onClick={addTodo}>Add Todo</Button>
    </div>
  );
};

export default TaskInput;
