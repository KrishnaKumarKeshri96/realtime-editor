import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");

  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const createNewRoom = () => {
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };
  const joinRoom = () => {
    if (roomId.trim().length !== 36) {
      toast.error("Invalid Room ID");

      return;
    }
    if (username.trim().length < 3) {
      toast.error("Valid Username is required");

      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <div className="imgWrapper">
          <img
            className="homePageLogo"
            src="/logo1.png"
            alt="code-editor-logo"
          />
          <h1>| Real-time Code Editor</h1>
        </div>

        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onKeyPress={handleInputEnter}
          />
          <input
            onKeyPress={handleInputEnter}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            className="inputBox"
            placeholder="USERNAME"
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <button onClick={createNewRoom} className="createNewBtn">
              new room
            </button>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with ????&nbsp; by &nbsp;
          <a href="https://github.com/KrishnaKumarKeshri96">Krishna Keshri</a>
        </h4>
      </footer>
    </div>
  );
}

export default Home;
