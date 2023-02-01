<<<<<<< HEAD
import React, { useState } from "react";
import styles from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
export const Register = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
=======
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Register_module_scss_1 = __importDefault(require("./Register.module.scss"));
const Register = (props) => {
    const [fullName, setFullName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
>>>>>>> parent of 531d008 (add fetch data from localhost)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(password + " ");
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    return ((0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.register, children: (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsx)("p", { children: "Log in" }), (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, children: (0, jsx_runtime_1.jsx)("p", { children: "Continue with Google" }) }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, children: (0, jsx_runtime_1.jsx)("p", { children: "Continue with Facebook" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: "Full name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", id: "name", defaultValue: fullName, onChange: (e) => setFullName(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Already have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("login"), children: "Log in" })] })] })] }) }));
>>>>>>> parent of 531d008 (add fetch data from localhost)
=======
    return ((0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.register, children: (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsx)("p", { children: "Log in" }), (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, children: (0, jsx_runtime_1.jsx)("p", { children: "Continue with Google" }) }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, children: (0, jsx_runtime_1.jsx)("p", { children: "Continue with Facebook" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: "Full name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", id: "name", defaultValue: fullName, onChange: (e) => setFullName(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Already have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("login"), children: "Log in" })] })] })] }) }));
>>>>>>> parent of 531d008 (add fetch data from localhost)
=======
    return ((0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.register, children: (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Continue with Google" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { children: "Continue with Facebook" }) })] }), (0, jsx_runtime_1.jsx)("p", { children: "Log in" }), (0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: "Full name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", id: "name", defaultValue: fullName, onChange: (e) => setFullName(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Already have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("login"), children: "Log in" })] })] })] }) }));
>>>>>>> parent of d223687 (add fontawesome in login by other ways)
};
