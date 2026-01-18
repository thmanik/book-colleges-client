
import { Link } from 'react-router-dom';
import { FaHome, FaFrownOpen } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center text-white px-4 py-12 relative overflow-hidden">
      
      <div className="relative z-10 text-center max-w-2xl">

        <h1 className="text-8xl md:text-9xl font-extrabold text-secondary mb-6 drop-shadow-lg animate-bounce-slow">
          404
        </h1>
     
        <FaFrownOpen className="text-white text-6xl mx-auto mb-6 opacity-80" />

        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Oops! Page Not Found
        </h2>

        <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-md mx-auto">
          We're sorry, but the page you were looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center bg-secondary hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        >
          <FaHome className="mr-3 text-lg group-hover:rotate-6 transition-transform" />
          Go to Homepage
        </Link>
      </div>

     
      <style>{`
        .animate-bounce-slow {
            animation: bounce-slow 2s infinite ease-in-out;
        }
        @keyframes bounce-slow {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;