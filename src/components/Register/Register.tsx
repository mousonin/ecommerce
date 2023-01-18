import clsx from "clsx";
import React, { useState } from "react";
import styles form "./Register.module.scss";
export const Register = (props: { onFormSwitch: (arg0: string) => void }, {primary} : any) => {
  const classes = clsx(styles.btn, {
    [styles.primary] : primary,
  })
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    console.log(password + " ");
  }
  return (
    <div className="register">
      <div className="container">
        <p>Log in</p>
        <div className="loader">
          <p>OR</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Full name</label>
          <input
            type="text"
            name="email"
            id="email"
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
          <button type="submit">
            <p>Log in</p>
          </button>
          <p>
            Already have an account?
            <span className="" onClick={() => props.onFormSwitch("login")}>
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
