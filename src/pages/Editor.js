function Editor() {
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/logo1.png" alt="logo" />
          </div>
          <h3>Connected</h3>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap"></div>
    </div>
  );
}

export default Editor;
