import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageServicePageCard = ({service}) => {
    const {
        _id,
        serviceName,
        pictureURL,
        yourName,
        yourEmail,
        Price,
        description,
        serviceArea,
        ServiceProviderImage} = service || {}

        const handelDelate = _id => {
            console.log(_id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                
                //    delate mongodb code this sessions

                fetch(`http://localhost:5000/allServices/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0)
                    {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })


                  
                }
              });
        }


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
               <div className="flex space-x-8 " >
                 <button onClick={() => handelDelate(_id)}  className="btn flex-1  btn-primary bg-red-600 hover:bg-red-800 " >Delete</button> 
                <Link to={`/updateServices/${_id}`} className="btn flex-1  btn-primary"><button  >Update</button></Link> 
               
               </div>
            </div>
          </div>

        </div>
    );
};

export default ManageServicePageCard;