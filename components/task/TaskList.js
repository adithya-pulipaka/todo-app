import React from "react";
import Button from "../core/Button";
import styles from "../../styles/task/TaskList.module.css";
import classnames from "classnames";

const TaskList = ({ items, onComplete, onDelete, onEdit }) => {
  const todoStatus = (todo) => {
    const headingClass = classnames(styles.heading, {
      [styles.completed]: todo.completed,
    });
    return headingClass;
  };

  return (
    <>
      {items.length == 0 ? (
        <p>No Tasks to show!</p>
      ) : (
        <div className={styles.taskList}>
          <h3>Tasks</h3>
          {items.map((todo) => {
            return (
              <div key={todo.id} className={styles.taskItem}>
                {}
                <p className={todoStatus(todo)}>{todo.name}</p>
                <div>
                  {!todo.completed && (
                    <Button primary onClick={() => onComplete(todo.id)}>
                      Mark as Completed
                    </Button>
                  )}
                  <Button danger onClick={() => onDelete(todo.id)}>
                    Delete
                  </Button>
                  <Button onClick={() => onEdit(todo.id)}>Edit</Button>
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
