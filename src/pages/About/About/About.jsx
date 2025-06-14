import { Helmet } from "react-helmet";
import Banner from '../Banner/Banner';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import VisionMission from '../VissionMission/VissionMission';
import MarketReach from '../MarketReach/MarketReach';
import OurAssociates from '../OurAssociates/OurAssociates';
import WhatSetsUsApart from '../WhatSetsUsApart/WhatSetsUsApart';

const About = () => {
    return (
       <div>
         <Helmet>
             <title>About | TRUE FASHION BD</title>
           </Helmet>
        <div>
            <Banner></Banner>
            <div className='mt-12'>
                <WhoWeAre></WhoWeAre>
                <MarketReach></MarketReach>
                <OurAssociates></OurAssociates>
                <WhatSetsUsApart></WhatSetsUsApart>
            <VisionMission></VisionMission>
            </div>
        </div>
       </div>
    );
};

export default About;