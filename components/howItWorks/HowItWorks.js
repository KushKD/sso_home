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
            citizen of the State. Citizens of the State can now access a wide
            array of Government services and Resources with a single set of
            login credentials, rendering the management of multiple accounts
            obsolete. This not only simplifies their interactions with the
            Government Services and Systems but also saves time and resources,
            as they no longer need to juggle various usernames and passwords.
            Moreover, SSO reinforces data security, as citizens only need to
            share their personal information once during the registration
            process, reducing the vulnerability to identity theft and misuse.
            Furthermore, it fosters transparency, enabling citizens to monitor
            the real-time status of their applications, payments, and requests,
            which empowers them to hold the government accountable for its
            actions.
          </div>
          <h1 className={`${styles.container} ${styles.headingSecondaryLeft} `}>
            Process Involves
          </h1>
          <div className={styles.process}>
            <div className={`${styles.grid} ${styles.grid4Col}`}>
              <div className={styles.flex}>
                <img
                  className={styles.flexImage}
                  src="/images/verify_user.png"
                  alt="User Verification SSO"
                />
                <p className={styles.headingThird}>Know Your User</p>
              </div>

              <div className={styles.flex}>
                <img
                  className={styles.flexImage}
                  src="/images/verify_mobile.png"
                  alt="Mobile Verification SSO"
                />
                <p className={styles.headingThird}>Verify Mobile</p>
              </div>

              <div className={styles.flex}>
                <img
                  className={styles.flexImage}
                  src="/images/set_password.png"
                  alt="Set Username and Password Verification SSO"
                />
                <p className={styles.headingThird}>Set Username and Password</p>
              </div>

              <div className={styles.flex}>
                <img
                  className={styles.flexImage}
                  src="/images/access.png"
                  alt="Allow Access SSO"
                />
                <p className={styles.headingThird}>Allow Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
