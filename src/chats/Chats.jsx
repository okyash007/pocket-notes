import React, { useEffect, useRef } from "react";
import styles from "./chats.module.css";
import { Icon, IconButton } from "../styled";
import Chat from "./Chat";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "../store/appSlice";
import { getCurrentDateTime, trimString } from "../help";

const Chats = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const input = useRef(null);

  const store = useSelector((store) => store.app);
  const chatDetails = store.chats[params.id];

  console.log(chatDetails);

  if (!chatDetails) {
    return null;
  }

  function addText(note) {
    const newNotes = [...chatDetails.notes, note];
    const obj = {
      ...store.chats,
      [params.id]: {
        name: chatDetails.name,
        color: chatDetails.color,
        notes: newNotes,
      },
    };
    dispatch(addChats(obj));
  }

  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <Link to={"/"}>
          <IconButton $bgColor="transparent">🠐</IconButton>
        </Link>
        <Icon className={styles.icon} $bgColor={chatDetails.color}>
          HE
        </Icon>
        <p>{chatDetails.name}</p>
      </div>
      <div className={styles.chats}>
        {chatDetails.notes.map((m,i) => (
          <Chat
            text={m.text}
            date={m.time.date}
            time={m.time.time}
            key={i}
          />
        ))}
      </div>
      <div className={styles.input}>
        <textarea
          ref={input}
          placeholder="Enter your text here..........."
        ></textarea>
        <IconButton
          onClick={() => {
            if (trimString(input.current.value)) {
              addText({
                text: trimString(input.current.value),
                time: getCurrentDateTime(),
              });
            }
          }}
          $size="3rem"
          $bgColor="transparent"
        >
          ➤
        </IconButton>
      </div>
    </div>
  );
};

export default Chats;
