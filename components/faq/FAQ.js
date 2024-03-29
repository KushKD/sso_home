import { getImagePath } from "@/utils/CustomImagePath";
import Accordian from "../accordian/Accordian";
import styles from "./FAQ.module.css";

export default function FAQ() {
	return (
		<>
			<section className={styles.sectionHow} id="faq">
				<h1 className={`${styles.container} ${styles.headingSecondary} `}>
					Frequently Asked Questions ?
				</h1>
				<div
					className={`${styles.container} ${styles.grid} ${styles.grid_2_cols}`}
				>
					<div>
						<img
							className={styles.works_img}
							src={getImagePath("/images/faq.png")}
							alt="How SSO Works"
						/>
					</div>
					<div>
						<Accordian />
					</div>
				</div>
			</section>
		</>
	);
}
