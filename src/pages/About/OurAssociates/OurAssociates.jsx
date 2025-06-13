import { Building2 } from "lucide-react"; // Optional icon from lucide-react

const associates = {
  Woven: [
    "Arrival Fashion Ltd",
    "Tivoli Apparels Ltd",
    "Provati Apparels Limited",
    "Purbachal Apparels Ltd",
    "Abalone Fashion Limited",
  ],
  Knit: [
    "Confidence Texwear Ltd",
    "B. Brothers Garments Co. Ltd",
  ],
  Sweater: [
    "Corus Fashion Ltd",
  ],
};

const OurAssociates = () => {
  return (
    <section className="px-6 py-12 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto">
       
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Our Associates</h2>
      <hr className="mb-6"/>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(associates).map(([category, companies]) => (
            <div key={category} className="bg-base-200 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="text-primary" />
                {category}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {companies.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAssociates;
