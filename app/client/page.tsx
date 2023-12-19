'use client'

import { handleClientScriptLoad } from "next/script";
import { ChangeEvent, useState } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const [message, setmessage] = useState<string>("")

  const socket = io("ws://localhost:8000");
/*  socket.on("hello", (arg) => {
    console.log(arg);
  });
*/
  const handleChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {    
    setmessage(event.target.value)
  }

  const enviarMensaje = () => {
    console.log(message)
  }

  return (
      <div className="flex flex-col w-1/3 h 1/2 space-y-4 p-3 border shadow-lg m-auto">
        <h1>Cliente</h1>
        <div>
          <h2>Mensajes</h2>
        </div>
        <input type="text" value={message} onChange={handleChangeMessage} placeholder="Type here" className="input input-bordered w-full max-w-lg" />
        <button className="btn btn-success" onClick={enviarMensaje}>Enviar</button>
      </div>
  );
};

export default Chat;
