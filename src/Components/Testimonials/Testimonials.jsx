import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'
import { FaGraduationCap } from "react-icons/fa";
class Testimonials extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="p-10 testimonial-section">
         <div className="testimonials-title justify-center flex"><FaGraduationCap className="mt-1"></FaGraduationCap><span className="ms-1">Testimonials</span></div>
        <h1 className="text-center testimonials-subTitle">What Our Clients Says</h1>
        <Slider {...settings}>
          
<div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/L63wdVD/userphoto.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Alondra Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>

<div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/t3gBkmd/instructor-3.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Margie Dose</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/mDnmR8Y/beautiful-woman-street.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Alayna Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/c355p0z/instructor-4.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Henry Mash</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/mXCzj72/instructor-2.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Jhon Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/L63wdVD/userphoto.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Alondra Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>
<div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/L63wdVD/userphoto.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Alondra Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>

<div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/t3gBkmd/instructor-3.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Margie Dose</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/mDnmR8Y/beautiful-woman-street.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Alayna Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/c355p0z/instructor-4.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Henry Mash</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/mXCzj72/instructor-2.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Jhon Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>

  <div className="p-2 "><div className="comments">
<img className="m-auto" src="https://i.ibb.co/y5HcSqW/client-says.png" alt="" />
<p className="py-5 comments-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo impedit repudiandae incidunt obcaecati quod dolorem consectetur odio aut adipisci numquam!</p>
<img className="client-image m-auto " src="https://i.ibb.co/L63wdVD/userphoto.jpg" alt="" />
<div className="text-center">
<h2 className="clients-name">Alondra Deo</h2>
<p className="positon">Student</p></div>
</div>
</div>





        </Slider>
      </div>
    );
  }
}

export default Testimonials;
