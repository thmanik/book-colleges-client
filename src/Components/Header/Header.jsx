import { Link } from 'react-router-dom';
import './Header.css'

import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const{ user, logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
  }
    return (
        <div>
          <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/colleges'>Colleges</Link></li>
        <li><Link to='/admission' >Admission</Link ></li>
        <li><Link to='/mycollege'>My College</Link ></li>
        {
          user ? <><img title={user?.displayName} className="rounded-full ms-3 user-img" src={user?.photoURL} alt="" /> <Link onClick={handleLogOut} className="ms-2 text-black">LogOut</Link></>:<><li><Link to='/login'>Login</Link ></li>
          <li><Link to='/registration'>Registration</Link ></li></>
        }
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl flex"> <img className='icons-edit' src="https://i.ibb.co/5TbNqCx/svg-icons.png" alt="" /><span>Book Colleges</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/colleges'>Colleges</Link></li>
      <li><Link to='/admission'>Admission</Link></li>
      <li><Link to='/mycollege'>My College</Link></li>
      {
          user ? <><img title={user?.displayName} className="rounded-full ms-3 mt-1 user-img" src={user?.photoURL} alt="" /> <Link onClick={handleLogOut} className="ms-2 text-white mt-2">LogOut</Link></>:<><li><Link to='/login'>Login</Link ></li>
          <li><Link to='/registration'>Registration</Link ></li></>
        }
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Header;