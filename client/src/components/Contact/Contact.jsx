import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterSquare />
        </div>
      </div>
    </div>
  );
};

export default Contact;
