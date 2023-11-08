import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageServicePageCard from './ManageServicePageCard';

const ManageServicePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allServices")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data);

    return (
        <div className='min-h-screen' >

            
                <h1 className='text-center py-14 text-5xl font-bold' >Manage Services page </h1>

               <div className='flex justify-center' >
               <Link to='/AddServices' className='btn bg-[#3fdfd7] hover:bg-[#3df0e7] w-3/12 '><button   >Add Your Service</button></Link>
               </div>

               <div className='w-10/12 mx-auto space-y-6 mt-10 ' >
                {
                    data && data.map(service => <ManageServicePageCard key={service._id} service={service} ></ManageServicePageCard>)
                }
               </div>
            
            
        </div>
    );
};

export default ManageServicePage;