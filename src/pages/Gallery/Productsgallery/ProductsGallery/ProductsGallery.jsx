import React from 'react';
import Knitwear from '../Knitwear/Knitwear';
import WovenGarments from '../WovenGarments/WovenGarments';
import Denims from '../Denims/Denims';
import Sweater from '../Sweater/Sweater';
import BoxerAndSwimWears from '../BoxerAndSwimWears/BoxerAndSwimWears';

const ProductsGallery = () => {
    return (
        <div>
            <Knitwear></Knitwear>
            <WovenGarments></WovenGarments>
            <Denims></Denims>
            <Sweater></Sweater>
            <BoxerAndSwimWears></BoxerAndSwimWears>
            
        </div>
    );
};

export default ProductsGallery;