import React from "react";
import styles from "./modal.module.css";
import Button from "../buttons/Button";
import Colors from "./Colors";

const Modal = () => {
  return (
    <div className={styles.box}>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2>Create New group</h2>
        </div>
        <div className={styles.input}>
          <h2>Group name</h2>
          <div className={styles.inputbox}>
            <input type="text" placeholder="Enter group name" />
          </div>
        </div>
        <div className={styles.colors}>
          <h2>Choose colour</h2>
          <Colors />
        </div>
        <div className={styles.create}>
          <button>create</button>
        </div>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};

export default Modal;
