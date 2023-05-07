import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };
  return (
    <Router>
      <Navbar
        title="Text Utils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        />
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={
          <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze bellow"
          mode={mode}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
