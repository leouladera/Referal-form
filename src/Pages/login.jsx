import styles from "./login.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const navigate2 = useNavigate();

  const handleSignUpClick = () => {
    navigate2("/signup");
  };
  const navigateHome = useNavigate();
  const navigateHomeHandler = () => navigateHome("/home");
  const [text, setText] = useState("Login");
  const click = () => {
    setText("Loading...");
    setTimeout(() => {
      setText("Login");
    }, 1000);
  };
  const [GoogleText, setGoogleText] = useState("google");
  const googleClick = () => {
    setGoogleText("Loading...");
    setTimeout(() => {
      setGoogleText("google");
    }, 2000);
  };
  return (
    <>
      <div className={styles.leftTitle}>
        <h1 className={styles.title}>AIS discipline referral form</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.Buttons}>
          <div className={styles.SignUP} onClick={handleSignUpClick}>
            Signup
          </div>
          <div className={styles.lineButton}></div>
          <div className={styles.LogIN} onClick={handleLoginClick}>
            Login
          </div>
        </div>
        <h1 className={styles.welcome}>welcome back!</h1>
        <p>Email</p>
        <input
          className={styles.email}
          name="email"
          id=""
          placeholder="you@example.com"
          type="email"
          required
        ></input>
        <p className={styles.pPassword}>Password</p>
        <input
          className={styles.password}
          name="email"
          id=""
          placeholder="Password"
          type="password"
          required
        ></input>
        <button
          type="submit"
          className={styles.Submit}
          onClick={() => {
            click();
            navigateHomeHandler();
          }}
        >
          {text}
        </button>
        <p className={styles.Create}>
          Don&apos;t have an account yet?
          <span>
            <a onClick={handleSignUpClick}> Create one</a>
          </span>
        </p>
        <div className={styles.lineGoogle}>
          <div className={styles.lines}></div>
          <p className={styles.signInGoogle}>or Signup with</p>
          <div className={styles.lines}></div>
        </div>
        <button className={styles.google} onClick={googleClick}>
          <FontAwesomeIcon
            icon={faGoogle}
            fontSize={25}
            style={{ marginRight: "10px" }}
          ></FontAwesomeIcon>
          {GoogleText}
        </button>
      </div>
      <footer>© andinet international school</footer>
    </>
  );
}
export default SignUp;
