import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import AddQueries from "../pages/AddQueries/AddQueries";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: "/registration",
        Component: Registration
      },
      {
        path: "/add-queries",
        element: <AddQueries/>
      }
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
])