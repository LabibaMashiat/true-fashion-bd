// ProductCategories.jsx
import { Link as ScrollLink } from "react-scroll";

import knitwearImg from "../../../assets/images/Products/Knitwears/knitwears.jpg";
import wovenImg from "../../../assets/images/Products/WovenGarments/woven_garments.jpg";
import denimImg from "../../../assets/images/Products/Denims/Denims.avif";
import boxerImg from "../../../assets/images/Products/Boxer&SwimWears/boxer_swim_wears.jpg";
import sweaterImg from "../../../assets/images/Products/Sweaters/sweaters.jpg";

const categories = [
  { name: "Knitwear", image: knitwearImg, id: "knitwear" },
  { name: "Woven Garments", image: wovenImg, id: "woven" },
  { name: "Denim Wear", image: denimImg, id: "denim" },
  { name: "Boxer & Swimwear", image: boxerImg, id: "boxer" },
  { name: "Sweaters", image: sweaterImg, id: "sweaters" },
];

const ProductCategories = () => {
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Product Categories</h2>
  <hr className="mb-6"/>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(({ name, image, id }) => (
            <div key={id} className="card bg-base-100 shadow-md hover:shadow-xl">
              <figure>
                <img src={image} alt={name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{name}</h3>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="btn btn-primary btn-sm mt-3 cursor-pointer"
                >
                  Explore
                </ScrollLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
