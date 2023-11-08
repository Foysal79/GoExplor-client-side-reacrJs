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
import PrivetRouter from "./PrivetRouter";
import PopularServices from "../LayOut/PopularServices/PopularServices";
import SinglePage from "../Pages/SinglePage/SinglePage";
import BookingData from "../Pages/BookingData/BookingData";
import ManageServicePage from "../Pages/ManageServicePage/ManageServicePage";


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
           path : '/popularDestination',
           element : <PopularServices></PopularServices>,
           loader : () => fetch("http://localhost:5000/allServices")
           
        },
        {
          path : '/allServices',
          element : <AllServices></AllServices>,
          loader : () => fetch('http://localhost:5000/allServices')
        },
        {
          path: '/bopkingData',
          element: <PrivetRouter><BookingData></BookingData></PrivetRouter>,
          // loader : ({params}) => fetch(`http://localhost:5000/booking/${params.email}`)

        },
        {
          path : '/singleService/:id',
          element : <PrivetRouter><SinglePage></SinglePage></PrivetRouter>,
          loader : ({params}) =>  fetch(`http://localhost:5000/allServices/${params.id}`),

        },
        {
          path: '/AddServices',
          element: <PrivetRouter><AddServices></AddServices></PrivetRouter>
        },
        {
          path: '/updateServices',
          element: <PrivetRouter><UpdateServices></UpdateServices></PrivetRouter>
        },
        {
          path : "/ManageServicePage",
          element: <PrivetRouter><ManageServicePage></ManageServicePage></PrivetRouter>
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