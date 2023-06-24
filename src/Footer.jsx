import { FaFacebookMessenger, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">
        لا تتردد في الاتصال بنا لأي استفسار. يمكنكم التواصل معنا مباشرة عبر :
      </p>
      <div className="footer-icons">
        <a
          style={{ color: 'white' }}
          href="https://www.facebook.com/m.elalouani/"
          target={`_blank`}
        >
          <FaFacebookMessenger />
        </a>
        <a
          style={{ color: 'white' }}
          href="https://api.whatsapp.com/send?phone=212679827970"
          target={`_blank`}
        >
          <FaWhatsappSquare />
        </a>
      </div>
    </div>
  );
};
export default Footer;
