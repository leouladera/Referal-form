import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import { useState } from "react";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import "flatpickr/dist/flatpickr.min.css";
// import { color } from "motion/react";
function Home() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    // Date Picker
    flatpickr(dateRef.current, {
      dateFormat: "Y-m-d",
      maxDate: "today",
    });

    // Time Picker
    flatpickr(timeRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: "true",
    });
  }, []);
  const NavigateSignup = useNavigate();
  const NavigateSignupHandler = () => NavigateSignup("/signup");
  const d = new Date();
  let time = d.getHours();
  let timeEvent = "";
  if (time >= 6 && time <= 11) {
    timeEvent = "morning";
  } else if (time >= 12 && time <= 18) {
    timeEvent = "Afternoon";
  } else {
    timeEvent = "Evening";
  }
  const submitstyle = {
    display: "inline",
    color: "rgb(63, 235, 11)",
    fontWeight: "400",
  };
  const [submit, setSubmit] = useState(
    <>
      Submit{" "}
      {/* <FontAwesomeIcon icon={faPaperPlane} style={{ fontWeight: "400" }} /> */}
    </>
  );
  const submitHandler = () => {
    setSubmit(
      <p style={submitstyle}>
        {/* Submitted{" "} */}
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{
            fontWeight: "400",
            marginLeft: "5px",
            color: "#9BFB13",
          }}
        />
      </p>
    );
    setTimeout(() => {
      setSubmit(
        <>
          {" "}
          Submit{" "}
          {/* <FontAwesomeIcon icon={faPaperPlane} style={{ fontWeight: "400" }} /> */}
        </>
      );
    }, 2000);
  };
  return (
    <>
      <div className={styles.pfp} onClick={NavigateSignupHandler}></div>
      <div className={styles.header}>
        <h1 className={styles.heading}>Good {timeEvent}, Teacher</h1>
        <p>Andinet International School Discipline Referral Form</p>
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.h1}>
            <h1>Referral form</h1>
            <p className={styles.req}>
              all Fields marked with <span className={styles.ast}>*</span> are
              required.
            </p>
          </div>

          <div className={styles.option}>
            <p>referral number</p>{" "}
            <select id="numberSelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.studentInfo}>
            <h1>
              Student Info{" "}
              <sup>
                <span className={styles.ast}>*</span>
              </sup>
            </h1>
            <div className={styles.content}>
              <div className={styles.item}>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={styles.item}>
                <input type="text" placeholder="Second Name" />
              </div>
              <div className={styles.item}>
                <input type="text" placeholder="Year" />
              </div>
              <div className={styles.item}>
                <input type="date" placeholder="Date" ref={dateRef} />
              </div>
              <div className={styles.itemGender}>
                <div className={styles.gender}>
                  <input type="radio" name="age" ref={dateRef} />
                  Male
                </div>
                <div className={styles.gender}>
                  <input type="radio" name="age" ref={dateRef} />
                  Female
                </div>
              </div>
            </div>
          </div>
          <div className={styles.parentInfo}>
            <h1>Parent/Guardian Info</h1>
            <div className={styles.content}>
              <div className={styles.item}>
                <input type="text" placeholder="Parent/Guardian Name" />
              </div>
              <div className={styles.item}>
                <input type="number" placeholder="Phone Number" />
              </div>
            </div>
          </div>
          <div className={styles.offence}>
            <h1>
              Offense (Check All That Apply):{" "}
              <sup>
                <span className={styles.ast}>*</span>
              </sup>
            </h1>
            <div className={styles.content}>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Disruptive Behavior</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Insubordination</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Bullying</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Fighting</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Vandalism</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>cheating</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Truancy/ Ditching Class</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Use Of Inappropriate Language </p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Possession of prohibited items </p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Theft </p>
              </div>
              {/* ................................................................. */}
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Not completing homework/classwork</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <p>Romantic Relationship</p>
              </div>
              <div className={styles.item}>
                <input type="checkbox" placeholder="Parent/Guardian Name" />
                <span>
                  <p>Other (specify)</p> <br />
                  <textarea
                    name=""
                    id=""
                    placeholder="Write something here..."
                  ></textarea>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.Information}>
            <h1>
              Information{" "}
              <sup>
                <span className={styles.ast}>*</span>
              </sup>
            </h1>
            <div className={styles.content}>
              <div className={styles.leftContent}>
                <div className={styles.item}>
                  <input
                    type="date"
                    placeholder="Date Of Incident"
                    ref={dateRef}
                  />
                </div>
                <div className={styles.item}>
                  <select name="" id="">
                    <option value="">choose location</option>
                    <option value="">Class room</option>
                    <option value="">Hallway</option>
                  </select>
                </div>
                <div className={styles.item}>
                  <input type="time" placeholder="Time" ref={timeRef} />
                </div>
                <div className={styles.item}>
                  <select name="" id="">
                    <option value="">choose location</option>
                    <option value="">Class room</option>
                    <option value="">Hallway</option>
                  </select>
                </div>
              </div>
              <div className={styles.rightContent}>
                <p>Description of the incident</p>
                <textarea
                  name=""
                  id=""
                  placeholder="Write discription here"
                ></textarea>
              </div>
            </div>
          </div>

          {/* <div className={styles.parentInfo}></div>
           */}
        </div>
        <button onClick={submitHandler}>{submit} </button>
      </div>
    </>
  );
}
export default Home;
