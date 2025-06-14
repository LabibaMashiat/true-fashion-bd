// src/components/GallerySections/WovengarmentsGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import woven1 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven1.jpeg";
import woven2 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven2.jpeg";
import woven3 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven3.jpg";
import woven4 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven4.jpg";
import woven5 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven5.jpg";
import woven6 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven6.avif";
import woven7 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven7.avif";
import woven8 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven8.avif";
import woven10 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven10.jpg";
import woven9 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven9.jpg";
import woven11 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven11.jpg";
import woven12 from "../../../../assets/images/Gallery/Products Categories/Woven Garments/woven12.jpg";

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

const WovenGarments = () => {
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
    woven1, woven2, woven3, woven4,
    woven5, woven6, woven7, woven8,
    woven9, woven10, woven11, woven12,
  ];

  return (
    <div>
      <section id="wovengarmentsgallery" className="mb-20 mt-20 relative">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Woven Garments Collection</h3>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Discover our woven garments collection featuring stylish shirts, formalwear, and tailored pieces crafted for quality and elegance.
          </p>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Woven Garment ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default WovenGarments;
