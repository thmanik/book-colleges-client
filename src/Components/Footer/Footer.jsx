import { Link } from "react-router-dom";
import {FaChartPie, FaMapMarkerAlt} from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10  text-white">
  <div>
    <span className="color font-bold text-2xl">Services</span> 
    <a className="link link-hover">Online</a> 
    <a className="link link-hover">Offline</a> 
  </div> 
  <div>
    <span className="color font-bold text-2xl">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
  </div> 
  <div>
    <span className="color font-bold text-2xl">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
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