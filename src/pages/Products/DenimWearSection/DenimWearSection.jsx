import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace with your actual image paths
import jeans from "../../../assets/images/Products/Denims/denim_jeans.jpg";
import denimJacket from "../../../assets/images/Products/Denims/denim_jacket.jpeg";
import denimSkirt from "../../../assets/images/Products/Denims/denim_skirt2.jpg";
import denimShirt from "../../../assets/images/Products/Denims/denim_shirt2.jpeg";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-xl text-white bg-primary p-3 rounded-full"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-xl text-white bg-primary p-3 rounded-full"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const denimItems = [
  { name: "Jeans", image: jeans },
  { name: "Denim Jacket", image: denimJacket },
  { name: "Denim Skirt", image: denimSkirt },
  { name: "Denim Shirt", image: denimShirt },
];

const DenimWearSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="denim" className="py-12 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Durable & Stylish Denim Wear Collection
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Explore our denim essentials — from jeans and jackets to shirts and skirts — designed for durability and timeless style.
        </p>

        <Slider {...settings}>
          {denimItems.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-base-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DenimWearSection;
