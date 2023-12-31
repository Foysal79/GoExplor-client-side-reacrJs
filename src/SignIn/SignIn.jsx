import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginAnimition from"../../src/assets/LogInAnimation.json"
import Navbar from '../Share/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../LayOut/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {

	const {LogIn} = useContext(AuthContext);
	const navigate = useNavigate();

	const handelLogin = e => {
		e.preventDefault();
		const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);
		LogIn(email, password)
		.then(result => {
			console.log(result.user)
          toast.success('Successfully Login !');
          navigate(location?.state ? location.state : '/')
		})
		.catch(error => {
			console.log(error)
			if (error.code === 'auth/invalid-email')
			{
			toast.error('Invalid email format. Please enter a valid email address.')
			
			}
			else if (error.code === 'auth/wrong-password') {
			toast.error('Invalid password. Please check your password and try again.');
			
			} else {
			toast.error(error.code);
			
			}
		} );

	}
    return (
        <div>
			<Toaster/>
			<Helmet>
        <title> GoExplor || signIn </title>
       </Helmet>
            <Navbar></Navbar>
            <div className=' w-10/12 mx-auto lg:flex lg:justify-center lg:items-center lg:mt-5 ' >
            <div className='flex-1 ' >
            <Lottie className='w-4/6 mx-auto mr-10' animationData={loginAnimition} ></Lottie>
            </div>
            <div className='flex-2' >
            <div className="w-4/6 mx-auto mt-16 mr-10 space-y-5 md:mr-14 p-4 rounded-md shadow sm:p-8 bg-[#99e7e3] text-black">
	<h2 className="mb-3 text-5xl font-bold text-center">Login to your account</h2>
	
	{/* <div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-black focus:ri">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		
	</div> */}
	
	{/* form */}
	<form onSubmit={handelLogin} className="space-y-8">
		<div className="space-y-4">
			{/* email */}
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-100 focus:border-violet-400" />
			</div>
			{/* password */}
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700   focus:border-violet-400" />
			</div>
		</div>
		{/* button */}
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-green-400 text-gray-900">Sign in</button>
	</form>
	<div className="flex items-center w-full my-4">
		<hr className="w-full text-black" /> 
		<p className="px-3 text-black">OR</p>
		<hr className="w-full text-black" />
	</div>
	<p className="text-sm text-center text-black">Dont have account?
		<Link to='/registration' ><a href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-xl font-semibold ">Sign up here</a></Link>
	</p>

               </div>
            </div>
        </div>
		<Footer></Footer>
        </div>
    );
};

export default SignIn;