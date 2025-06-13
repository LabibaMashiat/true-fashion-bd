
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images (replace with your actual image paths)
import tshirt from "../../../assets/images/Products/Knitwears/tshirt.jpg";
import hoodie from "../../../assets/images/Products/Knitwears/hoodie.jpg";
import polo from "../../../assets/images/Products/Knitwears/polo.jpg";
import tanktop from "../../../assets/images/Products/Knitwears/tanktop.jpg";

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

const knitwearItems = [
  { name: "T-Shirt", image: tshirt },
  { name: "Polo Shirt", image: polo },
  { name: "Hoodie", image: hoodie },
  { name: "Tank Top", image: tanktop },
];

const KnitwearSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // medium screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // small screens
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="knitwear"  // Added id here for scroll target
      className="py-12 bg-base-100 text-base-content"
    >
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Versatile & Comfortable Knitwear Collection
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Discover our premium knitwear range including T-shirts, polo shirts, hoodies, and more — crafted for comfort and contemporary style.
        </p>

        <Slider {...settings}>
          {knitwearItems.map((item, index) => (
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

export default KnitwearSlider;
