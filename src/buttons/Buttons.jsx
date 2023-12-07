import React from "react";
import styles from "./buttons.module.css";
import Button from "./Button";
import { IconButton } from "../styled";

const Buttons = () => {
  return (
    <div className={styles.box}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={styles.buttons}>
        <Button />
      </div>
      <div className={styles.create}>
        <IconButton $size="4rem" $bgColor="#16008B" >+</IconButton>
      </div>
    </div>
  );
};

export default Buttons;
