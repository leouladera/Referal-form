import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignUP from "./Pages/signup";
import Login from "./Pages/login";
import Home from "./Pages/Home";
import NotFoundImage from "./assets/404.jpg";
function App() {
  const style = {
    color: "#004a45",
    fontSize: "4rem",
    textAlign: "center",
    fontFamily: "'Outfit', serif",
    marginTop: "-5%",
    fontWeight: "500",
    textTransform: "capitalize",
  };
  const style2 = {
    color: "#696969",
    fontSize: "1.2rem",
    width: "25rem",
    marginInline: "auto",
    textAlign: "center",
    fontFamily: "'Outfit', serif",
    fontWeight: "400",
    textTransform: "capitalize",
  };
  const img = {
    width: "20rem",
    marginInline: "auto",
    textAlign: "center",
    marginTop: "5%",
    display: "block",
  };
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            <>
              <img src={NotFoundImage} alt="404 Not Found" style={img} />
              <h1 style={style}>
                error 404 <br /> page not found!
              </h1>{" "}
              <p style={style2}>
                we couldn&apos;t find what you&apos;re looking for
              </p>{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
