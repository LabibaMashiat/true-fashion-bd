import { Link } from "react-router-dom";
const CoreServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Our Core Services</h2>
  <hr />
      <p className="text-center text-lg mb-10 text-gray-700">
        Tailored solutions to meet the needs of global fashion brands.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800">
        <div>
          <h3 className="text-xl font-semibold mb-2">Sourcing & Procurement</h3>
          <p>Connecting you with trusted certified factories.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Product Development</h3>
          <p>Bringing your designs from concept to reality.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
          <p>Maintaining the highest global standards.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Production Management</h3>
          <p>Ensuring smooth and timely delivery.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Logistics & Shipping</h3>
          <p>Seamless international shipping solutions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Sustainability Practices</h3>
          <p>Committed to eco-friendly and ethical sourcing.</p>
        </div>
      </div>

    </section>
  );
};

export default CoreServices;
