import { Link } from 'react-router-dom';
import './Banner.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Banner = () => {
    const [typeEffect] = useTypewriter({
        words : ['City to city', 'Free Rides', 'Spacial Rate', 'Best Security', 'One Way Rental', 'Spacial Discounts', 'best guide'],
        loop : {},
        typeSpeed : 100,
        deleteSpeed : 40,
    })
    return (
        <div className=" w-full  background1  " >
            {/* <img className="w-full h-[100vh] " src="https://i.ibb.co/yFzZ2md/8.jpg" alt="" /> */}
            <div className="  h-full flex items-center " >
            <div className='text-white space-y-4  lg:space-y-8 items-center pl-10 lg:pl-28  '>
                <h1 className='lg:text-3xl font-semibold' >What we offer? <span className='bg-[#0DCDC2] text-black px-6' > {typeEffect} </span> </h1>
        <h2 className=' text-4xl lg:text-7xl font-bold  lg:w-2/3'> Dream Vacation with <span>Go<span className='text-[#0DCDC2]'>EXPLOR</span> </span> </h2>
        <p className='text-left  ' >Explore Beautiful Destination Around The World</p>
        <div>
            <Link to='/allServices' > <button   className='btn bg-[#0DCDC2] mr-5 '>BOOK NOW</button> </Link>
            
            
        </div>
      </div>
  
            </div>
        </div>
    );
};

export default Banner;