import all_mankind from "../../../assets/images/About/MarketReach/7_for_all_Mankind_Logo.jpg";
import store_21 from "../../../assets/images/About/MarketReach/store_21.jpg";
import roxy from "../../../assets/images/About/MarketReach/roxy.jpg";
import new_yorker from "../../../assets/images/About/MarketReach/newyorker.jpg";
import magugu from "../../../assets/images/About/MarketReach/magugu2.jpg";
import blanco from "../../../assets/images/About/MarketReach/suiteblanco.jpg";

const brands = [
  { name: "All Mankind", logo: all_mankind },
  { name: "Store Twenty One", logo: store_21 },
  { name: "Roxy", logo: roxy },
  { name: "New Yorker", logo: new_yorker },
  { name: "The Magugu", logo: magugu },
  { name: "Suiteblanco", logo: blanco },
];

const MarketReach = () => {
  return (
    <section className="px-6 py-12 bg-base-200 text-base-content">
      <div className="max-w-5xl mx-auto text-center">
       
         <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Market Reach</h2>
      <hr className="mb-6" />
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          TRUE FASHION BD serves a global clientele, primarily focusing on fashion brands and retailers in North America, Europe, South Africa, and Australia. We ensure our clients receive fashion-forward garments that meet their market needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map(({ name, logo }) => (
            <div
              key={name}
              className="bg-base-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex items-center justify-center"
              title={name}
            >
              <div className="bg-white rounded flex items-center justify-center h-20 w-full">
  <img
    src={logo}
    alt={name}
    className="max-h-full max-w-full object-contain"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketReach;
