import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import HeroSlider from "../components/HeroSlider/HeroSlider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HeroSlider
      },
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