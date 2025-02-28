import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUP from "./Pages/signup";
import Login from "./Pages/login";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
