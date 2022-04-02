import { useState } from "react";
import Client from "../components/Client.jsx";
import EditorC from "../components/Editor";

function Editor() {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Krishna K" },
    { socketId: 2, username: "Kumar K" },
    { socketId: 1, username: "Krishna K" },
    { socketId: 2, username: "Kumar K" },
    { socketId: 1, username: "Krishna K" },
    { socketId: 2, username: "Kumar K" },
    { socketId: 1, username: "Krishna K" },
    { socketId: 2, username: "Kumar K" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/logo1.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map(({ username }, i) => (
              <Client key={i} username={username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <EditorC />
      </div>
    </div>
  );
}

export default Editor;
