import { Helmet } from 'react-helmet';
import ContactInfo from '../ContactInfo/ContactInfo';

const Contact = () => {
    return (
        <div>
            <Helmet>
             <title> Contact | TRUE FASHION BD</title>
           </Helmet>
        <div>
            <ContactInfo></ContactInfo>
        </div>
        </div>
    );
};

export default Contact;