import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Enflag, Jaflag, Viflag } from '../images/Image';

interface LangProps {
  className?: string;
}

const Lang: React.FC<LangProps> = ({ className }) => {
  const [activeFlag, setActiveFlag] = useState<'en' | 'vi' | 'jp'>('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    setActiveFlag(i18n.language as 'en' | 'vi' | 'jp');
  }, [i18n.language]);

  const handleFlagClick = (flag: 'en' | 'vi' | 'jp') => {
    i18n.changeLanguage(flag);
  };

  return (
    <div
      className={`lang-change z-10 flex fixed top-3 right-36 justify-end gap-x-2 ${className}`}
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <img
        className={activeFlag === 'en' ? 'active' : ''}
        src={Enflag}
        alt="English"
        onClick={() => handleFlagClick('en')}
      />
      <img
        className={activeFlag === 'vi' ? 'active' : ''}
        src={Viflag}
        alt="Vietnamese"
        onClick={() => handleFlagClick('vi')}
      />
      <img
        className={activeFlag === 'jp' ? 'active' : ''}
        src={Jaflag}
        alt="Japanese"
        onClick={() => handleFlagClick('jp')}
      />
    </div>
  );
};

export default Lang;
