// src/components/GallerySections/BoxerSwimwearGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import boxer1 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer1.avif";
import boxer2 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer2.avif";
import boxer4 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer4.webp";
import boxer5 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer5.webp";
import boxer6 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer6.webp";
import boxer7 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer7.webp";
import boxer8 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer8.jpg";
import boxer9 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer9.jpeg";
import boxer10 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer10.webp";
import boxer11 from "../../../../assets/images/Gallery/Products Categories/Boxers and SwimWears/boxer11.jpg";


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

const BoxerAndSwimwears = () => {
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
    boxer1, boxer2, boxer4,
    boxer5, boxer6, boxer7,
    boxer8, boxer9, boxer10,
    boxer11,
    
  ];

  return (
    <div>
      <section id="boxerswimweargallery" className="mb-20 mt-20 relative">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Boxer & Swimwear Collection</h3>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Explore our versatile boxer and swimwear collection, crafted for comfort and style whether you’re lounging or hitting the beach.
          </p>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Boxer or Swimwear ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default BoxerAndSwimwears;
