import { useEffect, useReducer, useRef } from "react";
import "../firebase/firebase_setup";
import reducer, { TODO_OPS } from "../reducers/todo.reducer";
import {
  createTask,
  deleteTask,
  getTasks,
  markAsCompleted,
} from "../firebase/db";

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

  const deleteTodo = async (id) => {
    await deleteTask(id);
    dispatch({ type: TODO_OPS.DELETE, payload: id });
  };

  const markCompleted = async (id) => {
    await markAsCompleted(id);
    dispatch({ type: TODO_OPS.COMPLETED, payload: id });
  };

  return (
    <div>
      <main>
        <h1>A Simple Todo App</h1>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Add a new todo item"
          ref={inputRef}
          onKeyDown={addTodo}
        />
        <button onClick={addTodo}>Add</button>
        <br />
        <div>
          {todos.length > 0 &&
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  {todo.completed ? (
                    <span>{todo.name}</span>
                  ) : (
                    <b>
                      <span>{todo.name}</span>
                    </b>
                  )}
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button onClick={() => markCompleted(todo.id)}>
                    Mark as Completed
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
