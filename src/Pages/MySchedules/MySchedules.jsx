import BookingData from "../BookingData/BookingData";
import PendingWork from "../PendingWork/PendingWork";


const MySchedules = () => {
    return (
        <div className="flex w-11/12 mx-auto justify-center min-h-screen gap-4 mt-20 " >
            <div className=" w-full flex-1 " >
                
                <BookingData></BookingData>
            </div>
            <div className="flex-1" >
            <PendingWork></PendingWork>
            </div>
           
        </div>
    );
};

export default MySchedules;