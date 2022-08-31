import { useState } from "react";
import Head from "next/head";
import { v4 as uuid } from "uuid";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import EditTask from "../components/EditTask";

const list = [
  {
    id: uuid(),
    name: "Lorem ipsum dolor sit",
    completed: true,
    created: new Date(),
  },
  { id: uuid(), name: "test-2", completed: false, created: new Date() },
  { id: uuid(), name: "test-3", completed: true, created: new Date() },
  { id: uuid(), name: "test-4", completed: false, created: new Date() },
  { id: uuid(), name: "test-5", completed: false, created: new Date() },
];

export default function Home() {
  const [todos, setTodos] = useState(list);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (value) => {
    const todo = {
      name: value,
      completed: false,
      created: new Date().toISOString(),
    };
    setTodos([{ ...todo, id: uuid() }, ...todos]);
  };

  const markAsCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      })
    );
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setSelectedTodo(todo);
    setIsEditMode(true);
  };

  const saveTodo = (item) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return item;
        }
        return todo;
      })
    );
    setIsEditMode(false);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="mx-auto text-center h-[50vh] bg-accent flex flex-col justify-center items-center text-black">
          <h2 className="">A Simple Todo App</h2>
          <TaskInput onTodoAdd={addTodo}></TaskInput>
        </section>
        <div>
          <TaskList
            items={todos}
            onComplete={markAsCompleted}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>
        {isEditMode && (
          <>
            <EditTask
              item={selectedTodo}
              onSave={saveTodo}
              onCancel={() => setIsEditMode(false)}
            ></EditTask>
          </>
        )}
      </main>
    </div>
  );
}
