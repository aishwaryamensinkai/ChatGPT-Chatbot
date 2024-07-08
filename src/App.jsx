import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div>
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <h1>VCall</h1>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
