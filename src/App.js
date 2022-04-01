import "./App.css";
import Home from "./pages/Home";
import EditorPage from "./pages/Editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/editor/:roomId" element={<EditorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
