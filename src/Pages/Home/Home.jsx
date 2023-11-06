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
              <div className="text-center my-16" >
              <Link to='/allServices' > <button className="btn" >More Destination</button> </Link>
              </div>
              <PhotoTravelers></PhotoTravelers>
              <Partners></Partners>
              <Testimonial></Testimonial>
              
        </div>
    );
};

export default Home;