import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineScan } from 'react-icons/ai';
import { BiConversation } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiTransferAlt } from 'react-icons/bi';
import { TbReportMoney } from 'react-icons/tb';

const DetailsContainer = ({ title, description, icon, rank }) => {
  return (
    <div>
      <div className="works-titleTextBox">
        <div className="works-icon">{icon}</div>
        <h1 className="works-title">{title}</h1>
      </div>
      <p className="works-description">{description}</p>
    </div>
  );
};

export const ContactUs = () => {
  return (
    <DetailsContainer
      title={'قم بطلب الوسيط عبر الشات'}
      description={
        'قم بزيارة موقعنا وابدأ المحادثة عبر زر الاتصال المباشر أو أرسل رسالة إلكترونية للتواصل مع فريقنا المختص,  سنقوم بالرد عليك بأسرع وقت ممكن وتوفير المساعدة اللازمة.'
      }
      icon={<BiConversation />}
    />
  );
};

export const Whatsapp = () => {
  return (
    <DetailsContainer
      title={'إنشاء مجموعة واتساب'}
      description={
        'سنقوم بإنشاء مجموعة واتساب تضم البائع والمشتري و وسيطنا المتخصص, سيتم تنظيم التواصل والتفاهم بسهولة وسرعة من خلال المجموعة.'
      }
      icon={<BsWhatsapp />}
    />
  );
};

export const TradeDetails = () => {
  return (
    <DetailsContainer
      title={'تحديد التفاصيل'}
      description={
        'قم بمشاركة تفاصيل الحساب او الرصيد الذي ترغب في بيعه أو شرائه، بما في ذلك النوع والمزيد من المعلومات المفيدة. سنقوم بتحليل المعلومات المقدمة وتوجيهك إلى الخطوات التالية.'
      }
      icon={<HiOutlineUserGroup />}
    />
  );
};

export const ScanProduct = () => {
  return (
    <DetailsContainer
      title={'عملية الفحص'}
      description={
        'سنقوم بفحص الحساب او الرصيد المراد تبادله والتحقق من صحته. إذا تم اكتشاف أي مشكلة أو عدم توافق، سنتوقف عن عملية التبادل ونقدم التوجيه اللازم.'
      }
      icon={<AiOutlineScan />}
    />
  );
};

export const TradeDone = () => {
  return (
    <DetailsContainer
      title={'الدفع واستلام الرصيد'}
      description={
        ' بعد التأكد من جودة الحساب او الرصيد والموافقة على التفاصيل النهائية، ستتم عملية التحويل المالي وتبادل المعلومات اللازمة لاستلام الحساب او الرصيد .'
      }
      icon={<BiTransferAlt />}
    />
  );
};

export const Fees = () => {
  return (
    <DetailsContainer
      title={'رسوم الوساطة'}
      description={
        'سيتم تحصيل رسوم الوساطة من المشتري وفقًا للقيمة المتفق عليها.'
      }
      icon={<TbReportMoney />}
    />
  );
};
