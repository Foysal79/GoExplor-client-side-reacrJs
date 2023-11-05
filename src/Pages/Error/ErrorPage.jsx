import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import errorAnimition from"../../assets/404.json"
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='flex justify-center' >
                {/* <img src="https://i.ibb.co/wc63gst/error3.jpg" alt="" /> */}
                <Lottie animationData={errorAnimition} ></Lottie>
                
            </div>
            <div className='flex justify-center' >
            <Link to='/' ><button className='btn bg-[#0DCDC2] mr-5 hover:bg-black hover:text-white ' >Back To Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;