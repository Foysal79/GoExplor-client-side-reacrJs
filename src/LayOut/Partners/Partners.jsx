import React from 'react';
import Marquee from "react-fast-marquee";
const Partners = () => {
    <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
    return (
        <div className='mt-20' >
            <div className='text-center font-bold space-y-6 mb-6 ' >
                <h1 className='text-5xl  ' >WE ARE FEATURED IN</h1>
                <p className='text-sm text-gray-500' >OUR PARTNERS</p>
            </div>
            <Marquee gradient direction='right' lg:gradientWidth={500}  >
            <img className='w-48 mx-10'  src="https://i.ibb.co/Q8Cnjq6/BLE4-HRPZ-400x400.png" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/JjKqtXn/Car-rental-in-varanasi.webp" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/kKJ1gs1/emirates.jpg" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/Hg6CgM1/images.png" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/LgCL9rD/imsages.png" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/D5GxCjV/kacchi-bhai-dribbble.png" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/FK2XrLT/qatar-airways.jpg" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/J3nwphh/Rent-a-Car-Dhaka.jpg" alt="" />
            <img className='w-48 mx-10'  src="https://i.ibb.co/NLX3krc/untitled.jpg" alt="" />
            </Marquee>
            
        </div>
    );
};

export default Partners;