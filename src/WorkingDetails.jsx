import {
  ContactUs,
  Whatsapp,
  TradeDetails,
  ScanProduct,
  TradeDone,
  Fees,
} from './DetailsContainer';

import Chat from './assets/chat.svg';
import Deal from './assets/deal.svg';
import Safe from './assets/safe.svg';

const WorkingDetails = () => {
  return (
    <div id="howitsworks" className="container">
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#555' }}>
          نحن نسعى جاهدين لتوفير تجربة سهلة وموثوقة لعملية البيع و الشراء.
        </p>
        <h1 className="section-title">كيف نعمل</h1>
      </div>
      <article className="worksDetails">
        {/*  */}
        <div className="posRelative" data-aos="fade-down" data-aos-delay="200">
          <h1 className="rank">01</h1>
          <div className="gridTextBox">
            <ContactUs />
            <Whatsapp />
          </div>
        </div>
        <img
          data-aos="fade-down"
          data-aos-delay="200"
          className="works-imgBox"
          src={Chat}
        ></img>
        {/*  */}
        <img
          data-aos="fade-down"
          data-aos-delay="200"
          className="works-imgBox"
          src={Safe}
        ></img>
        <div className="posRelative" data-aos="fade-down" data-aos-delay="200">
          <h1 className="rank">02</h1>
          <div className="gridTextBox">
            <TradeDetails />
            <ScanProduct />
          </div>
        </div>

        {/*  */}
        <div className="posRelative" data-aos="fade-down" data-aos-delay="200">
          <h1 className="rank">03</h1>
          <div className="gridTextBox">
            <TradeDone />
            <Fees />
          </div>
        </div>
        <img
          data-aos="fade-down"
          data-aos-delay="200"
          className="works-imgBox"
          src={Deal}
        ></img>
      </article>
    </div>
  );
};

export default WorkingDetails;
