// src/components/GallerySections/TextileMachineryGallery.jsx

import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import your images
import mach1 from "../../../assets/images/Gallery/TextileMachinery/mach1.jpg";
import mach2 from "../../../assets/images/Gallery/TextileMachinery/mach2.webp";
import mach3 from "../../../assets/images/Gallery/TextileMachinery/mach3.jpg";
import mach4 from "../../../assets/images/Gallery/TextileMachinery/mach4.jpg";
import mach5 from "../../../assets/images/Gallery/TextileMachinery/mach5.jpeg";
import mach6 from "../../../assets/images/Gallery/TextileMachinery/mach6.avif";
import mach8 from "../../../assets/images/Gallery/TextileMachinery/mach8.avif";
import mach9 from "../../../assets/images/Gallery/TextileMachinery/mach9.jpg";
import mach10 from "../../../assets/images/Gallery/TextileMachinery/mach10.jpg";
// Add more as needed

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2">
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2">
    <FaChevronRight />
  </div>
);

const TextileMachinery = () => {
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

  const images = [mach1, mach2, mach3, mach4, mach5, mach6, mach8, mach9, mach10, mach2, /* Add more */];

  return (
    <section id="textilemachinerygallery" className="mb-20 mt-20 relative">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold">Textile Machinery</h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
          Discover our advanced textile machinery used in our production process to ensure efficiency, precision, and quality.
        </p>
      </div>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Machine ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TextileMachinery;
