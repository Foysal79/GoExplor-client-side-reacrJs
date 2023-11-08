import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePage = () => {
    const singleService = useLoaderData();
    const {_id,
        serviceName,
        pictureURL,
        yourName,
        yourEmail,
        Price,
        description,
        serviceArea,
        ServiceProviderImage} = singleService || {}
    return (
        <div>

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
               <button className='btn w-full bg-[#60ece5] hover:bg-[#3bebe2] ' >Book Now</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SinglePage;