const WovenFabricSources = () => {
  const localMills = [
    "NZ Textile",
    "NZ Denim",
    "Nice Textile",
    "Nice Denim",
    "Unifil Composite Dyeing",
    "TRU Fabrics Ltd",
    "South China Dyeing",
  ];

  const importSources = ["China", "India", "Pakistan"];

  return (
    <section className="px-6 py-12 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Trusted Woven Fabric Sources</h2>
      <hr className="mb-6"/>
        <p className="text-lg mb-8">
          TRUE FASHION BD partners with leading local mills to ensure top-quality woven fabrics.
          These mills are known for their compliance, consistency, and innovation.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {localMills.map((mill) => (
            <div
              key={mill}
              className="bg-base-200 p-4 rounded-lg shadow-sm hover:shadow transition-shadow"
            >
              <p className="font-medium">{mill}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          <span className="font-semibold">Sourcing Ratio:</span> 70% Local | 30% Imported from{" "}
          {importSources.join(", ")}
        </p>
      </div>
    </section>
  );
};

export default WovenFabricSources;
