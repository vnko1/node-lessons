import { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

import "./App.css";
import { on } from "events";

const socket = io.connect("http://localhost:3001");

function App() {
  const [nickName, setNickName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat-message", (message) => {
      setMessages((state) => {
        const newMessage = { id: nanoid(), type: "user", message };
        return [newMessage, ...state];
      });
    });
  }, []);

  const addNickName = useCallback(({ name }) => setNickName(name), []);

  const addMessage = useCallback(({ message }) => {
    setMessages((state) => {
      const newMessage = { id: nanoid(), type: "you", message };
      return [newMessage, ...state];
    });

    socket.emit("chat-message", message);
  }, []);

  return (
    <div className="App">
      {!nickName && <SigninChatForm onSubmit={addNickName} />}
      {nickName && <ChatForm onSubmit={addMessage} />}
      {nickName && <Chat items={messages} />}
    </div>
  );
}

export default App;
