import "./App.css";
import Home from "./pages/Home";
import EditorPage from "./pages/Editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 5000,
          },
          style: {
            background: "#282a36",
            color: "#eee",
          },
        }}
      ></Toaster>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
