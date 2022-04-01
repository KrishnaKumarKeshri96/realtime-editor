import React from "react";

function Home() {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo1.png" alt="code-editor-logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <button className="createNewBtn">new room</button>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 &nbsp; by &nbsp;
          <a href="https://github.com/KrishnaKumarKeshri96">Krishna Keshri</a>
        </h4>
      </footer>
    </div>
  );
}

export default Home;
