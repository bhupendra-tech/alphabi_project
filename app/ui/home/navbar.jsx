import ProjectLogo from "../logo";
import styles from "@/app/ui/home/home.module.css";
import TextButton from "./buttons";
export default function NavBar() {
  return (
    <div id={styles.navBar}>
      <ProjectLogo width={50} height={50} />
      <div>
        <TextButton buttonText={"log in"} pathString={"/login"} />
        <TextButton buttonText={"Sign Up"} pathString={"/signup"} />
      </div>
    </div>
  );
}
