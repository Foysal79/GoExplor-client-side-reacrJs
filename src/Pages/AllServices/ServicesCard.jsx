import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {
        _id,
        serviceName,
        pictureURL,
        yourName,
        email,
        Price,
        description,
        serviceArea,
        ServiceProviderImage} = service || {}
    return (
        <div>
            
          <div className="bg-[#86f8f1] rounded-l-2xl rounded-r-md flex gap-8 " >
            <div>
                 <img className="w-96 h-full rounded-l-2xl " src={pictureURL} alt="" />
            </div>
            <div className="p-5 flex-1 space-y-4 ">
               <h1 className="" > <span className=" text-2xl font-bold " >Tourist Place :</span> <span className="text-gray-700 text-2xl font-semibold  " >{serviceName}</span> .</h1>
               <p className="text-sm text-gray-600" >{description}</p>
               <h3> <span className="uppercase text-2xl font-bold" >Price : </span>  <span className="text-2xl font-semibold text-gray-700 " > {Price}</span> $</h3>
               <h4> <span className="text-xl font-bold" >Location :</span> <span className="text-gray-700 font-semibold text-lg" >{serviceArea} .</span></h4>
               <div className="flex items-center gap-4" >
                
                {/* <img src={ServiceProviderImage} alt="" /> */}
                <img alt="" className="w-10 h-10 border-black border-2 rounded-full ri ri dark:bg-gray-500 ri ri" src={ServiceProviderImage} />
                <h3 className="text-xl font-semibold" >   <span>{yourName}</span> </h3>
               </div>
               <div className="" >
                <Link to={`/singleService/${_id}`} > <button className="btn w-full btn-primary" >ViewDetails</button> </Link>
               
               </div>
            </div>
          </div>

        </div>
    );
};

export default ServicesCard;