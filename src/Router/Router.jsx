import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
          path: '/',
          element : <Home></Home>
        }
      ]
    },
  ])

export default router;