import React from "react";
import styles from "./buttons.module.css";
import { NavLink } from "react-router-dom";
import { Icon } from "../styled";

const Button = () => {
  return (
    <div>
      <NavLink
        to={"/chats/1"}
        className={({ isActive, isPending }) =>
          isPending ? styles.button : isActive ? styles.active : styles.button
        }
      >
        <Icon $bgColor="red">HE</Icon>
        <p>hello</p>
      </NavLink>
    </div>
  );
};

export default Button;
