/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import { FaHome, FaFrownOpen } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004d66] to-[#00222d] flex flex-col justify-center items-center text-white px-4 py-12 relative overflow-hidden">
     
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#FF7350] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center max-w-2xl">
      
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#FF7350] mb-6 drop-shadow-lg animate-bounce-slow">
          404
        </h1>
     
        <FaFrownOpen className="text-white text-6xl mx-auto mb-6 opacity-80" />

       
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Oops! Page Not Found
        </h2>

       
        <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-md mx-auto">
          We're sorry, but the page you were looking for doesn't exist. It might have been moved or deleted.
        </p>

        
        <Link to="/" className="inline-flex items-center bg-[#FF7350] hover:bg-[#e66a4a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group">
          <FaHome className="mr-3 text-lg group-hover:rotate-6 transition-transform" />
          Go to Homepage
        </Link>
      </div>

      
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animate-bounce-slow {
            animation: bounce-slow 2s infinite ease-in-out;
        }
        @keyframes bounce-slow {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;