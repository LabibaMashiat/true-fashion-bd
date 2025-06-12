import { Link } from "react-router-dom";
import factoryImage from "../../../assets/images/Home/CompanyOverview/garments_pic5.jpg"; // Replace with your actual image path

const CompanyOverview = () => {
  return (
    <section className="py-12 bg-base-200">
     <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Left Side - Image */}
  <div className="w-full order-2 md:order-1">
    <img
      src={factoryImage}
      alt="TRUE FASHION BD Office or Factory"
      className="rounded-2xl shadow-lg w-full object-cover"
    />
  </div>

  {/* Right Side - Content */}
  <div className="order-1 md:order-2">
    <div className="text-justify leading-relaxed break-words whitespace-normal">
      <h2 className="sm:text-3xl md:text-4xl font-semibold mb-4">Company Overview</h2>
      <hr />
      <p className="text-base-content mt-4">
        <span className="font-semibold">TRUE FASHION BD</span> is a trusted garments sourcing agency based in Bangladesh.
        We provide end-to-end solutions — from product development to final shipment — for global fashion brands.
        <br /><br />
        Backed by a strong network of certified factories, we deliver quality, sustainability, and competitive pricing.
        Let us be your reliable partner in the ever-evolving fashion industry.
      </p>
      <Link to="/about" className="btn btn-primary mt-6">
        Learn More
      </Link>
    </div>
  </div>
</div>

    </section>
  );
};

export default CompanyOverview;
