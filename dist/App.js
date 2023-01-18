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
const react_1 = __importStar(require("react"));
require("./App.scss");
const Login_1 = require("./components/Login/Login");
const Register_1 = require("./components/Register/Register");
function App() {
    const [currentForm, setCurrentForm] = (0, react_1.useState)("login");
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    return (react_1.default.createElement("div", { className: "App" }, currentForm === "login" ? (react_1.default.createElement(Login_1.Login, { onFormSwitch: toggleForm })) : (react_1.default.createElement(Register_1.Register, { onFormSwitch: toggleForm }))));
}
exports.default = App;
