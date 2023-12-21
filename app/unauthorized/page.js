import styles from "@/app/ui/unauthorized/unauthorized.module.css";
import Link from "next/link";
export default function Unauthorized() {
  return (
    <>
      <h1 id={styles.unauthorized}>
        You are not allowed to access this resource{" "}
      </h1>
      <Link href={'/'} id={"textBtn"}>Back to Home page</Link>
    </>
  );
}
