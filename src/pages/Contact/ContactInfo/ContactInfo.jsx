import { FaPhoneAlt, FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function ContactInfo() {
  return (
  <div>
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      {/* Page Heading */}
      <div className="text-center mb-10">
         <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Contact Info</h2>
      <hr className="mb-6" /> <p className="text-gray-600 mt-2">Innovative & Sustainable Solutions...</p>
      </div>

      {/* Business Head Info */}
      <div className="text-center md:text-left mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Mohammad Showkot Hossain</h2>
        <p className="text-gray-600 text-base">Business Head</p>
      </div>

      {/* Main Info Card */}
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-lg mb-12">
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary" />
            <p className="text-gray-800 font-medium">
              <span className="font-semibold">Mobile:</span>{" "}
              <a
                href="tel:+8801711906359"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                +8801711906359 <FaWhatsapp className="text-green-500" />
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary" />
            <p className="text-gray-800 font-medium">
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:showkot@tradefastint.com"
                className="text-blue-600 hover:underline"
              >
                showkot@tradefastint.com
              </a>
            </p>
          </div>

          
        </div>

        {/* Bangladesh Office */}
        <div className="flex gap-4">
          <MdLocationOn className="text-primary text-2xl" />
          <div>
            <p className="font-semibold text-gray-800">Head Office (Bangladesh)</p>
            <p className="text-gray-600">
              House # 28 (4th Floor), Road# 7/C,<br />
              Sector #9, Uttara, Dhaka-1230, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Other Offices */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* UK Office */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-bold text-primary mb-2">Overseas Office (UK)</h2>
          <p className="text-gray-700">
            55 High Street Royston<br />
            Hertfordshire SG8 9AW,<br />
            United Kingdom
          </p>
        </div>

        {/* China Office */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-bold text-primary mb-2">China Sourcing Office</h2>
          <p className="text-gray-700">
            No.345, Building 4, Yunhuicheng,<br />
            Wuchang Subdistrict, Yuhang Area,<br />
            Hangzhou City, China
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          className="w-full h-72 rounded-2xl shadow-lg"
          src="https://www.google.com/maps?q=Uttara,Dhaka,Bangladesh&output=embed"
          allowFullScreen=""
          loading="lazy"
          title="Company Location Map"
        ></iframe>
      </div>
    </div>
  </div>
  );
}
