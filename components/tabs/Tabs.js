"use client";

import { useState } from "react";
import styles from "./Tabs.module.css";

const tabData = [
  { id: 1, title: "Tab 1", content: "Content for Tab 1" },
  { id: 2, title: "Tab 2", content: "Content for Tab 2" },
  { id: 3, title: "Tab 3", content: "Content for Tab 3" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.content} ${
              activeTab === tab.id ? styles.active : ""
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
