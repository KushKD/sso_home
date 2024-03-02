import { getImagePath } from "@/utils/CustomImagePath";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div
          className={`${styles.container} ${styles.grid} ${styles.gridFooter}`}
        >
          <div className={styles.logoCol}>
            {/* <a href="#" className={styles.footerLogo}>
							<img
								className={styles.logo}
								alt="Government of Himachal Pradesh logo"
								src={getImagePath("/images/hp_logo.png")}
							/>
						</a> */}

            <p className={styles.copyright}>
              Copyright &copy; 2024 Department of Digital Technologies and
              Governance, Government of Himachal Pradesh
            </p>
          </div>
          <div>
            <p className={styles.footerHeading}>Contact us</p>
            <address className={styles.contacts}>
              <p className={styles.address}>
                DDTG Himachal Pradesh I.T.Bhawan, Mehli, Shimla-171013
              </p>
              <p>
                <a className={styles.footerLink} href="tel:0177-2628914">
                  0177 2628914
                </a>
                <br />
                <a className={styles.footerLink} href="mailto:dirit-hp@nic.in">
                  dirit-hp@nic.in
                </a>
              </p>
            </address>
          </div>
          {/* <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Create account
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav> */}

          {/* <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav> */}

          {/* <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Recipe directory{" "}
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </footer>
    </>
  );
}
