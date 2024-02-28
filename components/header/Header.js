import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_image_sso}>
          <a href="#">
            <img
              className={styles.logo}
              alt="HP Government logo"
              src="images/hp_logo.png"
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
                FAQ
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} href="#">
                Application Onboarding
              </Link>
            </li>
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
      </header>
    </>
  );
}
