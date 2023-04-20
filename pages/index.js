import { useEffect, useReducer, useRef } from "react";
import "../firebase/firebase_setup";
import reducer, { TODO_OPS } from "../reducers/todo.reducer";
import {
  createTask,
  deleteTask,
  getTasks,
  markAsCompleted,
} from "../firebase/db";
import TaskList from "../components/TaskList";

export default function Home() {
  const [todos, dispatch] = useReducer(reducer, []);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    (async () => {
      const data = await getTasks();
      dispatch({ type: TODO_OPS.INIT, payload: data });
    })();
  }, []);

  const addTodo = async (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      const item = {
        name: inputRef.current.value,
        completed: false,
        created: new Date().toISOString(),
        active: true,
      };
      const ref = await createTask(item);
      dispatch({ type: TODO_OPS.ADD, payload: { ...item, id: ref.id } });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <main className="text-center">
      <div className="w-[60%] mx-auto flex mt-8 justify-between items-center pr-8">
        <h3 className="pl-4">A Simple Todo App</h3>
        <div>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Quick Add and Enter"
            className="border border-solid border-slate-400 rounded-lg pl-2 w-[15rem] mr-2 py-[2px]"
            ref={inputRef}
            onKeyDown={addTodo}
          />
          <button
            onClick={addTodo}
            className="bg-accent text-primary px-2 py-[2px] ml-2 rounded-lg"
          >
            Add Task
          </button>
        </div>
      </div>
      <div>
        <TaskList items={todos} dispatch={dispatch}></TaskList>
      </div>
    </main>
  );
}
