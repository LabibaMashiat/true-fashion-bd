import { Helmet } from "react-helmet";

import Banner from "../Banner/Banner";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import CoreServices from "../CoreServices/CoreServices";
import GlobalReach from "../GlobalReach/GlobalReach";
import OurProducts from "../OurProducts/OurProducts";
import Sustainability from "../Sustainability/Sustainability";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WovenFabricSources from "../WovenFabricSources/WovenFabricSources";

const Home = () => {
    return (
        <div>
           <Helmet>
             <title>Home | TRUE FASHION BD</title>
           </Helmet>

           <Banner />

           <div className="mt-14">
             <CompanyOverview />
             <CoreServices />
             <OurProducts />
             <WovenFabricSources />
             <WhyChooseUs />
             <GlobalReach />
             <Sustainability />
           </div>
        </div>
    );
};

export default Home;
