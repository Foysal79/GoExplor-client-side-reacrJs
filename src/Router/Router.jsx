import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import ErrorPage from "../Pages/Error/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path: '/',
          element : <Home></Home>
        }
      ]
    },
    {
      path: '/login',
      element: <SignIn></SignIn>
    }
  ])

export default router;