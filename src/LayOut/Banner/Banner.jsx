import './Banner.css'

const Banner = () => {
    return (
        <div className="relative w-full background1" >
            {/* <img className="w-full h-[100vh] " src="https://i.ibb.co/yFzZ2md/8.jpg" alt="" /> */}
            <div className="absolute  h-full flex items-center " >
            <div className='text-white  space-y-8 items-center pl-28  '>
                <h1 className='text-3xl font-semibold' >Search Your Next</h1>
        <h2 className='text-7xl font-bold w-2/3'>DREAM VACATION</h2>
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