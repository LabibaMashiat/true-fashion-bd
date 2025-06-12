import Flag from "react-world-flags";

const GlobalReach = () => {
  const regions = [
    {
      name: "North America",
      codes: ["US", "CA", "MX"],
    },
    {
      name: "Europe",
      codes: ["GB", "DE", "FR", "IT"],
    },
    {
      name: "South Africa",
      codes: ["ZA"],
    },
    {
      name: "Australia",
      codes: ["AU"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4"> Global Market Reach</h2>
  <hr />
      <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
        TRUE FASHION BD serves a global clientele, primarily focusing on fashion
        brands and retailers in North America, Europe, South Africa, and Australia.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {regions.map((region, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 w-52 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex gap-2 mb-3">
              {region.codes.map((code) => (
                <Flag
                  key={code}
                  code={code}
                  style={{ width: 40, height: 30, borderRadius: 4 }}
                  alt={code}
                />
              ))}
            </div>
            <p className="text-lg font-semibold">{region.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalReach;
