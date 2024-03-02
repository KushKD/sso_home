"use client";

import { useState } from "react";
import styles from "./Tabs.module.css";
import { getImagePath } from "@/utils/CustomImagePath";

const tabData = [
  { id: 1, title: "Integration Kit", content: "Content for Tab 1" },
  { id: 2, title: "Samples", content: "Content for Tab 2" },
  { id: 3, title: "Parameters List", content: "Content for Tab 3" },
];

const listItems = [
  {
    id: 1,
    text: "SSO Integration Document API-1.0",
    doc_name: "/pdf/HPSSO_Integration_Kit.pdf",
  },
  {
    id: 2,
    text: "List of Non Editable Parameters ",
    doc_name: "/pdf/params.pdf",
  },
  { id: 3, text: "User Manual", doc_name: "/pdf/manual.pdf" },
];

const SampleCode = [
  {
    id: 1,
    text: "Sample Code for Integration using PHP ",
    doc_name: "/docs/php.zip",
  },
  {
    id: 2,
    text: "Sample Code for Integration using .Net ",
    doc_name: "/docs/SSO.Net.zip",
  },
  {
    id: 3,
    text: "Sample Code for Integraion using JS",
    doc_name: "/docs/js.zip",
  },
];

const flows = [
  {
    id: 1,
    text: "Serarios and Flows",
  },
  {
    id: 2,
    text: "Linking and Mapping Flow",
  },
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
            {tab.id === 1 ? (
              <div className={`${styles.grid} ${styles.gridCustom}`}>
                {/* Content when tab is active */}
                <div className={styles.customList}>
                  <h2 className={styles.headingPrimary}>Documents</h2>
                  <ul className={styles.list}>
                    {listItems.map((item) => (
                      <li key={item.id} className={styles.listItem}>
                        <span className={styles.itemText}>
                          <img
                            src={getImagePath("/images/checked.png")}
                            alt="Tick"
                            className={styles.tickIcon}
                          />
                          <a href={getImagePath(item.doc_name)} download>
                            {item.text}
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className={styles.icon}
                  src={getImagePath("/images/integration.png")}
                  alt="Integration Kit"
                />
              </div>
            ) : tab.id === 2 ? (
              <div>
                <div className={`${styles.grid} ${styles.gridCustom}`}>
                  {/* Content when tab is active */}
                  <div className={styles.customList}>
                    <h2 className={styles.headingPrimary}>Sample Code</h2>
                    <ul className={styles.list}>
                      {SampleCode.map((item) => (
                        <li key={item.id} className={styles.listItem}>
                          <span className={styles.itemText}>
                            <img
                              src={getImagePath("/images/checked.png")}
                              alt="Tick"
                              className={styles.tickIcon}
                            />
                            <a href={getImagePath(item.doc_name)} download>
                              {item.text}
                            </a>
                          </span>
                          {/* <img className={styles.downloadIcon} /> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img
                    className={styles.icon}
                    src={getImagePath("/images/sample.png")}
                    alt="Sample Code"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className={`${styles.grid} ${styles.gridCustom}`}>
                  {/* Content when tab is active */}
                  <div className={styles.customList}>
                    <h2 className={styles.headingPrimary}>Flows & Senerios</h2>
                    <ul className={styles.list}>
                      {flows.map((item) => (
                        <li key={item.id} className={styles.listItem}>
                          <span className={styles.itemText}>
                            <img
                              src={getImagePath("/images/checked.png")}
                              alt="Tick"
                              className={styles.tickIcon}
                            />
                            <a href="#">{item.text}</a>
                          </span>
                          {/* <img className={styles.downloadIcon} /> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img
                    className={styles.icon}
                    src={getImagePath("/images/workflow.png")}
                    alt="Work Flows"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
