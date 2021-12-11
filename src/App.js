import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#122f47";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar titel="Just Chlling" mode={mode} toggleMode={toggleMode} />

        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <Textarea mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
