import { BsShieldCheck } from 'react-icons/bs';
import { TbExchange } from 'react-icons/tb';
import { MdSupportAgent } from 'react-icons/md';

const trust = {
  title: 'آمان وثقة',
  description:
    ' نحن نهتم بسلامة معاملاتك ونسعى لتأمين عملية التبادل بين البائع والمشتري.',
  icon: <BsShieldCheck />,
};

const easy = {
  title: 'السهولة فالتعامل',
  description:
    ' يتيح موقعنا واجهة بسيطة وسهلة الاستخدام لحجز الوسيط وتنفيذ عملية التبادل ببساطة',
  icon: <TbExchange />,
};

const support = {
  title: 'دعم متخصص',
  description:
    'نتوفر  على فريق الدعم للإجابة على استفساراتك وتقديم المساعدة على مدار الساعة.',
  icon: <MdSupportAgent />,
};

const Features = () => {
  return (
    <div id="features" style={{ textAlign: 'center' }} className="container">
      <h1 className="section-title">مميزات الوسيط</h1>
      <article className="features">
        <FeaturesBox
          title={easy.title}
          description={easy.description}
          icon={easy.icon}
          animation={'fade-down'}
        />

        <FeaturesBox
          title={trust.title}
          description={trust.description}
          icon={trust.icon}
          highlight={'highlight'}
          animation={'fade-down'}
        />

        <FeaturesBox
          title={support.title}
          description={support.description}
          icon={support.icon}
          animation={'fade-down'}
        />
      </article>
    </div>
  );
};

const FeaturesBox = ({ title, description, icon, highlight, animation }) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay="300"
      className={`features-box ${highlight}`}
    >
      <div className="features-icon">{icon}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Features;
