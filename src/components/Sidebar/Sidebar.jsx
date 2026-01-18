import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen, user, handleLogOut }) => {
  return (
    <>
   
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

    
      <div className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-5 flex flex-col h-full">
       
          <button 
            onClick={() => setIsOpen(false)}
            className="self-end p-2 text-gray-600 hover:text-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          
          {user && (
            <div className="flex flex-col items-center my-6 border-b pb-4">
              <img className="w-16 h-16 rounded-full ring-2 ring-primary" src={user?.photoURL} alt="User" />
              <p className="mt-2 font-bold text-gray-800">{user?.displayName}</p>
            </div>
          )}

          
          <nav className="flex flex-col gap-4 text-lg font-medium mt-4">
            <Link onClick={() => setIsOpen(false)} to="/" className="px-4 py-2 hover:bg-gray-100 rounded">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/colleges" className="px-4 py-2 hover:bg-gray-100 rounded">Colleges</Link>
            <Link onClick={() => setIsOpen(false)} to="/admission" className="px-4 py-2 hover:bg-gray-100 rounded">Admission</Link>
            <Link onClick={() => setIsOpen(false)} to="/mycollege" className="px-4 py-2 hover:bg-gray-100 rounded">My College</Link>
            <Link onClick={() => setIsOpen(false)} to="/blogs" className="px-4 py-2 hover:bg-gray-100 rounded">Blogs</Link>
            <div className="mt-4 border-t pt-4">
              {user ? (
                <button 
                  onClick={() => { handleLogOut(); setIsOpen(false); }} 
                  className="w-full text-left px-4 py-2 bg-red-50 text-red-600 font-bold rounded"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link onClick={() => setIsOpen(false)} to="/login" className="px-4 py-2 text-center border border-primary rounded text-primary">Login</Link>
                  <Link onClick={() => setIsOpen(false)} to="/registration" className="px-4 py-2 text-center bg-primary text-white rounded">Registration</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;