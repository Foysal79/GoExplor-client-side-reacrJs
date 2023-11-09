import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";


const PopularServices = () => {
  
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://go-explor-server-site.vercel.app/allServices")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data);
    
    return (
        <div>
            <h1 className='text-center text-5xl font-bold py-10 mt-40' >POPULAR DESTINATIONS </h1>

            <div className="w-8/12  items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:pl-28 gap-6 space-y-10" >
                {
                     data.slice(2, 6).map(service => <PopularServicesCard key={service._id} service={service}  ></PopularServicesCard>)
                }
            </div>


        </div>
    );
};

export default PopularServices;