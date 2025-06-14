// src/components/GallerySections/DenimwearGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import denim from "../../../../assets/images/Gallery/Products Categories/Denims/denim.png";
import denim1 from "../../../../assets/images/Gallery/Products Categories/Denims/denim1.avif";
import denim2 from "../../../../assets/images/Gallery/Products Categories/Denims/denim2.avif";
import denim3 from "../../../../assets/images/Gallery/Products Categories/Denims/denims3.webp";
import denim4 from "../../../../assets/images/Gallery/Products Categories/Denims/denim4.webp";
import denim5 from "../../../../assets/images/Gallery/Products Categories/Denims/denim5.jpg";
import denim6 from "../../../../assets/images/Gallery/Products Categories/Denims/denim6.jpg";
import denim7 from "../../../../assets/images/Gallery/Products Categories/Denims/denim7.jpg";
import denim8 from "../../../../assets/images/Gallery/Products Categories/Denims/denim8.jpg";
import denim9 from "../../../../assets/images/Gallery/Products Categories/Denims/denim9.jpg";
import denim10 from "../../../../assets/images/Gallery/Products Categories/Denims/denim10.webp";
import denim11 from "../../../../assets/images/Gallery/Products Categories/Denims/denim11.webp";
import denim12 from "../../../../assets/images/Gallery/Products Categories/Denims/denim12.jpg";
import denim13 from "../../../../assets/images/Gallery/Products Categories/Denims/denim13.avif";

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

const Denims = () => {
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
  
    denim,
    denim1, denim2, denim3, denim4,
    denim5, denim6, denim7, denim8,
    denim9, denim10, denim11, denim12,
    denim13, 
  ];

  return (
    <div>
      <section id="denimweargallery" className="mb-20 mt-20 relative">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Denimwear Collection</h3>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Explore our durable and trend-forward denimwear — including jeans, jackets, and skirts — crafted from premium denim fabric.
          </p>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Denimwear ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Denims;
