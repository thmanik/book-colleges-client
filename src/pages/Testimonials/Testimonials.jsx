import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGraduationCap } from "react-icons/fa";

const Testimonials = () => {
  const settings = {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const testimonialData = [
    { name: "Alondra Deo", img: "https://i.ibb.co/L63wdVD/userphoto.jpg" },
    { name: "Margie Dose", img: "https://i.ibb.co/t3gBkmd/instructor-3.jpg" },
    { name: "Alayna Deo", img: "https://i.ibb.co/mDnmR8Y/beautiful-woman-street.jpg" },
    { name: "Henry Mash", img: "https://i.ibb.co/c355p0z/instructor-4.jpg" },
    { name: "Jhon Deo", img: "https://i.ibb.co/mXCzj72/instructor-2.jpg" },
    { name: "Alondra Deo", img: "https://i.ibb.co/L63wdVD/userphoto.jpg" },
  ];

  return (
    <div className="p-5 md:p-10">
      
      <div className="flex justify-center items-center gap-2 text-secondary text-2xl md:text-[30px] font-black italic">
        <FaGraduationCap />
        <span>Testimonials</span>
      </div>
      
      <h1 className="text-center text-3xl md:text-[45px] font-black mt-2 mb-8">
        What Our Clients Says
      </h1>

      <Slider {...settings}>
        {testimonialData.map((item, index) => (
          <div key={index} className="p-2">
            <div className="border-[3px] border-[#f0f4f5] rounded-[10px] m-1 md:m-2 p-5 md:p-6 bg-white transition-all hover:shadow-lg">
              
              <img
                className="mx-auto"
                src="https://i.ibb.co/y5HcSqW/client-says.png"
                alt="quote"
              />
              
             
              <p className="py-5 text-center text-gray-600 leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
                impedit repudiandae incidunt obcaecati quod dolorem consectetur odio
                aut adipisci numquam!
              </p>

            
              <img
                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-[#f0f4f5]"
                src={item.img}
                alt={item.name}
              />

              
              <div className="text-center mt-3">
                <h2 className="text-lg font-black">{item.name}</h2>
                <p className="text-gray-500 italic text-sm">Student</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;