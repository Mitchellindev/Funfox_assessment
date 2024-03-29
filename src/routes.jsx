import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import "./assets/styles/main.css";
import "./assets/styles/variables.css";
import FirstSlide from "./components/FirstSlide/FirstSlide.jsx";
import SecondSlide from "./components/SecondSlide/SecondSlide.jsx";
import Layout from "./layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "slide1", element: <FirstSlide /> },
      { path: "slide2", element: <SecondSlide /> },
    ],
  },
]);

export default router;
