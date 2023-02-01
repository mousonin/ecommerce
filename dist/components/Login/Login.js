<<<<<<< HEAD
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
=======
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Login_module_scss_1 = __importDefault(require("./Login.module.scss"));
const Login = (props) => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
>>>>>>> parent of d223687 (add fontawesome in login by other ways)
    function handleSubmit(e) {
        e.preventDefault();
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    return ((0, jsx_runtime_1.jsx)("div", { className: Login_module_scss_1.default.login, children: (0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Continue with Google" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Continue with Facebook" }) })] }), (0, jsx_runtime_1.jsx)("p", { children: "Sign up" }), (0, jsx_runtime_1.jsx)("div", { className: Login_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Login_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Don't have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("register"), children: "Sign up" })] })] })] }) }));
>>>>>>> parent of d223687 (add fontawesome in login by other ways)
=======
    return ((0, jsx_runtime_1.jsx)("div", { className: Login_module_scss_1.default.login, children: (0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Continue with Google" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Continue with Facebook" }) })] }), (0, jsx_runtime_1.jsx)("p", { children: "Sign up" }), (0, jsx_runtime_1.jsx)("div", { className: Login_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Login_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Don't have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("register"), children: "Sign up" })] })] })] }) }));
>>>>>>> parent of d223687 (add fontawesome in login by other ways)
};
