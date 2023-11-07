import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import ErrorPage from "../Pages/Error/ErrorPage";
import SignUp from "../signUp/signUp";
import AllServices from "../Pages/AllServices/AllServices";
import AddServices from "../Pages/AddServices/AddServices";
import UpdateServices from "../Pages/UpdateServices/UpdateServices";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path : '/allServices',
          element : <AllServices></AllServices>
        },
        {
          path: '/AddServices',
          element: <AddServices></AddServices>
        },
        {
          path: '/updateServices',
          element: <UpdateServices></UpdateServices>
        }
      ]
    },
    {
      path: '/login',
      element: <SignIn></SignIn>
    },
    {
      path: '/registration',
      element : <SignUp></SignUp>
    }
  ])

export default router;