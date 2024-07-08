import "../css/HelpPage.css";

const HelpPage = () => {
  return (
    <div className="help-container">
      <div className="content">
        <h1 style={{ textAlign: "center" }}>Need Help?</h1>
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
          If you have any questions or need assistance with our video call app,
          feel free to reach out to our support team. You can find help in the
          following ways:
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
    </div>
  );
};

export default HelpPage;
