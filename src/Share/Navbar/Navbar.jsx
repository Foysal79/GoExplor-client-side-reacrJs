
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

  const navlink1 = <>
  <li><NavLink className="mr-4 md:text-xl" to='/' >Home</NavLink></li>
  <li><NavLink className="mr-4 md:text-xl " to='/services' >Services</NavLink></li>
  
        <li> <NavLink className="mr-4 md:text-xl " to='/dashboard' >
        Dashboard
          
          </NavLink>
        </li>
       
  
  </>
    return (
        <div className="navbar   md:px-10 lg:px-20  py-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          navlink1
        }
      </ul>
    </div>
    <Link to='/' ><a className=" btn text-4xl font-bold ">Go<span className="text-[#0DCDC2]" >Explore</span> </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlink1
      }
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' ><a className="btn text-xl ">LogIn</a></Link>
  </div>
</div>
    );
};

export default Navbar;