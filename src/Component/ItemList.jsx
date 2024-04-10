import React from "react";
import styles from "./ItemList.module.css";
import { CiCircleRemove } from "react-icons/ci";
const ItemList = ({ Name, dueDate, deletebtn }) => {
  return (
    <div className="container text-center">
      <div className={`row ${styles.row}`}>
        <div className="col">{Name}</div>
        <div className="col">{dueDate}</div>
        <div className="col ">
          <button
            type="button"
            className={`btn btn-danger ${styles.todobtn}`}
            onClick={() => deletebtn(Name)}
          >
            <CiCircleRemove />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
