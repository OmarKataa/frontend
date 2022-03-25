//====================================================//Require
import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../../App";
import { io } from "socket.io-client";
//====================================================//Require
let socket = io.connect("http://localhost:5000");

const Chat = ({ setRoomId, toggle }) => {
  //====================================================//Require

  const { login, roomName } = useContext(UserContext);
  //====================================================//Require
  const [message, setMessage] = useState([]);
  const [first, setFirst] = useState("");
  const [join, setJoin] = useState("");
  const [name, setName] = useState("");
  //====================================================//Require
  //====================================================//Require

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("omar");
      console.log(data);
    });
  }, [socket]);

  const handler = async () => {
    // const res = await socket.on("connected");
    // console.log(res.id);
    // setFirst(`${res.id}+${login.userId}`);
    socket.emit("join_room", roomName);
  };

  const message_handler = () => {
    socket.emit(`message`, {
      room: roomName,
      message: "hello",
      name: `${login.firstName}-${login.lastName}`,
    });
  };

  const submit_handler = async (e) => {
    e.preventDefault();

    socket.emit("join_room", "setRoomId");
  };

  const recieve = async () => {};
  return (
    <div>
      Chat
      <button onClick={handler}>start</button>
      <button onClick={message_handler}>send</button>
      <button onClick={recieve}>recieve</button>
      <form onSubmit={submit_handler}>
        <input
          type="text"
          placeholder="join room"
          value={setRoomId}
          onChange={(e) => {
            setJoin(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Chat;
