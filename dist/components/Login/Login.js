import React, { useState } from "react";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        try {
            const results = await signInWithPopup(auth, googleProvider);
            console.log(results);
        }
        catch (err) {
            console.log(err);
        }
    };
    function handleSubmit(e) {
        e.preventDefault();
    }
    async function login() {
        fetch("http://localhost:3001/users/login", {
            method: "POST",
            body: JSON.stringify({
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
    return (<div className={styles.login}>
      <div className={styles.container}>
        <p className="text-3xl font-bold underline">Sign up</p>
        <div className={styles["social-log"]}>
          <div>
            <button onClick={googleLogin} className={`${styles.sign} ${styles.google}`}>
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
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
          <span></span>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className={styles.sign} type="submit" onClick={login}>
            <p>Log in</p>
          </button>
          <p>
            Don't have an account?
            <span onClick={() => props.onFormSwitch("register")}>Sign up</span>
          </p>
        </form>
      </div>
    </div>);
};
