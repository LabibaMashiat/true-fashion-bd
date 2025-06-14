import { Helmet } from 'react-helmet';
import ProductsGallery from '../Productsgallery/ProductsGallery/ProductsGallery';
import TextileMachinery from '../TextileMachinery/TextileMachinery';

const Gallery = () => {
    return (
        <div>
            <Helmet>
             <title>Gallery | TRUE FASHION BD</title>
           </Helmet>
            <div>
                <ProductsGallery></ProductsGallery>
                <TextileMachinery></TextileMachinery>
            </div>
        </div>
    );
};

export default Gallery;