import React, { useEffect, useRef, useState } from "react";
import Button from "../core/Button";
import Input from "../core/Input";
import styles from "../../styles/task/EditTask.module.css";

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
        <h3>Edit Task</h3>
        <div className={styles.editTask}>
          <div className={styles.taskHeaders}>
            <label htmlFor="name">Task Info </label>
            <label htmlFor="completed">Completed</label>
          </div>
          <div className={styles.taskHeaders}>
            <Input
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />
            <Input
              type="checkbox"
              name="completed"
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(!completed)}
              className={styles.checkbox}
            />
            {/* <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.value)}
            /> */}
          </div>
        </div>

        {/* <div className={styles.rowItem}>
          <Input
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
        </div>
        <div className={styles.rowItem}>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.value)}
          />
        </div> */}
        <div>
          <Button secondary onClick={saveData}>
            Save
          </Button>
          <Button onClick={() => onCancel()}>Cancel</Button>
        </div>
      </div>
    </>
  );
};

export default EditTask;
