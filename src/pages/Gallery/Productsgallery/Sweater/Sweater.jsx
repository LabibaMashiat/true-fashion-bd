// src/components/GallerySections/SweatersGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import sweater1 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater1.jpg";
import sweater2 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater2.jpg";
import sweater3 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater3.webp";
import sweater4 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater4.webp";
import sweater5 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater5.avif";
import sweater6 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater6.jpg";
import sweater7 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater7.jpg";
import sweater8 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater8.webp";
import sweater9 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater9.webp";
import sweater10 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater10.webp";
import sweater11 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater11.webp";
import sweater12 from "../../../../assets/images/Gallery/Products Categories/Sweaters/sweater12.webp";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2"
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2"
  >
    <FaChevronRight />
  </div>
);

const Sweater = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [
    sweater1, sweater2, sweater3, sweater4,
    sweater5, sweater6, sweater7, sweater8,
    sweater9, sweater10, sweater11, sweater12,
  ];

  return (
    <div>
      <section id="sweatersgallery" className="mb-20 mt-20 relative">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Sweaters Collection</h3>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Discover our cozy sweaters collection, crafted with premium yarns for warmth and style, perfect for every season.
          </p>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Sweater ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Sweater;
