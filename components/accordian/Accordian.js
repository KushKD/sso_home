"use client";
import { useState } from "react";
import styles from "./Accordian.module.css";

// Define the constant containing the accordion data
const accordionData = [
  {
    title: "What is Single Sign On Platform ?",
    description:
      "Single Sign-On is a centralized session and user authentication service in which a set of login credentials can be used to access multiple applications during the same session. The service helps in providing a seamless user experience by eliminating the need of proving the user identity to different applications.",
  },
  {
    title: "Key Benifits of HP-SSO",
    description:
      "The basic objective of HPSSO is to eliminate individual & repetitive sign-on procedures by centralizing user authentication and identity management at a central identity provider. It increases user productivity on a national level as its intuitive interface allows better user mobility and provides seamless access to multiple services and applications by authenticating just once.",
  },
  {
    title: "Is it Safe to Share the Aadhaar Card details with HP-SSO ?",
    description:
      "Yes, it’s completely safe as SSOs under Himachal Pradesh Government, takes care of Aadhaar data and keep Aadhaar details in the Aadhaar vault as per the guidelines of the Aadhaar Act.",
  },
  {
    title: "How to Register using HP-SSO",
    description:
      "The citizen may register by providing a Mobile number, Name, and Gender to create credentials i.e. username and password. User may also perform eKYC using Aadhaar Number.",
  },

  {
    title: "What is the Login Process of HP-SSO",
    description:
      "One can login using the credentials i.e. username/mobile/Aadhaar/Email and password generated at the time of signup on the SSO platform. On successful authentication, two-step multi-factor authentication is performed as well. After the completion of 2FA, the user logs in successfully.",
  },

  {
    title: "What is two step Multi Level Authentication",
    description:
      "One of the most secure prevention controls for unauthorized access, fraud, and cyber identity thefts is two-step multifactor authentication. This feature incorporates an additional layer of security, in which a user gets authenticated by providing a password, as well as a second factor, that could be an OTP (sent over registered mobile number or E-mail ID).",
  },
];

export default function Accordian() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (index) => {
    setIsOpen(index === isOpen ? null : index);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div className={styles.accordion} key={index}>
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.accordionTitle}>{item.title}</div>
              <div
                className={`${styles.accordionIcon} ${
                  isOpen === index ? "open" : "closed"
                }`}
              ></div>
            </div>
            {isOpen === index && (
              <div className={styles.accordionContent}>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
