import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: "/registration",
        Component: Registration
      }
    ]
  }
])