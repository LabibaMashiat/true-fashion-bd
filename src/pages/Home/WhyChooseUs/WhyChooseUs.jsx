import { FaIndustry, FaCertificate, FaDollarSign, FaLeaf, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaIndustry className="text-3xl text-primary" />,
    title: 'Industry Expertise',
    description: 'Over a decade of experience in the apparel industry.',
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    title: 'Certified Factory Network',
    description: 'Partnered with audited factories ensuring compliance and quality.',
  },
  {
    icon: <FaDollarSign className="text-3xl text-primary" />,
    title: 'Competitive Pricing',
    description: 'Best value without compromising on quality.',
  },
  {
    icon: <FaLeaf className="text-3xl text-primary" />,
    title: 'Sustainability Commitment',
    description: 'Eco-friendly practices and ethical sourcing.',
  },
  {
    icon: <FaHandshake className="text-3xl text-primary" />,
    title: 'Personalized Service',
    description: 'Tailored solutions to meet your unique needs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-base-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Why Choose <span className='text-primary'>TRUE FASHION BD</span></h2>
  <hr />
       
        <p className="text-gray-600 mt-2">
          Trusted by global fashion brands for quality, reliability, and value.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md p-6 rounded-xl hover:shadow-xl transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
