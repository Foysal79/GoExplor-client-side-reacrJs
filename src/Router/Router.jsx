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
import MySchedules from "../Pages/MySchedules/MySchedules";
import MyServices from "../Pages/MyServices/MyServices";


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
           loader : () => fetch("https://go-explor-server-site.vercel.app/allServices")
           
        },
        {
          path : '/allServices',
          element : <AllServices></AllServices>,
          loader : () => fetch('https://go-explor-server-site.vercel.app/allServices')
        },
        {
          path: '/bopkingData',
          element: <PrivetRouter><BookingData></BookingData></PrivetRouter>,
          // loader : ({params}) => fetch(`https://go-explor-server-site.vercel.app/booking/${params.email}`)

        },
        {
          path : '/singleService/:id',
          element : <PrivetRouter><SinglePage></SinglePage></PrivetRouter>,
          loader : ({params}) =>  fetch(`https://go-explor-server-site.vercel.app/allServices/${params.id}`),

        },
        {
          path: '/AddServices',
          element: <PrivetRouter><AddServices></AddServices></PrivetRouter>
        },
        {
          path: '/updateServices/:id',
          element: <PrivetRouter><UpdateServices></UpdateServices></PrivetRouter>,
          loader : ({params}) => fetch(`https://go-explor-server-site.vercel.app/allServices/${params.id}`),
        },
        {
          path : "/ManageServicePage",
          element: <PrivetRouter><ManageServicePage></ManageServicePage></PrivetRouter>
        },
        {
          path : "/mySchedules",
          element : <PrivetRouter><MySchedules></MySchedules></PrivetRouter>
        },
        {
          path : "/my-services",
          element : <PrivetRouter><MyServices></MyServices></PrivetRouter>
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