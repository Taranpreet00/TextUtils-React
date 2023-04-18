// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2d5264';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = "Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = "Text Utils - Light Mode";
    }
  }
  return (
    
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<Textform heading="Enter the text to analyze" mode={mode} showalert = {showAlert}/>}>
          </Route>
        </Routes> */}
        <Textform heading="Enter the text to analyze" mode={mode} showalert = {showAlert}/>
        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
