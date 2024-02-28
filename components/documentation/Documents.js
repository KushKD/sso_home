import Tabs from "../tabs/Tabs";
import styles from "./Documents.module.css";

export default function Documents() {
  return (
    <>
      <section className={styles.sectionDocuments} id="documentation">
        <h1 className={`${styles.container} ${styles.headingSecondary} `}>
          Tools and resources for seamless system integration
        </h1>
        <div
          className={`${styles.container} ${styles.grid} ${styles.grid_2_cols}`}
        >
          <div>
            <Tabs />
          </div>
        </div>
      </section>
    </>
  );
}
