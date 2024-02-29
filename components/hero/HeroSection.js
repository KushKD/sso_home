// import "../app/globals.css";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { getImagePath } from "@/utils/CustomImagePath";

export default function HeroSection() {
	return (
		<>
			<section className={styles.sectionHero}>
				<div className={styles.hero}>
					<div className={styles.heroTextBox}>
						<h1 className={styles.headingPrimary}>
							<q>One Login, Limitless Convenience</q>
						</h1>
						<p className={styles.heroDescription}>
							Simplify your digital experience with Single Sign-On, enabling
							seamless navigation across multiple platforms using just one set
							of credentials. Enjoy the convenience of accessing various
							services without the hassle of remembering multiple passwords.
						</p>
						<a
							href="https://sso.hp.gov.in/"
							target="_blank"
							className={`${styles.btn} ${styles.btnFull} ${styles.marginRightSm}`}
						>
							Register Yourself
						</a>
						<a
							href="#howItWorks"
							className={`${styles.btn} ${styles.btnOutline}`}
						>
							Learn More &darr;
						</a>
					</div>
					<div className={styles.heroImgBox}>
						<img
							className={styles.heroImg}
							alt="SSO Single Sign on"
							src={getImagePath("/images/SSO_Home_2.png")}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
