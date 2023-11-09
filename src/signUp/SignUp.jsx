
import Lottie from "lottie-react";
import loginAnimition from"../../src/assets/RegistrationsAnimation.json"
import Navbar from '../Share/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
// import { getAuth, updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import Footer from "../LayOut/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
// import app from '../Firebase/Firebase.config';





const SignUp = () => {

	const {createUser, GoogleAccount} = useContext(AuthContext);

	const handelRegistration = e => {
		e.preventDefault();
		const name = e.target.name.value;
        const img = e.target.img.value;
        const email = e.target.email.value;
        const password = e.target.password.value; 

		console.log(name, img, email, password);

		if(password.length < 6)
        {
          toast.error("your password should have at lest 6 character");
          return;

        }
        else if(!/[A-Z]/.test(password))
        {
          toast.error("your password should have at lest one uppercase");
          return;
        }
        else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password))
        {
          toast.error("your password should have at lest one spacial character");
          return;
        }



		createUser(email, password)
		.then(result => {
        //    toast.success('Wow Successfully Registration')
            console.log(result.user);
            
			Swal.fire({
				title: "Wow Successfully Registration",
				text: "You clicked the button!",
				icon: "success"
		});

			updateProfile(auth.currentUser, {
				displayName: name,
				photoURL: img
			})
			.then(result => {
				console.log(result.user);
			})
	





			
			
           
            
        })
        .catch(error => {
            console.log(error.message);
            toast.error(error.message)
  
            
          })

	}
    return (
        <div className='' >
			
			<Toaster/>
            <Helmet>
        <title> GoExplor || signup </title>
       </Helmet>


             <Navbar></Navbar>
            {/* SignUp Session */}
            <div className=' w-10/12 mx-auto lg:flex lg:justify-center lg:items-center lg:mt-5 ' >
            <div className='flex-1 ' >
            <Lottie className='w-4/6 mx-auto mr-10' animationData={loginAnimition} ></Lottie>
            </div>



            <div className='flex-2' >
            <div className="w-4/6 mx-auto ml-16 md:ml-36  mr-10 space-y-5 md:mr-14 p-4 rounded-md shadow sm:p-8 bg-[#99e7e3] text-black">
	<h2 className="mb-3 lg:text-5xl font-bold text-center">Registration  Your Account</h2>
	
	
	
	<form onSubmit={handelRegistration}  className="space-y-8">
		<div className="space-y-4">
			{/* name */}
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Your Name</label>
				<input type="text" name="name" id="name" placeholder="Foysal Nur Ontor " className="w-full px-3 py-2 border rounded-md border-gray-700  text-black focus:border-violet-400" />
			</div>
			{/* img */}
			<div className="space-y-2">
				<label htmlFor="img" className="block text-sm">Image Url</label>
				<input type="text" name="img" id="img" placeholder="www.yourimg.com" className="w-full px-3 py-2 border rounded-md border-gray-700  text-black " />
			</div>
			{/* email */}
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700  text-black " />
			</div>
			{/* password */}
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 text-black   " />
			</div>
		</div>
		{/* button */}
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-green-400 text-gray-900">Registration</button>
	</form>



    <div className="flex items-center w-full my-4">
		<hr className="w-full text-black" /> 
		<p className="px-3 text-black">OR</p>
		<hr className="w-full text-black" />
	</div>
    <p className="text-sm text-center text-black">you have account?
		<Link to='/login' ><a  rel="noopener noreferrer" className="focus:underline hover:underline text-xl font-semibold ">Sign In here</a></Link>
	</p>
    <div className="my-6 space-y-4">
		<button onClick={() => GoogleAccount()} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-black focus:ri">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		
	</div>


               </div>
            </div>
        </div>
		<Footer></Footer>
            
        </div>
    );
};

export default SignUp;