import BookingData from "../BookingData/BookingData";


const MySchedules = () => {
    return (
        <div className="flex w-10/12 mx-auto justify-center min-h-screen gap-4 mt-20 " >
            <div className=" w-full " >
                <h1 className=" bg-[#0DCDC2] text-center text-5xl font-bold " >Booking : </h1>
                <BookingData></BookingData>
            </div>
            <div className=" w-full " >
                <h1 className=" bg-gray-400 text-center text-5xl font-bold" >Padding Work</h1>
            </div>
        </div>
    );
};

export default MySchedules;