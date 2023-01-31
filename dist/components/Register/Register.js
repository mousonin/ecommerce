import React, { useState } from "react";
import styles from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
export const Register = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
    }
    async function register() {
        await fetch("http://localhost:3001/users/register", {
            method: "POST",
            body: JSON.stringify({
                fullName,
                email,
                password,
            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (<div className={styles.register}>
      <div className={styles.container}>
        <p>Log in</p>
        <div className={styles["social-log"]}>
          <div>
            <button className={`${styles.sign} ${styles.google}`}>
              <p>Continue with Google</p>
              <FontAwesomeIcon className={styles["social-icon"]} icon={faGoogle}/>
            </button>
          </div>
          <br />
          <div>
            <button className={`${styles.sign} ${styles.facebook}`}>
              <p>Continue with Facebook</p>
              <FontAwesomeIcon className={styles["social-icon"]} icon={faFacebookF}/>
            </button>
          </div>
        </div>
        <div className={styles.loader}>
          <p>OR</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" onChange={(e) => setFullName(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className={styles.sign} type="submit" onClick={register}>
            <p>Sign up</p>
          </button>
          <p>
            Already have an account?
            <span onClick={() => props.onFormSwitch("login")}>Log in</span>
          </p>
        </form>
      </div>
    </div>);
};
