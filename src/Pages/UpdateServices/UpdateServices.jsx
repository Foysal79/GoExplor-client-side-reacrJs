import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateServices = () => {
    const {user} = useContext(AuthContext);

    const handelUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const pictureURL = form.pictureURL.value;
        const yourName = form.yourName.value;
        const yourEmail = form.yourEmail.value;
        const Price = form.Price.value;
        const description = form.description.value;
        const serviceArea = form.serviceArea.value;


        console.log(serviceName, pictureURL, yourName,yourEmail, Price, description, serviceArea);




    }


    return (
        <div className="w-9/12 mx-auto" >
            
           <form onSubmit={handelUpdate} >
           
           <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<htmForm  action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:dark:bg-gray-900">
        <h1 className="text-5xl font-bold text-center lg:text-left lg:mt-32 " >Update <br /> Your <br /> Service</h1>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ServiceName" className="text-sm">Service Name</label>
					<input id="ServiceName" name="serviceName" type="text" placeholder="Service Name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="PictureURL" className="text-sm">Picture URL of the Service</label>
					<input id="PictureURL" name="pictureURL" type="text" placeholder="Picture URL" className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="youName" className="text-sm">Your name</label>
					<input id="youName" name="yourName" type="text" disabled  defaultValue={user?.displayName} className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="yourEmail" className="text-sm">Your email</label>
					<input id="yourEmail" name="yourEmail"  disabled  defaultValue={user?.email} type="email"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="Price" className="text-sm">Price</label>
					<input id="Price" type="text" name="Price" placeholder="Price"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label htmlFor="Description" className="text-sm">Description</label>
					<input id="Description" name="description" type="text" placeholder="Description" className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
                <div className="col-span-full">
					<label htmlFor="serviceArea" className="text-sm">Service Area</label>
					<input id="serviceArea" name="serviceArea" type="text" placeholder="Service Area" className="w-full rounded-md focus:ring focus:ri focus:ri dark:dark:border-gray-700 dark:dark:text-gray-900" />
				</div>
                <div className="col-span-full">
					<button  className="w-full rounded-md bg-[#0DCDC2] py-4 text-xl font-semibold" >Update Service</button>
				</div>
				
				
			</div>
		</fieldset>
		
	</htmForm>
            </section>
           </form>
        </div>
    );
};

export default UpdateServices;