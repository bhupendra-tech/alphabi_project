'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import ProjectLogo from "../logo";
import styles from "@/app/ui/dashboard/dashboard.module.css";
export default function NavBar() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  if (user) console.log("user present", user);
  else router.push("/unauthorized");
  return (
    <div id={styles.navBar}>
      <ProjectLogo width={50} height={50} />
      <button onClick={() => signOut(auth)} className={styles.actionTextBtn}>
        Log Out
      </button>
    </div>
  );
}
