"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.scss");
const Login_1 = require("./components/Login/Login");
const Register_1 = require("./components/Register/Register");
function App() {
    const [currentForm, setCurrentForm] = (0, react_1.useState)("login");
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: currentForm === "login" ? ((0, jsx_runtime_1.jsx)(Login_1.Login, { onFormSwitch: toggleForm })) : ((0, jsx_runtime_1.jsx)(Register_1.Register, { onFormSwitch: toggleForm })) }));
}
exports.default = App;
