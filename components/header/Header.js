"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { getImagePath } from "@/utils/CustomImagePath";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    // ${styles.navOpen}
    <>
      <header className={`${styles.header}`}>
        <div className={styles.header_image_sso}>
          <a href="#">
            <img
              className={styles.logo}
              alt="HP Government logo"
              src={getImagePath("/images/hp_logo.png")}
            />
          </a>
          <h1 className={styles.siteName}>
            Himachal Pradesh Single Sign On (SSO)
          </h1>
        </div>
        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li>
              <Link className={styles.mainNavLink} href="#howItWorks">
                How it works
              </Link>
            </li>
            {/* <li>
              <Link className={styles.mainNavLink} href="#">
                Benifits
              </Link>
            </li> */}
            <li>
              <Link className={styles.mainNavLink} href="#documentation">
                Documentation
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} href="#faq">
                FAQs
              </Link>
            </li>
            {/* <li>
              <Link className={styles.mainNavLink} href="#">
                Application Onboarding
              </Link>
            </li> */}
            <li>
              <Link
                className={`${styles.mainNavLink} ${styles.navCta}`}
                href="https://sso.hp.gov.in"
                target="_blank"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        {/* <button className={styles.btnMobileNav}>
          <img
            src={getImagePath("/images/hamburger.png")}
            alt="Menu for Mobile Devices"
            className={styles.btnMobileNav}
            name="btnMobileNav"
          />

          <img
            src={getImagePath("/images/cross.png")}
            alt="Close Menu for Mobile Devices"
            className={styles.btnMobileNav}
            name="btnMobileNavClose"
          />
        </button> */}
      </header>
    </>
  );
}
