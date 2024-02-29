import { getImagePath } from "@/utils/CustomImagePath";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
	return (
		<>
			<section className={styles.sectionHowItWorks} id="howItWorks">
				<h1 className={`${styles.container} ${styles.headingSecondary} `}>
					How SSO Works
				</h1>
				<div
					className={`${styles.container} ${styles.grid} ${styles.grid_2_cols}`}
				>
					<div className={styles.howItWorksDesc}>
						Single Sign-On (SSO) developed by the Department of Digital
						Technologies and Governance, offers a plethora of benefits to the
						citizens of the State. With this system, citizens gain access to a
						diverse range of Government services and Resources across various
						Departments using a unified login, eliminating the need to manage
						multiple accounts. This streamlined approach not only simplifies
						interactions with Government Services and Systems but also saves
						time and resources by eliminating the necessity of recalling
						multiple usernames and passwords. Furthermore, SSO bolsters data
						security by requiring citizens to share their personal information
						only once during registration, thus reducing the risk of identity
						theft and misuse. Additionally, it fosters transparency by enabling
						citizens to monitor the real-time status of their applications,
						payments, and requests.
					</div>
					<h1 className={`${styles.container} ${styles.headingSecondaryLeft} `}>
						Process Involves
					</h1>
					<div className={styles.process}>
						<div className={`${styles.grid} ${styles.grid4Col}`}>
							<div className={styles.flex}>
								<img
									className={styles.flexImage}
									src={getImagePath("/images/verify_user.png")}
									alt="User Verification SSO"
								/>
								<p className={styles.headingThird}>Perform eKYC</p>
							</div>

							<div className={styles.flex}>
								<img
									className={styles.flexImage}
									src={getImagePath("/images/verify_mobile.png")}
									alt="Mobile Verification SSO"
								/>
								<p className={styles.headingThird}>Verify Mobile</p>
							</div>

							<div className={styles.flex}>
								<img
									className={styles.flexImage}
									src={getImagePath("/images/set_password.png")}
									alt="Set Username and Password Verification SSO"
								/>
								<p className={styles.headingThird}>Set Username and Password</p>
							</div>

							<div className={styles.flex}>
								<img
									className={styles.flexImage}
									src={getImagePath("/images/access.png")}
									alt="Allow Access SSO"
								/>
								<p className={styles.headingThird}>Allow Single Sign-On</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
