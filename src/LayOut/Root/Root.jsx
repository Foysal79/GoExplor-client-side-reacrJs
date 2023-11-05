import { Outlet } from "react-router-dom";
import Navbar from "../../Share/Navbar/Navbar";
import Footer from "../Footer/Footer";



const Root = () => {
    return (
        <div className="font-Poppins" >
            <Navbar></Navbar>
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;