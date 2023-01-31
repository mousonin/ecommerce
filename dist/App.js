import * as React from "react";
import { useState } from "react";
import "./App.scss";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
function App() {
    const [currentForm, setCurrentForm] = useState("login");
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    return (<div className="App">
      {currentForm === "login" ? (<Login onFormSwitch={toggleForm}/>) : (<Register onFormSwitch={toggleForm}/>)}
    </div>);
}
export default App;
