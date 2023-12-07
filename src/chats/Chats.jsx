import React from "react";
import styles from "./chats.module.css";
import { Icon, IconButton } from "../styled";
import Chat from "./Chat";
import { Link } from "react-router-dom";

const Chats = () => {
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <Link to={"/"}>
          <IconButton $bgColor="transparent">🠐</IconButton>
        </Link>
        <Icon className={styles.icon} $bgColor="blue">
          HE
        </Icon>
        <p>Hello</p>
      </div>
      <div className={styles.chats}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />

      </div>
      <div className={styles.input}>
        <textarea placeholder="Enter your text here..........."></textarea>
        <IconButton $size="3rem" $bgColor="transparent">
          ➤
        </IconButton>
      </div>
    </div>
  );
};

export default Chats;
