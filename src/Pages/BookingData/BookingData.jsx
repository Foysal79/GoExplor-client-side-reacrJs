import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BookingCard from "./BookingCard";
import PandingWorkCard from "./PandingWorkCard";



const BookingData = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    // const url = `http://localhost:5000/booking?email=${user.email}`;
    const url = `http://localhost:5000/bookings?gmail=${user.email}`;
    const url2 = `http://localhost:5000/bookings?email=${user.email}`;

    console.log("url : = ",url);

    useEffect(() => { 
        fetch(url2)
        .then(res => res.json())
        .then(data => setBookings(data))
      
      }, [url2] )

      console.log(bookings);

    return (
        <div className="min-h-screen" >
          

          <div className="flex gap-8 " >
          <div className="w-full space-y-6 flex-1" >
          <h1 className="text-5xl font-bold flex-1 text-center mb-10 " >booking</h1>
            {
                bookings.map(card =>  <BookingCard key={card._id} card={card} ></BookingCard>)
            }
          </div>

          

          </div>
          

            
        </div>
    );
};

export default BookingData;