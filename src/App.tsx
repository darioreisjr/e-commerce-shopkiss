import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro/index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export { router };
