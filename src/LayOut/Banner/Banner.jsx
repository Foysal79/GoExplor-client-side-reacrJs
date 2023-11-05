import './Banner.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Banner = () => {
    const [typeEffect] = useTypewriter({
        words : ['DREAM VACATION  ', 'JOURNEY TO EXPLORE WORLD', 'Lets Get The New Experiene', 'ExploreYour Travel'],
        loop : {},
        typeSpeed : 100,
        deleteSpeed : 40,
    })
    return (
        <div className="relative w-full background1" >
            {/* <img className="w-full h-[100vh] " src="https://i.ibb.co/yFzZ2md/8.jpg" alt="" /> */}
            <div className="absolute  h-full flex items-center " >
            <div className='text-white space-y-4  lg:space-y-8 items-center pl-10 lg:pl-28  '>
                <h1 className='lg:text-3xl font-semibold' >Search Your Next</h1>
        <h2 className=' text-4xl lg:text-7xl font-bold  lg:w-2/3'> {typeEffect} </h2>
        <p className='text-left  ' >Explore Beautiful Destination Around The World</p>
        <div>
            <button className='btn bg-[#0DCDC2] mr-5 '>BOOK NOW</button>
            
        </div>
      </div>
  
            </div>
        </div>
    );
};

export default Banner;