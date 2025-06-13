import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace with actual image paths
import boxer from "../../../assets/images/Products/Boxer&SwimWears/boxer.jpg";
import swimShorts from "../../../assets/images/Products/Boxer&SwimWears/swim_shorts.jpg";
import briefs from "../../../assets/images/Products/Boxer&SwimWears/briefs.jpeg";
import swimTrunks from "../../../assets/images/Products/Boxer&SwimWears/swim_trunks.jpg";

// Custom arrows
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

const boxerItems = [
  { name: "Boxer Shorts", image: boxer },
  { name: "Swim Shorts", image: swimShorts },
  { name: "Briefs", image: briefs },
  { name: "Swim Trunks", image: swimTrunks },
];

const BoxerAndSwimwearSection = () => {
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
    <section id="boxer" className="py-12 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Comfortable Boxer & Swimwear Collection
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Discover a range of stylish and breathable boxer shorts and swimwear crafted for comfort and functionality.
        </p>

        <Slider {...settings}>
          {boxerItems.map((item, index) => (
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

export default BoxerAndSwimwearSection;
