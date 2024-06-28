import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho props
interface TabProps {
  tabs: { title: string, content: React.ReactNode }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${index === activeTab ? 'active' : ''}`}
            onClick={() => changeTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tab;
