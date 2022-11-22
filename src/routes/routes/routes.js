import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Coffees from "../../Pages/Coffees/Coffees";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "coffees", element: <Coffees /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
