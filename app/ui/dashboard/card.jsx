import styles from "@/app/ui/dashboard/dashboard.module.css";
import Image from "next/image";
export default function Card({ title, url }) {
  const imageUrl = url?.downsized?.url || "";
  return (
    <div className={styles.card}>
      <Image src={imageUrl} height={240} width={240} alt={imageUrl}></Image>
      <p>{title}</p>
    </div>
  );
}
