import React, { useState } from "react";
import "./App.scss";
import { Login } from "./login&register_form/Login";
import { Register } from "./login&register_form/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
