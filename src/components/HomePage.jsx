import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";

const helpContent = (
  <div className="content">
    <ul>
      <li>
        <h3>
          <b>For video call instructions:</b>
        </h3>
        <ul>
          <li>
            1. <strong>To join a call:</strong> Go to the{" "}
            <a href="/">Home Page</a>, enter your name, and click Join.
          </li>
          <li>
            2. <strong>During the call:</strong> Use the controls provided by
            the video call interface.
          </li>
          <li>
            3. <strong>For additional assistance:</strong> Visit the{" "}
            <a
              href="https://console.zegocloud.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zegocloud dashboard
            </a>{" "}
            for more detailed settings and management options.
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <p style={{ textAlign: "center" }}>
      If you have any questions or need assistance with our video call app, feel
      free to reach out to our support team. You can find help in the following
      ways:
    </p>
    <ul style={{ textAlign: "center" }}>
      <li>
        Contact us directly via email at{" "}
        <a href="mailto:aishwaryamensinkai@gmail.com">
          aishwaryamensinkai@gmail.com
        </a>
        .
      </li>
    </ul>
  </div>
);

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
    <>
      <div className="home-container">
        <div className="content">
          <h1 style={{ textAlign: "center" }}>
            Welcome to Your Video Call App
          </h1>
          <p className="subtitle">
            Join a video call session by entering your name below. Get started
            in just a few clicks!
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
            Need help? Read instructions below
          </p>
        </div>
      </div>
      {helpContent}
    </>
  );
};

export default HomePage;
