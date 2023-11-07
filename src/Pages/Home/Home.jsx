import { Link } from "react-router-dom";
import Banner from "../../LayOut/Banner/Banner";
import PopularServices from "../../LayOut/PopularServices/PopularServices";
import Testimonial from "../../LayOut/Testimonial/Testimonial";
import WhyTravelWithUs from "../../LayOut/WhyTravelWithUs/WhyTravelWithUs";
import PhotoTravelers from "../../LayOut/PhotoTeavellers/PhotoTravelers";
import Partners from "../../LayOut/Partners/Partners";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyTravelWithUs></WhyTravelWithUs>
              <PopularServices></PopularServices>
              <div className="text-center my-16 " >
              <Link to='/allServices' className="" > <button className="btn bg-[#0DCDC2]  text-black lg:text-2xl  hover:bg-[#0DCDC2]  lg:px-52 " >More Destination</button> </Link>
              </div>
              <PhotoTravelers></PhotoTravelers>
              <Partners></Partners>
              <Testimonial></Testimonial>
              
        </div>
    );
};

export default Home;