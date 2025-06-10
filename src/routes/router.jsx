import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/registration",
        Component: Registration
      }
    ]
  }
])