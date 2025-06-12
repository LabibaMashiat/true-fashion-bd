import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QuoteSection = () => {
    return (
        <div className="text-justify leading-relaxed break-words whitespace-normal">
             <div className='max-w-full h-30 bg-blue-100 flex'>
           <h1> <FontAwesomeIcon  className=" pl-6 pt-4 pb-2 text-white opacity-80" icon={faQuoteLeft} size="3x"  /></h1>
           <div className='m-auto p-5'>
            <h2 className="text-center sm:text-sm md:text-2xl">True Fashion BD turns apparel visions into reality — connecting global brands with the finest craftsmanship of Bangladesh.</h2>
           
           </div>
        </div>
        </div>
       
    );
};

export default QuoteSection;