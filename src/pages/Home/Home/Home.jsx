import Banner from "../Banner/Banner";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import CoreServices from "../CoreServices/CoreServices";
import GlobalReach from "../GlobalReach/GlobalReach";
import OurProducts from "../OurProducts/OurProducts";
import QuoteSection from "../QuoteSection/QuoteSection";
import Sustainability from "../Sustainability/Sustainability";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           
           <div className="mt-14">
           
           <CompanyOverview></CompanyOverview>
           <CoreServices></CoreServices>
           <OurProducts></OurProducts>
           <WhyChooseUs></WhyChooseUs>
           <GlobalReach></GlobalReach>
           <Sustainability></Sustainability>
           </div>
        </div>
    );
};

export default Home;