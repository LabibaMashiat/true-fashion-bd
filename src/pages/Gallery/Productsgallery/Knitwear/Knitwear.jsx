// src/components/GallerySections/KnitwearGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import knit1 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear1.avif";
import knit2 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear2.avif";
import knit3 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear3.avif";
import knit4 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear4.avif";
import knit5 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear5.avif";
import knit6 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear6.avif";
import knit7 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear7.avif";
import knit8 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear8.avif";
import knit9 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear9.jpg";
import knit10 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear10.avif";
import knit11 from "../../../../assets/images/Gallery/Products Categories/Knitwear/knitwear11.jpg";

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

const Knitwear = () => {
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
    knit1, knit2, knit3, knit4, knit5, knit6,
    knit7, knit8, knit9, knit10, knit11,
  ];

  return (
   <div>
     <section id="knitweargallery" className="mb-20 mt-20 relative">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold">Knitwear Collection</h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
          Explore our range of premium knitwear including t-shirts, hoodies, and lightweight sweaters designed for comfort and style.
        </p>
      </div>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Knitwear ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </section>
   </div>
  );
};

export default Knitwear;
