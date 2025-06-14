import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your product images
import knitwears from "../../../assets/images/Products/Knitwears/knitwears.jpg";
import wovenwears from "../../../assets/images/Products/WovenGarments/woven_garments.jpg";
import denims from "../../../assets/images/Products/Denims/Denims.avif";
import boxer_and_swimwears from "../../../assets/images/Products/Boxer&SwimWears/boxer_swim_wears.jpg";
import sweaters from "../../../assets/images/Products/Sweaters/sweaters.jpg";

// Custom arrows
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-white lg:bg-primary lg:rounded-3xl lg:p-4"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl  text-white lg:bg-primary lg:rounded-3xl lg:p-4"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const products = [
  {
    id: 1,
    name: "Knitwear",
    description: "T-shirts, polo shirts, hoodies, and more.",
    image: knitwears,
    link: "/products",
  },
  {
    id: 2,
    name: "Woven Garments",
    description: "Shirts, blouses, jackets, pants, and more.",
    image: wovenwears,
    link: "/products",
  },
  {
    id: 3,
    name: "Denim Wear",
    description: "Jeans, skirts, jackets with trendy denim styles.",
    image: denims,
    link: "/products",
  },
  {
    id: 4,
    name: "Boxer & Swimwear",
    description: "Comfortable and stylish boxer shorts and swimwear.",
    image: boxer_and_swimwears,
    link: "/products",
  },
  {
    id: 5,
    name: "Sweaters",
    description: "Warm, cozy sweaters with quality craftsmanship.",
    image: sweaters,
    link: "/products",
  },
];

const OurProducts = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
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
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Our Products</h2>
  <hr />
      <p className="text-center text-lg text-gray-600 mb-12">
        Explore our diverse range of garment categories tailored for quality and style.
      </p>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg h-full">
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body text-center p-4">
                <h3 className="card-title text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to={product.link} className="btn btn-primary btn-sm">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurProducts;
