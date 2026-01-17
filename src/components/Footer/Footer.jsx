import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#003344] text-white">
        
            <footer className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
               
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-b-2 border-[#FF7350] inline-block pb-1">About Us</h2>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam quas, provident, minima debitis quos dolorum eligendi iure totam eos, odit cum similique est tenetur.
                        </p>
                        <div className="flex gap-5">
                            <a href="#" className="hover:text-[#FF7350] transition-colors duration-300"><FaFacebook size={24} /></a>
                            <a href="#" className="hover:text-[#FF7350] transition-colors duration-300"><FaInstagramSquare size={24} /></a>
                            <a href="#" className="hover:text-[#FF7350] transition-colors duration-300"><FaTwitter size={24} /></a>
                            <a href="#" className="hover:text-[#FF7350] transition-colors duration-300"><FaLinkedin size={24} /></a>
                        </div>
                    </div>

                    
                    <div className="md:text-center space-y-6">
                        <h2 className="text-2xl font-bold border-b-2 border-[#FF7350] inline-block pb-1">Our Links</h2>
                        <div className="flex flex-col space-y-3 pt-2">
                            <Link to="/" className="hover:text-[#FF7350] transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0">Home</Link>
                            <Link to="/about" className="hover:text-[#FF7350] transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0">About</Link>
                            <Link to="/blog" className="hover:text-[#FF7350] transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0">Blog</Link>
                            <Link to="/contact" className="hover:text-[#FF7350] transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0">Contact</Link>
                        </div>
                    </div>

                  
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-b-2 border-[#FF7350] inline-block pb-1">Contact Us</h2>
                        <div className="space-y-5 pt-2">
                            <div className="flex items-start gap-4 group">
                                <FaPhoneAlt className="text-[#FF7350] mt-1 group-hover:scale-110 transition-transform" />
                                <div className="text-sm text-gray-300">
                                    <p>+880 1234567890</p>
                                    <p>+880 1234567890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <FaEnvelope className="text-[#FF7350] mt-1 group-hover:scale-110 transition-transform" />
                                <div className="text-sm text-gray-300">
                                    <p>info@example.com</p>
                                    <p>about@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <FaMapMarkerAlt className="text-[#FF7350] mt-1 group-hover:scale-110 transition-transform" />
                                <div className="text-sm text-gray-300 leading-relaxed">
                                    <p>1241/Plot No. 39, 15th Phase,</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            
            <div className="border-t border-white/10 bg-[#002b3a]">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to='/' className="flex items-center gap-2 group">
                        <img className='w-8 h-8 group-hover:rotate-12 transition-transform' src="https://i.ibb.co/5TbNqCx/svg-icons.png" alt="logo" />
                        <span className="text-xl font-black tracking-tight">Book <span className="text-[#FF7350]">Colleges</span></span>
                    </Link>

                    <p className="text-sm text-gray-400 text-center">
                        Copyright &copy; {new Date().getFullYear()} <b>Book Colleges</b>. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FaMapMarkerAlt className="text-[#FF7350]" />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;