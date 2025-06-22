import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import AddQueries from "../pages/AddQueries/AddQueries";
import MyQueries from "../pages/MyQueries/MyQueries";
import PrivateRoute from "./PrivateRoute";
import Queries from "../pages/Queries/Queries";
import QueryDetails from "../pages/QueryDetails/QueryDetails";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe/RecommendationsForMe";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/queries",
        Component: Queries,
      },
      {
        path: "/query-details/:id",
        Component: QueryDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
      {
        path: "/add-queries",
        element: (
          <PrivateRoute>
            <AddQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/recommend-for-me",
        element: <PrivateRoute><RecommendationsForMe/></PrivateRoute>
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);