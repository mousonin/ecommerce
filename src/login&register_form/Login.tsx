import React, { useState } from "react";
import "./style.scss";

export const Login = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    console.log(password + " ");
  }
  return (
    <div className="login">
      <div className="container">
        <div className="social-login">
          <div className="google"></div>
          <div className="facebook"></div>
        </div>
        <p>Sign up</p>
        <div className="loader">
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
          <label htmlFor="password underline decoration-sky-500">
            Password
          </label>
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
            Don't have an account?{" "}
            <span onClick={() => props.onFormSwitch("register")}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};
