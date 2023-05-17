import { useEffect, useReducer, useRef, useState } from "react";
import reducer, { TODO_OPS } from "../reducers/todo.reducer";
import { getTasks } from "../firebase/db";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

export default function Home() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [isNewTask, setIsNewTask] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getTasks();
      if (data) {
        dispatch({ type: TODO_OPS.INIT, payload: data });
      }
    })();
  }, []);

  return (
    <main className="text-center">
      <div className="w-[60%] mx-auto flex mt-8 justify-between items-center pr-4">
        <h3 className="pl-4">A Simple Todo App</h3>
        <div>
          {isNewTask && (
            <NewTask
              dispatch={dispatch}
              onClose={() => setIsNewTask(false)}
            ></NewTask>
          )}
          <button
            onClick={() => setIsNewTask(true)}
            className="bg-accent text-primary px-2 py-2 text-sm rounded-md"
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
