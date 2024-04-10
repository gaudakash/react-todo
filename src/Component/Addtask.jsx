import React from "react";
import styles from "./Addtask.module.css";
import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

const Addtask = ({ onNewList }) => {
  const newNameElement = useRef();
  const dueDateElement = useRef();

  const handelAddbtnclicked = () => {
    const newName = newNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    dueDateElement.current.value = "";
    newNameElement.current.value = "";
    onNewList(newName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className={`row ${styles["Tododom"]}`}>
        <div className="col">
          <input
            className={styles["input"]}
            type="text"
            placeholder="Enter task here"
            ref={newNameElement}
          />
        </div>
        <div className="col">
          <input ref={dueDateElement} className={styles["input"]} type="Date" />
        </div>
        <div className="col ">
          <button
            type="Submit"
            onClick={handelAddbtnclicked}
            className={`btn btn-success ${styles["todobtn"]}`}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addtask;
