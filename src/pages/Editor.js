import { useState, useEffect, useRef } from "react";
import Client from "../components/Client.jsx";
import EditorC from "../components/Editor";

import { initSocket } from "../socket";
import toast from "react-hot-toast";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import ACTIONS from "../Actions";

function Editor() {
  const socketRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
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

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.");
        reactNavigator("/");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });
    };
    init();
  }, []);
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
