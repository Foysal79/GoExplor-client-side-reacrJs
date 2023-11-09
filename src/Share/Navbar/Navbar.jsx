
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
   const {user, LogOut} = useContext(AuthContext);
  // const navlink1 = <>
  // <li><NavLink className="mr-4 md:text-xl" to='/' >Home</NavLink></li>
  // <li><NavLink className="mr-4 md:text-xl " to='/allServices' >Services</NavLink></li>
  
  // {
  //   user && <li> <NavLink className="mr-4 md:text-xl " to='/dashboard' >Dashboard</NavLink></li>
  // }
        
       
  
  // </>
    return (
        <div className="navbar static   md:px-10 lg:px-20  py-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className="mr-4 md:text-xl" to='/' >Home</NavLink></li>
        
        <li><NavLink className="mr-4 md:text-xl " to='/allServices' >Services</NavLink></li>
        <li><NavLink className="mr-4 md:text-xl " to='/ManageServicePage' >Manage Service</NavLink> </li>
        <li>
        <details>
          <summary className="mr-4 md:text-xl " >Dashboard</summary>
          <ul className="p-2">
            
            <li> <Link className="text-xl mb-2 p-2" to='/my-services' >My-services</Link> </li>
            <li> <Link className="text-xl mb-2 p-2" to='/addServices' >Add-services</Link> </li>
            <li> <Link className="text-xl p-2" to='/mySchedules' >My-schedules</Link> </li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <Link to='/' ><a className=" btn  md:text-4xl font-bold ">Go<span className="text-[#0DCDC2]" >Explore</span> </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <li><NavLink className="mr-4 md:text-lg" to='/' >Home</NavLink></li>


      


      <li><NavLink className="mr-4 md:text-lg " to='/allServices' >Services</NavLink></li>
      <li><NavLink className="mr-4 md:text-lg " to='/ManageServicePage' >Manage Service</NavLink> </li>
       
      <li>
        <details>
          <summary className="mr-4 md:text-lg " >Dashboard</summary>
          <ul className="p-2">
            
            <li> <Link className="text-xl mb-2 p-2" to='/my-services' >My-services</Link> </li>
            <li> <Link className="text-xl mb-2 p-2" to='/addServices' >Add-services</Link> </li>
            <li> <Link className="text-xl p-2" to='/mySchedules' >My-schedules</Link> </li>
          </ul>
        </details>
      </li>


    </ul>
  </div>
  <div className="navbar-end">
  {
        user ? <div className="flex gap-4 items-center">
        <p className="text-sm"  > <span >Welcome To</span> <span className="text-xl" >{user?.displayName}</span> </p> <img className="rounded-full w-10" src={user?.photoURL} alt="img" />
        <button onClick={() => LogOut()} className="btn bg-[#0DCDC2] hover:bg-[#0DCDC2]  text-black" >LogOut</button>
      </div> : <Link to='/login' ><a className="btn bg-[#0DCDC2] hover:bg-[#0DCDC2] text-black">Login</a></Link>
    }
  </div>
          </div>
    );
};

export default Navbar;