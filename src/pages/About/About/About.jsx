import React from 'react';
import Banner from '../Banner/Banner';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import VisionMission from '../VissionMission/VissionMission';
import MarketReach from '../MarketReach/MarketReach';
import OurAssociates from '../OurAssociates/OurAssociates';
import WhatSetsUsApart from '../WhatSetsUsApart/WhatSetsUsApart';

const About = () => {
    return (
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
    );
};

export default About;