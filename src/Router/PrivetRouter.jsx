import React, { useContext } from 'react';
import Lottie from "lottie-react";
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import loginAnimition from "../assets/loadingAnimation.json"
const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading)
    {
        return <Lottie className='w-3/12 mx-auto'  animationData={loginAnimition} ></Lottie>
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivetRouter;