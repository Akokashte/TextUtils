// let name = "Harry";
// import c, { a, b } from "./module1";
// className  replace by classNameName and jsx is written inside {} braces.
// closing tag is mandatory such  as <img src= "source" />
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    // react does partial matching of path so inorder to perform complete matching exact path is used
    // /users -->component 1
    // /users/home -->component 2 even if we type this in url then we will get /users result as a page
    <>
      {/*navbar*/}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />}>
            </Route>

            <Route exact path="/" element={<TextForm heading="Enter The text to analyze below" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App;