import React from "react";
import styles from "./chat.module.css";

const Chat = ({ text, time, date }) => {
  return (
    <div className={styles.box}>
      <p>{text}</p>
      <h4>{date + " " + time}</h4>
    </div>
  );
};

export default Chat;
