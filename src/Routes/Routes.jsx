import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import "swiper/css";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import Login from "../Pages/Form/Login/Login";
import SignUp from "../Pages/Form/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import DasCart from "../Dashboard/DasCart/DasCart";
import MangeItem from "../Dashboard/ManageItem/MangeItem";
import Contacts from "../Pages/Contacts/Contacts/Contacts";
import AllUsers from "../Dashboard/Admin/AllUsers/AllUsers";
import AddItems from "../Dashboard/Admin/AddItems/AddItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/dashboard",
       element: <DasCart /> },
      {
        path: "dashboard/manageItems",
        element: <MangeItem />,
      },
      {
        path: "dashboard/add",
        element: <AddItems />,
      },
      {
        path: "dashboard/users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
