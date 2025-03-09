import styles from "./signup.module.css";
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
  const handleHomeClick = () => {
    navigateHome("/home");
  };
  const [text, setText] = useState("Signup");
  const click = () => {
    setText("Loading...");
    setTimeout(() => {
      setText("Signup");
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
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.leftTitle}>
            <h1 className={styles.title}>
              AIS discipline <br />
              referral form
            </h1>
            <div className={styles.line}></div>
          </div>
        </div>
        {/* <h1>test</h1> */}

        <div className={styles.containerRight}>
          <div className={styles.Buttons}>
            <div className={styles.SignUP} onClick={handleSignUpClick}>
              Signup
            </div>
            <div className={styles.lineButton}></div>
            <div className={styles.LogIN} onClick={handleLoginClick}>
              Login
            </div>
          </div>
          <h1 className={styles.welcome}>SignUp</h1>
          <div className={styles.role}>
            <p className={styles.roleP}>Select Your Role:</p>
            <select name="" id="">
              <option value="">Select an option</option>
              <option value="">Teacher</option>
              <option value="">Staff</option>
              <option value="">guard</option>
            </select>
          </div>
          <p>Full Name:</p>
          <div className={styles.nameContainer}>
            <input
              className={styles.name}
              name="email"
              id=""
              placeholder="First Name"
              type="text"
              required
            ></input>
            <input
              className={styles.name}
              name="email"
              id=""
              placeholder="Last Name"
              type="email"
              required
            ></input>
          </div>
          <p>Username:</p>
          <input
            className={styles.email}
            name="email"
            id=""
            placeholder="you@example.com"
            type="email"
            required
          ></input>
          <div className={styles.phone}>
            <p>Phone Number:</p>
            <input
              className={styles.email}
              name="pNumber"
              id=""
              placeholder="+251 912345678"
              type="number"
              required
            ></input>
          </div>
          <p className={styles.pPassword}>Password:</p>
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
              handleHomeClick();
              click();
            }}
          >
            {text}
          </button>
          <p className={styles.Create}>
            Already have an account?
            <span>
              <a onClick={handleLoginClick}> Login</a>
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
      </div>
      <div className={styles.foot}>© andinet international school</div>
    </>
  );
}
export default SignUp;
