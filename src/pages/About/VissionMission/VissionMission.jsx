import React from "react";
import { Eye, Target } from "lucide-react"; // Lucide icons

const VisionMission = () => {
  return (
    <section className="px-6 py-12 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto text-center">
          <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Vision & Mission</h2>
      <hr className="mb-6" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Vision */}
          <div className="bg-base-200 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <Eye className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be the global leader in garment sourcing, offering innovative and sustainable
              solutions that meet the ever-evolving demands of the fashion industry.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-base-200 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To establish long-term relationships with clients by delivering high-quality garments,
              ensuring transparency, and fostering growth for both our partners and suppliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
