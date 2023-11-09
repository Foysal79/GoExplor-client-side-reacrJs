import { Link } from "react-router-dom";


const BookingCard = ({card}) => {
    const {
        _id,
        Date,
        ServiceProviderEmail,
        instruction,
        serviceName,
        pictureURL,
        yourName,
        email,
        Price,
        description,
        serviceArea,
        ServiceProviderImage} = card || {}

        console.log(serviceArea)
    return (
        <div>
            
          <div className="bg-[#86f8f1] rounded-l-2xl rounded-r-md flex gap-8 " >
            <div className="flex-1" >
                 <img className="w-96 h-full rounded-l-2xl " src={pictureURL} alt="" />
            </div>
            <div className="p-5 flex-1 space-y-4 ">
               <h1 className="" > <span className=" text-2xl font-bold " >Tourist Place :</span> <span className="text-gray-700 text-2xl font-semibold  " >{serviceName}</span> .</h1>
               <p className="text-sm text-gray-600" > <span className="text-lg font-bold" >Service Provider Email :</span>  <span className="font-bold" >{ServiceProviderEmail}</span></p>
               <h3> <span className="uppercase text-2xl font-bold" >Price : </span>  <span className="text-2xl font-semibold text-gray-700 " > {Price}</span> $</h3>
               <h4> <span className="text-xl font-bold" >Bookin Date :</span> <span className="text-gray-700 font-semibold text-lg" >{Date} .</span></h4>
               <h4> <span className="text-xl font-bold" >Instruction :</span> <span className="text-gray-700 font-semibold text-lg" >{instruction} .</span></h4>
               
               {/* <div className="" >
                <Link to={`/singleService/${_id}`} > <button className="btn w-full btn-primary" >ViewDetails</button> </Link>
               
               </div> */}
            </div>
          </div>

        </div>
    );
};

export default BookingCard;