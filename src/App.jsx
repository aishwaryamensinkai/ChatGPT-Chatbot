import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./css/App.css";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import logo from "./assets/logo.png";
import HelpPage from "./components/HelpPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/room/:id",
      element: <VideoPage />,
    },
    {
      path: "/help",
      element: <HelpPage />,
    },
  ]);

  return (
    <>
      <div>
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <h1>VCall</h1>
        </div>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:id" element={<VideoPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
