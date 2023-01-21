import React, { useState } from "react";
import styles from "./Login.module.scss";

export const Login = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    console.log(password + " ");
  }
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles["social-log"]}>
          <div>
            <button>Continue with Google</button>
          </div>
          <div>
            <button>Continue with Facebook</button>
          </div>
        </div>
        <p>Sign up</p>
        <div className={styles.loader}>
          <p>OR</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.sign} type="submit">
            <p>Log in</p>
          </button>
          <p>
            Don't have an account?
            <span onClick={() => props.onFormSwitch("register")}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};
