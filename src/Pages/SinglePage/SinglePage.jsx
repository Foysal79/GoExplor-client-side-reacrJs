
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useState } from 'react';
import RelaventData from './RelaventData';


const SinglePage = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const singleService = useLoaderData();
    const { 
        serviceName,
        pictureURL,
        yourName,
        yourEmail,
        Price,
        description,
        serviceArea,
        ServiceProviderImage} = singleService || {}

        const handelUpdate = e => {
            //  <input defaultValue={} readOnly  type="text" />
            e.preventDefault();
            const form = e.target;
            const ServiceProviderEmail = form.ServiceProviderEmail.value;
            const serviceName = form.serviceName.value;
            const pictureURL = form.pictureURL.value;
            const UserEmail = form.UserEmail.value;
            const Price = form.Price.value;
            const Date = form.Date.value;
            const instruction = form.instruction.value;

            
            const bookingService = {
                ServiceProviderEmail,
                serviceName,
                pictureURL,
               email: UserEmail,
                Price,
                Date,
                instruction
            }
            console.log(bookingService);

            axios.post('http://localhost:5000/booking', bookingService )
		.then(res => {
			Swal.fire({
                title: " Booking your service",
                text: "thanks you ! ",
                icon: "success",
                confirmButtonText : 'ok',
            })
		})
            


        }


     
        const url = `http://localhost:5000/allServicesUserWise/${yourEmail}`;

        
    
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
        },[url])
        console.log(bookings);






    return (
        <div><Helmet>
        <title> GoExplor || {serviceName} </title>
       </Helmet>

            <div className='space-y-2 w-10/12 mx-auto mt-10 bg-[#56f7ef] py-6 rounded-2xl' >
                <h1 className='text-2xl font-bold text-center ' >Service Provider</h1>
                <div className='flex items-center gap-4 justify-center' >
                <img alt="" className="w-16 h-16 border-black border-2 rounded-full ri ri dark:bg-gray-500 ri ri" src={ServiceProviderImage} />
                <h1 className='text-xl font-semibold  ' >{yourName}</h1>
                </div>
                <p className='text-center text-lg font-semibold  ' > Location :  <span className='text-gray-700' >{serviceArea} . </span></p>

            </div>


            <div className='w-10/12 mx-auto my-10  ' >
            <h1 className='text-4xl text-center mb-6 font-bold ' > {serviceName}</h1>
            <div className='flex ' >
            <img className='rounded-l-3xl'  src={pictureURL} alt="" />
            <div className='p-6 text-lg font-semibold text-gray-600 bg-gray-100 pt-24 space-y-6 ' >
                 <p>{description}</p>
                 <div className="flex items-center my-4 gap-4" >
                
                
                <img alt="" className="w-10 h-10 border-black border-2 rounded-full ri ri dark:bg-gray-500 ri ri" src={ServiceProviderImage} />
                <h3 className="text-sm font-semibold text-gray-500" >   <span>{yourName}</span> </h3>
               </div>
               <h1> <span className='text-4xl font-bold text-black' >Price : </span> <span className="text-3xl  font-bold text-gray-600 ">{Price}$</span> </h1>
               
               {/* <button onClick={handelUpdate} className='btn w-full bg-[#60ece5] hover:bg-[#3bebe2] ' >
                Book Now</button> */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn w-full bg-[#60ece5] hover:bg-[#3bebe2] " onClick={()=>document.getElementById('my_modal_1').showModal()}>Book Now</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-2xl text-[#31a09a] text-center ">YOur Service Information</h3>
    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
    <div className='modal-action' >
    <div className="modal-action flex flex-col space-y-4 w-10/12 mx-auto ">
      <form onSubmit={handelUpdate} className='flex flex-col space-x-3'  method="dialog">

      <h1 className='text-lg font-bold' >Service Name</h1>
      <input  type="text" name="serviceName" defaultValue={serviceName} disabled id="" />
      <h1 className='text-lg font-bold' >Service Provider email</h1>
        <input  type="email" name="ServiceProviderEmail" defaultValue={yourEmail} disabled id="" />
      <h1 className='text-lg font-bold' >Service Image </h1>
        <input  type="text" name="pictureURL" defaultValue={pictureURL} disabled id="" />
      <h1 className='text-lg font-bold' >User email </h1>
        <input  type="text" name="UserEmail" defaultValue={user?.email} disabled id="" />
      <h1 className='text-lg font-bold' > Price</h1>
        <input  type="text" name="Price" defaultValue={Price} disabled id="" />
      <h1 className='text-lg font-bold' > Service Taking Date  (editable)
 </h1>
        <input  type="date" name="Date"  id="" />
      <h1 className='text-lg font-bold' >  instruction  (editable)
 </h1>
        <input  type="text" name="instruction"   id="" />
        
         <button className="btn">Book Now</button>
        
      </form>
      <button onClick={() => document.getElementById('my_modal_1').close()} className="btn">
              Close
            </button>
    </div>
    </div>
  </div>
</dialog>
            </div>
            </div>
            </div>

            <h1 className='text-center text-5xl font-bold my-20' >Some Related Data for You </h1>
           
           <div className='w-10/12 mx-auto grid grid-cols-3 gap-10' >
            
              {
                bookings.map(service => <RelaventData key={service._id} service={service} ></RelaventData> )
              }
            
           </div>

        </div>
    );
};

export default SinglePage;