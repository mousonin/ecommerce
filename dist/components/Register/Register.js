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
    function handleSubmit(e) {
        e.preventDefault();
        console.log(password + " ");
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.register, children: (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsx)("p", { children: "Log in" }), (0, jsx_runtime_1.jsxs)("div", { className: Register_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, children: (0, jsx_runtime_1.jsx)("p", { children: "Continue with Google" }) }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, children: (0, jsx_runtime_1.jsx)("p", { children: "Continue with Facebook" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: Register_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: "Full name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", id: "name", defaultValue: fullName, onChange: (e) => setFullName(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Register_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Already have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("login"), children: "Log in" })] })] })] }) }));
};
exports.Register = Register;
