import Link from "next/link";
import styles from "@/app/ui/home/home.module.css";
export default function TextButton({ buttonText }) {
  return (
    <button
      className={styles.textBtn}
      id={`${buttonText === "Sign Up" ? styles.actionTextBtn : ""}`}
    >
      {buttonText}
    </button>
  );
}
