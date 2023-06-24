import Exchange from './assets/exchange.svg';
import { handleButtonClick } from './App';

const Hero = () => {
  return (
    <div className="hero-section container ">
      <div className="hero-textBox animate__animated animate__fadeInRight">
        <h1>
          مرحبًا بك في <span className="special">الوسيط</span> الإلكتروني
        </h1>
        <p>
          احجز وسيطًا إلكترونيًا لتسهيل وتأمين عملية البيع و الشراء بثقة وأمان.{' '}
        </p>
        <a onClick={handleButtonClick} className="cta link">
          احجز وسيطًا الآن
        </a>
      </div>
      <img
        className="hero-imgBox animate__animated animate__fadeInLeft"
        src={Exchange}
      ></img>
    </div>
  );
};
export default Hero;
