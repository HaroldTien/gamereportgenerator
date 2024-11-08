// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n, t } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-switcher">
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('zh-TW')}>繁體中文</button>
//       <button onClick={() => changeLanguage('zh-CN')}>简体中文</button>
//       <button onClick={() => changeLanguage('jp')}>日本語</button>
//       <button onClick={() => changeLanguage('ko')}>한국어</button>
//     </div>
//   );
// };

// export default LanguageSwitcher; 


import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // 組件掛載時檢查並設置語言
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('userLanguage', lng);
    document.documentElement.lang = lng;  // 更新 HTML lang 屬性
    
    // 可選：保存到其他位置
    sessionStorage.setItem('userLanguage', lng);
    // 如果使用 Redux 或其他狀態管理
    // dispatch(setLanguage(lng));
  };

  return (
    <div>
      <button 
        onClick={() => changeLanguage('zh-TW')}
        className={i18n.language === 'zh-TW' ? 'active' : ''}
      >
        繁體中文
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        English
      </button>
      {/* ... other language options ... */}
    </div>
  );
};

export default LanguageSwitcher;