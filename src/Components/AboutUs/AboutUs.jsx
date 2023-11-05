import "./AboutUs.css"
import { FaGraduationCap } from "react-icons/fa";

const AboutUs = () => {
    
    return (
        <div className='about-section grid md:grid-cols-2  sm:grid-rows-1 gap-2 md:m-20'>
          <div className="md:p-10 about-img"><img className="img-fluid " src="https://i.ibb.co/XCKCGx9/about-img-02.png" alt="" /></div>
          <div className=" md:py-6 md:px-10 about-descrip">
            <p className="about-title flex"><FaGraduationCap className="m-1"></FaGraduationCap><span className="text-color" > About Us</span></p>
            <p className="about-heading">A Few Words About Our Service</p>
            <p className="descript-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita blanditiis placeat itaque non magnam sequi excepturi </p>
            <p className="descript-2 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita blanditiis placeat itaque non magnam sequi excepturi </p>

            <div className="flex">
              <div className="py-6 px-3 "><h2 className="point-descript"><span className="p-3 me-2  badgee">01</span>Reputed College</h2><p className="ps-2 pe-1 description ">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
              <div></div>
              <div className="py-6 px-3 "><h2 className="point-descript"><span className="p-3 me-2  badgee">02</span>Reputed College</h2><p className="ps-2 pe-1 description ">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
             
            </div>
            <div><button className=" btn-color  relative inline-flex items-center justify-center p-4  py-3  overflow-hidden font-medium text-blue-700 transition duration-400 ease-out border-2  rounded-full shadow-md group"><span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Read More</span>
<span className="relative invisible">Button Text</span></button>
</div>
          </div>
        </div>
    );
};

export default AboutUs;

