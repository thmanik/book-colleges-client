import { Link } from "react-router-dom";
import {FaChartPie, FaEnvelope, FaFacebook, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter} from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
  <div className="">
  <footer className="footer p-10  text-white">


   <div className="grid md:grid-cols-3 sm:grid-cols-1">
   <div>
    <h2 className="color md:text-center  about-link ">About Us</h2> 
     <p className="aboutLink-Title my-5 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam quas, provident, minima debitis quos dolorum eligendi iure totam eos, odit cum similique est tenetur.</p>
    <div className="flex gap-16 justify-center">
       <a href=""><FaFacebook className="text-2xl"></FaFacebook></a>
       <a href=""><FaInstagramSquare className="text-2xl"></FaInstagramSquare></a>
       <a href=""><FaTwitter className="text-2xl"></FaTwitter></a>
       <a href=""><FaLinkedin className="text-2xl"></FaLinkedin></a>
      </div> 
  </div>

    <div className="text-center our-linkSection mx-auto" >
    <h2 className="color text-center about-link ">Our Links</h2> 
    <div className=" justify-center single-AboutLink mt-6">
       <a className="about-singleLink" href="">Home</a><br /><br />
       <a className="about-singleLink" href="">About</a><br /><br />
       <a className="about-singleLink" href="">Blog</a><br /><br />
       <a className="about-singleLink" href="">Contact</a><br />
      </div>   
    </div>
    
    <div  className="md:text-center contact-section mx-auto">
     <h2 className="color md:text-center about-link ">Contact Us</h2> 
    <div className=" md:justify-center contact-list   mt-6 md:ms-20">
      <div className="flex">
        <div><FaPhoneAlt className="text-2xl  phone-icon"></FaPhoneAlt></div>
        <div className="contact-text ms-3" ><span>+880 1234567890</span><br /> <span>+880 1234567890</span></div>
      </div>
      <div className="flex mt-3">
        <div><FaEnvelope className="text-2xl  phone-icon"></FaEnvelope></div>
        <div className="contact-text ms-3" ><span>info@example.com</span><br /> <span>about@example.com</span></div>
      </div>
      <div className="flex mt-3">
        <div><FaMapMarkerAlt className="text-2xl  phone-icon"></FaMapMarkerAlt></div>
        <div className="contact-text ms-3" ><span>1241/Plot No. 39, 15th Phase,</span><br /><span>Dhaka, Bangladesh</span></div>
      </div>
      </div>  
    </div>
   </div>
</footer> 
<footer className="footer px-10 py-4 border-t  text-white border-base-300">
  <div className="items-center grid-flow-col">
    <p ><Link to='/'> <a className=" normal-case text-xl flex gap-2"><FaChartPie className="icon-color mt-1 "></FaChartPie> Book Colleges</a> </Link><br/><p className="flex"><span className="mt-1"><FaMapMarkerAlt></FaMapMarkerAlt></span><span className="ms-1"> Dhaka, Bangladesh</span></p> <p className="text-muted mt-5 flex"> Copyright &copy;<a className="text-decoration-none text-info " ><b> <Link ><a className="  flex gap-1"><FaChartPie className="icon-color mt-1 ms-1"></FaChartPie><span className="text-white">Book Colleges</span></a> </Link></b></a>.<span className="ms-1">All Rights Reserved </span> </p> </p>
  </div> 
 
</footer>
        </div>
    );
};

export default Footer;