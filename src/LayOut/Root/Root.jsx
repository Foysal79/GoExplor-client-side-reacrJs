import { Outlet } from "react-router-dom";
import Navbar from "../../Share/Navbar/Navbar";



const Root = () => {
    return (
        <div className="font-Poppins" >
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;