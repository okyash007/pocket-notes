import React from "react";
import styles from "./buttons.module.css";
import { NavLink } from "react-router-dom";
import { Icon } from "../styled";

const Button = ({ id, name, color }) => {
  return (
    <div>
      <NavLink
        to={"/chats/" + id}
        className={({ isActive, isPending }) =>
          isPending ? styles.button : isActive ? styles.active : styles.button
        }
      >
        <Icon $bgColor={color}>HE</Icon>
        <p>{name}</p>
      </NavLink>
    </div>
  );
};

export default Button;
