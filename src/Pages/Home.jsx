import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
function Home() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    // Date Picker
    flatpickr(dateRef.current, {
      dateFormat: "Y-m-d",
      maxDate: "today", // Date format
    });

    // Time Picker
    flatpickr(timeRef.current, {
      enableTime: true, // Enable time selection
      noCalendar: true, // Hide the calendar
      dateFormat: "H:i", // Time format
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
  return (
    <>
      <div className={styles.pfp} onClick={NavigateSignupHandler}></div>
      <div className={styles.header}>
        <h1 className={styles.heading}>Good {timeEvent}, Teacher</h1>
        <p>Andinet International School Discipline Referral Form</p>
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>Referral form</h1>
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
            <h1>Student Info</h1>
            <div className={styles.content}>
              <div className={styles.item}>
                <input type="text" placeholder="Student Name" />
              </div>
              <div className={styles.item}>
                <input type="text" placeholder="Year" />
              </div>
              <div className={styles.item}>
                <input type="date" placeholder="Date" ref={dateRef} />
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
            <h1>Offense (Check All That Apply):</h1>
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
            <h1>Information</h1>
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
                  <input type="text" placeholder="Location" />
                </div>
                <div className={styles.item}>
                  <input type="time" placeholder="Time" ref={timeRef} />
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
        <button>
          Submit{" "}
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontWeight: "400" }} />
        </button>
      </div>
    </>
  );
}
export default Home;
