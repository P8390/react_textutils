import './App.css';
import About from './Components/About';
import Navebar from './Components/Navebar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }else{
      setMode('light')
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  return (
    <>
    <Router>
    <Navebar title="TextUtils" aboutText="About" mode={mode} toggle={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
          </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
