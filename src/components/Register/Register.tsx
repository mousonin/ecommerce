import React, { useState } from "react";
import styles from "./Register.module.scss";

export const Register = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    console.log(password + " ");
  }
  return (
    <div className={styles.register}>
      <div className={styles.container}>
      <div className={styles["social-log"]}>
          <div>
            <button>Continue with Google</button>
          </div>
          <div>
            <button>Continue with Facebook</button>
          </div>
        </div>
        <p>Log in</p>
        <div className={styles.loader}>
          <p>OR</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<<<<<<< HEAD
<<<<<<< HEAD
          <button className={styles.sign} type="submit" onClick={register}>
            <p>Sign up</p>
=======
=======
>>>>>>> parent of 531d008 (add fetch data from localhost)
          <button className={styles.sign} type="submit">
            <p>Log in</p>
>>>>>>> parent of 531d008 (add fetch data from localhost)
          </button>
          <p>
            Already have an account?
            <span onClick={() => props.onFormSwitch("login")}>
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
