import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-10 md:px-20 py-10 md:py-20 bg-white overflow-hidden">

            <div className="flex justify-center order-2 md:order-1 hidden md:flex">
                <img
                    className="w-full max-w-sm md:max-w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    src="https://i.ibb.co/XCKCGx9/about-img-02.png"
                    alt="About Us"
                />
            </div>

            <div className="order-1 md:order-2 flex flex-col space-y-5 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-secondary text-xl md:text-3xl font-black italic">
                    <FaGraduationCap />
                    <span>About Us</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black leading-tight">
                    A Few Words About Our Service
                </h1>

                <div className="space-y-4">
                    <p className="text-base md:text-xl text-primary leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita blanditiis placeat itaque non magnam sequi excepturi.
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita blanditiis placeat itaque non magnam sequi excepturi.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                            <span className="bg-secondary text-white px-3 py-1 rounded-full font-bold text-sm">01</span>
                            <h2 className="text-lg font-bold">Reputed College</h2>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit?
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                            <span className="bg-secondary text-white px-3 py-1 rounded-full font-bold text-sm">02</span>
                            <h2 className="text-lg font-bold">Reputed College</h2>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit?
                        </p>
                    </div>
                </div>

                <div className="flex justify-center md:hidden py-4">
                    <img
                        className="w-full max-w-sm h-auto transform hover:scale-105 transition-transform duration-500"
                        src="https://i.ibb.co/XCKCGx9/about-img-02.png"
                        alt="About Us"
                    />
                </div>

                <div className="pt-4 flex justify-center md:justify-end w-full">
                    <Link to={"/about"} className="inline-block">
                        <button className="relative w-48 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-black text-primary transition duration-500 ease-out border-2 border-primary shadow-sm group/btn rounded-2xl hover:text-white">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white bg-primary duration-300 -translate-x-full group-hover/btn:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover/btn:translate-x-full ease text-xs uppercase tracking-[2px]">
                                Read More...
                            </span>
                            <span className="relative invisible text-xs uppercase tracking-[2px]">Read More...</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;