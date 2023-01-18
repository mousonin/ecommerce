"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_1 = __importStar(require("react"));
require("./Login.module.scss");
const Login = (props) => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(password + " ");
    }
    return (react_1.default.createElement("div", { className: "login" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "social-log" },
                react_1.default.createElement("div", { className: "google" },
                    react_1.default.createElement("button", null, "Continue with Google")),
                react_1.default.createElement("div", { className: "facebook" },
                    react_1.default.createElement("button", null, "Continue with Facebook"))),
            react_1.default.createElement("p", null, "Sign up"),
            react_1.default.createElement("div", { className: "loader" },
                react_1.default.createElement("p", null, "OR")),
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
                react_1.default.createElement("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }),
                react_1.default.createElement("span", null),
                react_1.default.createElement("label", { htmlFor: "password underline decoration-sky-500" }, "Password"),
                react_1.default.createElement("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }),
                react_1.default.createElement("button", { className: "sign", type: "submit" },
                    react_1.default.createElement("p", null, "Log in")),
                react_1.default.createElement("p", null,
                    "Don't have an account?",
                    " ",
                    react_1.default.createElement("span", { onClick: () => props.onFormSwitch("register") }, "Sign up"))))));
};
exports.Login = Login;
