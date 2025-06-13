import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace with your actual image paths
import cardigan from "../../../assets/images/Products/Sweaters/cardigan.jpg";
import pullover from "../../../assets/images/Products/Sweaters/pullover.webp";
import crewneck from "../../../assets/images/Products/Sweaters/crewneck3.avif";
import turtleneck from "../../../assets/images/Products/Sweaters/turtleneck2.webp";

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

const sweaterItems = [
  { name: "Cardigan", image: cardigan },
  { name: "Pullover", image: pullover },
  { name: "Crew Neck", image: crewneck },
  { name: "Turtleneck", image: turtleneck },
];

const SweatersSection = () => {
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
    <section id="sweaters" className="py-12 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Cozy & Stylish Sweater Collection
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Browse our range of premium sweaters including cardigans, pullovers, and turtlenecks designed for warmth and style.
        </p>

        <Slider {...settings}>
          {sweaterItems.map((item, index) => (
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

export default SweatersSection;
