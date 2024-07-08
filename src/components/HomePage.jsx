import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (input.trim() !== "") {
      navigate(`/room/${input}`);
    } else {
      alert("Please enter a valid name.");
    }
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 style={{ textAlign: "center" }}>Welcome to Your Video Call App</h1>
        <p className="subtitle">
          Join a video call session by entering your name below. Get started in
          just a few clicks!
        </p>
        <div className="form-container" style={{ textAlign: "center" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            className="input-field"
          />
          <button onClick={submitHandler} className="join-button">
            Join
          </button>
        </div>
        <p className="info" style={{ textAlign: "center" }}>
          Need help? <a href="/help">Get support here</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
