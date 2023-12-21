"use client";
import styles from "@/app/ui/authentication/authentication.module.css";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Image from "next/image";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    console.log("user Signed Up", { email, password });
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.form} id={styles.loginForm}>
          <h5 className={styles.formHeader}>Create new account</h5>
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
              placeholder="Minimum length is 8 characters"
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
            onClick={handleSignUp}
          >
            <h6>Continue</h6>
            <Image src="./arrow_forward.svg" alt="forward arrow" />
          </button>
        </div>
        <p className={styles.accountSubText}>
          Already have an account? <a href="./login">Open it up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
