import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const AllServices = () => { 
    const [inputValue, setInputValue] = useState('');
    const [show, setShow] = useState(false);
    const services = useLoaderData();
    const [display, setDisplay] = useState(services);
    const {serviceName} = services || {}
      console.log(services[1].serviceName);
    const handelInput = e => {
        e.preventDefault();
        setInputValue(e.target.value);
    }
    const handelBtnClick = () => {
  
        console.log(inputValue);

          console.log(serviceName);

        if(inputValue === "Sundarbans Mangrove Forest, Bangladesh")
        {
            const filterData = services.filter(filterCard => filterCard.serviceName === "Sundarbans Mangrove Forest, Bangladesh" );
            console.log(filterData);
            setDisplay(filterData);
        }
        if(inputValue === "Taj Mahal, India")
        {
            const filterData = services.filter(filterCard => filterCard.serviceName === "Taj Mahal, India" );
            console.log(filterData);
            setDisplay(filterData);
        }
        if(inputValue === "Cox's Bazar Beach, Bangladesh")
        {
            const filterData = services.filter(filterCard => filterCard.serviceName === "Cox's Bazar Beach, Bangladesh" );
            console.log(filterData);
            setDisplay(filterData);
        }
        if(inputValue === "Amber Fort, Jaipur, India")
        {
            const filterData = services.filter(filterCard => filterCard.serviceName === "Amber Fort, Jaipur, India" );
            console.log(filterData);
            setDisplay(filterData);
        }
        if(inputValue === "Tea Gardens of Sylhet, Bangladesh")
        {
            const filterData = services.filter(filterCard => filterCard.serviceName === "Tea Gardens of Sylhet, Bangladesh" );
            console.log(filterData);
            setDisplay(filterData);
        }
        if(inputValue === "Goa's Beaches, India")
        {
            const filterData = services.filter(filterCard => filterCard.serviceName === "Goa's Beaches, India" );
            console.log(filterData);
            setDisplay(filterData);
        }
        
        
      
       }

       


    return (
        <div className='min-h-screen' >
            <h1 className='text-center text-5xl font-bold py-10' >All Services  </h1>


            <div className="flex justify-center  mb-10 mt-10 ">
              <div className="relative w-8/12">
                <input
                  onChange={handelInput}
                  type="search"
                  id="search-dropdown text-input"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-black border-l-1 border border-black   dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search here......."
                  required
                />
                <button 
                onClick={handelBtnClick}
                  type="submit"
                  className="absolute top-0 right-0 text-base  px-10  font-semibold h-full text-black bg-[#2fc7bf] rounded-r-lg border  hover:bg-[#86f0ea]   "
                >search</button>
              </div>
            </div>



            <div className='w-8/12 mx-auto space-y-7' >
                {
                   show ? display.map(service => <ServicesCard key={service._id} service={service} ></ServicesCard>) : display.slice(0, 6).map(service => <ServicesCard key={service._id} service={service} ></ServicesCard>)
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