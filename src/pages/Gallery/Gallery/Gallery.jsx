import { Helmet } from 'react-helmet';
import ProductsGallery from '../Productsgallery/ProductsGallery/ProductsGallery';

const Gallery = () => {
    return (
        <div>
            <Helmet>
             <title>Gallery | TRUE FASHION BD</title>
           </Helmet>
            <div>
                <ProductsGallery></ProductsGallery>
            </div>
        </div>
    );
};

export default Gallery;