"use client";
import styles from "@/app/ui/authentication/authentication.module.css";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.form} id={styles.loginForm}>
          <h5 className={styles.formHeader}>Sign in to your account</h5>
          <div className={styles.formRow}>
            <label htmlFor="userEmail" className={styles.formLabel}>
              <h6>Email</h6>
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className={styles.formInput}
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <label htmlFor="userPassword" className={styles.formLabel}>
              <h6>Password</h6>
            </label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              className={styles.formInput}
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className={`${styles.subText} ${styles.errorMessage}`}
            id="userResponseMessage"
          ></div>
          <button
            type="submit"
            className={`${styles.btn} ${styles.gradient}`}
            onClick={handleSignIn}
          >
            <h6>Continue</h6>
            <Image src="./arrow_forward.svg" alt="forward arrow" />
          </button>
        </div>
        <p className={styles.accountSubText}>
          Don't have an account? <a href="./signin">Create One</a>
        </p>
      </div>
    </div>
  );
};
export default Login;
