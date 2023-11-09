import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyServicesCard from "./MyServicesCard";
import { Helmet } from "react-helmet-async";


const MyServices = () => {

    const {user} = useContext(AuthContext);

    

    const url = `https://go-explor-server-site.vercel.app/allServicesUserWise/${user.email}`;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[url])
    console.log(data);



    return (
        <div className="min-h-screen" >
            <Helmet>
                <title> GoExplor || My services </title>
               </Helmet>
            <h1 className="text-center text-5xl font-bold mb-10 " > My Services  </h1>

            {
                data.length ? "" : <div className="flex justify-center" > <img src="https://i.ibb.co/WxTFccL/1.jpg" alt="" />  </div>
            }

            <div className="w-11/12  items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pl-28 gap-6 space-y-10" >
                
                {
                    data.map(service => <MyServicesCard key={service._id} service={service} ></MyServicesCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;