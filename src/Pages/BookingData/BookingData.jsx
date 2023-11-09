import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BookingCard from "./BookingCard";



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
          

          <div className="w-full space-y-6 mt-20" >
            {
                bookings.map(card =>  <BookingCard key={card._id} card={card} ></BookingCard>)
            }
          </div>

            
        </div>
    );
};

export default BookingData;