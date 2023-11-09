
import React from 'react';
import Swal from 'sweetalert2';

const PandingWorkCard = ({booking, handelConfirm}) => {
    const {_id, serviceName, instruction, Date, pictureURL, status } = booking || {} 
    console.log(serviceName);

    

    return (
        <div className='flex gap-x-10 bg-[#87f1ea] rounded-l-2xl ' >
          
             <div className='flex-1' >
                <img className='rounded-l-2xl w-full h-full' src={pictureURL} alt="" />
             </div>
             <div className='flex-1  py-5 space-y-5 ' >
                <h1>Name : {serviceName}</h1>
                <p> instruction : {instruction}</p>
                <p>Date: {Date}</p>

           {
            status === 'confirm' ? <button className='btn btn-primary' >Confirmed</button> :
            <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">Pending</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={() => handelConfirm(_id) } >In Progress</a></li>
              <li><a onClick={() => handelConfirm(_id) }  > Completed
          </a></li>
            </ul>
          </div>

           }

             
             </div>
        </div>
    );
};

export default PandingWorkCard;