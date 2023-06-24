import { handleButtonClick } from './App';
const Fees = () => {
  return (
    <div id="fees" style={{ borderBottom: '0' }} className="container">
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#555' }}>
          نقدر ثقتكم بنا ونسعى جاهدين لضمان أن عملية التبادل تتم بأمان وسلاسة.
        </p>
        <h1 className="section-title">عمولة الوسيط</h1>
      </div>
      <article data-aos="zoom-up" data-aos-delay="300" className="fees-section">
        <div>
          <p className="fees-rule">
            إذا كان ثمن البيع أقل من 50$، ستكون{' '}
            <span className="special">عمولة الوسيط 5$</span>.{' '}
          </p>
          <p className="fees-rule">
            إذا كان ثمن البيع أكثر من 50$، ستكون{' '}
            <span className="special">عمولة الوسيط 10$</span>.{' '}
          </p>
          <p className="fees-rule">
            تعتبر هذه الرسوم تعويضًا عن خدمات الوساطة التي نقدمها لكم.
          </p>
          <p className="fees-rule">
            سيتم تحصيل عمولة الوسيط من <span className="special">المشتري</span>{' '}
            وفقًا <span className="special">للقيمة المتفق عليها</span>.{' '}
          </p>
          <a onClick={handleButtonClick} className="cta link fees-cta">
            قم بحجز وسيطك الآن
          </a>
        </div>
        <h2 className="sub">
          نحن نضمن لكم تجربة آمنة وموثوقة في عملية التبادل، ونحرص على توفير خدمة
          عالية الجودة لعملائنا.
        </h2>
      </article>
    </div>
  );
};
export default Fees;
