import { BadgeCheck, Factory, DollarSign, Users } from "lucide-react";
import rsc from "../../../assets/images/Certified Organization/rso.jpg";
import bsci from "../../../assets/images/Certified Organization/bsci.JPG";
import wrap from "../../../assets/images/Certified Organization/wrap.png";
import grs from "../../../assets/images/Certified Organization/grs.jpg";
import sedex from "../../../assets/images/Certified Organization/sedex.jpg";
import oekotex from "../../../assets/images/Certified Organization/oeko.jpg";
import bci from "../../../assets/images/Certified Organization/bci.jpg";
import gots from "../../../assets/images/Certified Organization/gots.jpg";
import iso from "../../../assets/images/Certified Organization/iso.webp";
import organic from "../../../assets/images/Certified Organization/organic100.webp";

const features = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: "Expertise",
    desc: "Over a decade of experience in the apparel industry.",
  },
  {
    icon: <Factory className="w-6 h-6 text-primary" />,
    title: "Factory Network",
    desc: "Strong relationships with certified factories.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: "Competitive Pricing",
    desc: "Offering competitive prices without compromising quality.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Personalized Service",
    desc: "Tailored solutions to meet clients' unique needs.",
  },
];

const certifications = [
  rsc, bsci, wrap, grs, sedex, oekotex, bci, gots, iso, organic,
];


const WhatSetsUsApart = () => {
    return (
        <div>
             <section className="px-6 py-12 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
       
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">What Sets Us Apart</h2>
      <hr className="mb-6" />
        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 mb-12">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-base-100 p-6 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-base">{desc}</p>
            </div>
          ))}
        </div>

        {/* Certification Logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 items-center justify-items-center">
          {certifications.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="certification"
              className="h-12 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default WhatSetsUsApart;