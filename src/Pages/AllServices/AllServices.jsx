import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const AllServices = () => { 
    const [show, setShow] = useState(false);
    const services = useLoaderData();
    return (
        <div className='min-h-screen' >
            <h1 className='text-center text-5xl font-bold py-10' >All Services  </h1>

            <div className='w-8/12 mx-auto space-y-7' >
                {
                   show ? services.map(service => <ServicesCard key={service._id} service={service} ></ServicesCard>) : services.slice(0, 6).map(service => <ServicesCard key={service._id} service={service} ></ServicesCard>)
                }
            </div>


            <div className='mt-10' >
                {
                    services.length > 6 && (show ? "" : (<button onClick={()=> setShow(!show)} className={` px-8 lg:px-32 py-4 rounded-lg bg-[#2fc7bf] text-black block mx-auto font-bold   `}>
                    SEE ALL
                </button>)  )
                }
            </div>
  

        </div>
    );
};

export default AllServices;