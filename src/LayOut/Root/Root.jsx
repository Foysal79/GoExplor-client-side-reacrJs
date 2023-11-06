import { Outlet } from "react-router-dom";
import Navbar from "../../Share/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div className="font-Poppins" >
            <Navbar></Navbar>
            <Outlet></Outlet>
             <Footer></Footer>
             <Toaster/>
        </div>
    );
};

export default Root;