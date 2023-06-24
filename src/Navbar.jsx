import { useRef } from 'react';
import { BsList, BsXLg } from 'react-icons/bs';
import { handleButtonClick } from './App';

const Navbar = () => {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  return (
    <div className="nav-section">
      <h1 className="logo">
        <a
          style={{
            textDecoration: 'none',
            color: '#339af0',
            fontSize: '4rem',
          }}
          href="#"
        >
          الوسيط
        </a>
      </h1>

      <nav ref={navRef} className="nav-links">
        <a className="link" href="#howitsworks">
          كيف نعمل
        </a>
        <a className="link" href="#features">
          المزايا
        </a>
        <a className="link" href="#fees">
          عمولة الوسيط
        </a>
        <a onClick={handleButtonClick} className="link cta">
          اطلب الآن
        </a>

        <button className="close-btn btn" onClick={showNav}>
          <BsXLg />
        </button>
      </nav>

      <button className="open-btn btn" onClick={showNav}>
        <BsList />
      </button>
    </div>
  );
};
export default Navbar;
