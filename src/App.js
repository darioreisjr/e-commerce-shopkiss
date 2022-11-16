import "./App.css";

import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";

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
