import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import KnitwearSection from '../KnitwearSection/KnitwearSection';
import WovenGarmentsSection from '../WovenGarmentsSection/WovenGarmentsSection';
import DenimWearSection from '../DenimWearSection/DenimWearSection';
import BoxerAndSwimwearSection from '../BoxerAndSwimwearSection/BoxerAndSwimwearSection';
import SweatersSection from '../SweatersSection/SweatersSection';

const Products = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <KnitwearSection></KnitwearSection>
            <WovenGarmentsSection></WovenGarmentsSection>
            <DenimWearSection></DenimWearSection>
            <BoxerAndSwimwearSection></BoxerAndSwimwearSection>
            <SweatersSection></SweatersSection>
        </div>
    );
};

export default Products;