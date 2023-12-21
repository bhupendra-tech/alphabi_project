import styles from "@/app/ui/home/home.module.css";
import { Karla } from "next/font/google";
import NavBar from "./navbar";
export default function CenterContainer() {
  return (
    <div id={styles.centerContainer}>
      <NavBar />
      <h2>Express Yourself With GIFs</h2>
      <h5>Search GIF seamlessly</h5>
    </div>
  );
}
