import { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
  };

  
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-cyan-300 border-b-2 border-cyan-300 pb-1 transition-all duration-300"
      : "hover:text-cyan-300 transition-all duration-300";

  return (
    <header className="bg-[#014C63] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
   
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img className="w-9 h-9" src="https://i.ibb.co/5TbNqCx/svg-icons.png" alt="Logo" />
          <span>Book Colleges</span>
        </Link>

      
        <nav className="hidden lg:flex items-center space-x-6 font-medium">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/colleges" className={navLinkStyles}>Colleges</NavLink>
          <NavLink to="/admission" className={navLinkStyles}>Admission</NavLink>
          <NavLink to="/mycollege" className={navLinkStyles}>My College</NavLink>
           <NavLink to="/blogs" className={navLinkStyles}>Blogs</NavLink>
          
          {user ? (
            <div className="flex items-center gap-3 ml-4">
              <img 
                title={user?.displayName} 
                className="w-9 h-9 rounded-full border-2 border-white object-cover" 
                src={user?.photoURL} 
                alt="User" 
              />
              <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded transition text-sm">
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 ml-4">
              <NavLink to="/login" className={navLinkStyles}>Login</NavLink>
              <Link to="/registration" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded text-sm transition">Register</Link>
            </div>
          )}
        </nav>

       
        <button 
          onClick={() => setIsOpen(true)} 
          className="lg:hidden p-2 hover:bg-[#026685] rounded-md transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} user={user} handleLogOut={handleLogOut} />
    </header>
  );
};

export default Header;