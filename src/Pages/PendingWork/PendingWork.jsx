import { useEffect } from "react";
import { useState } from "react";
import PandingWorkCard from "../BookingData/PandingWorkCard";
import Swal from "sweetalert2";



const PendingWork = () => {

    const [booking, setBooking] = useState([]);

    const url = "https://go-explor-server-site.vercel.app/bookingsAllData";
    useEffect(() => { 
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
      
      }, [url] )

      console.log(booking);

      const handelConfirm = id => {
        fetch(`https://go-explor-server-site.vercel.app/bookingsAllData/${id}`, {
           method : "PATCH",
           headers : {
               'content-type' : 'application/json',
           },
           body : JSON.stringify({status : 'Confirm'})
        })
        .then(res => res.json() )
        .then(data => {
           console.log(data);
           if(data.modifiedCount > 0)
           {

            const remaining = booking.filter(bookings => bookings._id !== id )
            const updated = booking.find(booking => booking._id === id  )
            updated.status = 'confirm'
            const newBooking = [updated, ...remaining]
            setBooking(newBooking);
               
               
               Swal.fire({
                   title: "Your service Status Update!",
                   text: "You clicked the button!",
                   icon: "success"
                 });
           }
        })

   }



    return (
        <div>
            

            <div className="space-y-6" >
            <h1 className="text-5xl font-bold  text-center mt-5 " >Pending Service</h1>
                {
                booking.map(booking => <PandingWorkCard handelConfirm={handelConfirm} key={booking._id} booking={booking} ></PandingWorkCard> )
                }
            </div>
        </div>
    );
};

export default PendingWork;