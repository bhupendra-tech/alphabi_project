import styles from "@/app/ui/home/home.module.css";
import { Karla } from "next/font/google";
import NavBar from "./navbar";
import Link from "next/link";
export default function CenterContainer() {
  return (
    <div id={styles.centerContainer}>
      <NavBar />
      <div className={styles.centerBlock}>
        <h2 className={styles.blockItem}>Express Yourself With GIFs</h2>
        <h5 className={styles.blockItem}>Search GIF seamlessly</h5>
        <Link
          href={"/signup"}
          className={`${styles.textBtn} `}
          id={styles.actionTextBtn}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
