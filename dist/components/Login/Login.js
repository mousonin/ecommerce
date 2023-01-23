"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Login_module_scss_1 = __importDefault(require("./Login.module.scss"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const Login = (props) => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(password + " ");
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: Login_module_scss_1.default.login, children: (0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default.container, children: [(0, jsx_runtime_1.jsx)("p", { children: "Sign up" }), (0, jsx_runtime_1.jsxs)("div", { className: Login_module_scss_1.default["social-log"], children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("button", { className: `${Login_module_scss_1.default.sign} ${Login_module_scss_1.default.google}`, children: [(0, jsx_runtime_1.jsx)("p", { children: "Continue with Google" }), (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: Login_module_scss_1.default['social-icon'], icon: free_brands_svg_icons_1.faGoogle })] }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("button", { className: `${Login_module_scss_1.default.sign} ${Login_module_scss_1.default.facebook}`, children: [(0, jsx_runtime_1.jsx)("p", { children: "Continue with Facebook" }), (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: Login_module_scss_1.default['social-icon'], icon: free_brands_svg_icons_1.faFacebookF })] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: Login_module_scss_1.default.loader, children: (0, jsx_runtime_1.jsx)("p", { children: "OR" }) }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", defaultValue: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", defaultValue: password, onChange: (e) => setPassword(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: Login_module_scss_1.default.sign, type: "submit", children: (0, jsx_runtime_1.jsx)("p", { children: "Log in" }) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Don't have an account?", (0, jsx_runtime_1.jsx)("span", { onClick: () => props.onFormSwitch("register"), children: "Sign up" })] })] })] }) }));
};
exports.Login = Login;
