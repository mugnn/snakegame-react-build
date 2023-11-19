import "./index.css";
import startImg from "./assets/start.svg";
import stopImg from "./assets/stop.svg";
import pauseImg from "./assets/pause.svg";
// eslint-disable-next-line
import Swal from "sweetalert2";
// eslint-disable-next-line
import { useGlobalState, setFinished, setPause, setContinue, verifyStop, setQuit, setNull } from "../../state";
import { useState, useEffect, useRef } from "react";
import $ from "jquery";

const TimeCounter = () => {
  //trigger start - stop - pause
  const [start, setStart] = useState(false);
  const [resume, setResume] = useState(false);
  const [stop, setStop] = useState(false);

  const [globalState] = useGlobalState('globalState');

  // tentar trocar isso por variavel global -->
  useEffect(() => {
    if (globalState === 1) {
      setStart(true);
    } else if (globalState === 0) {
      setResume(true);
    } else if (globalState === -1) {
      setResume(true);
      setStop(true);
    }
  }, [globalState]);

  let timerInterval = useRef();
  let milliseconds = useRef(0);
  let seconds = useRef(0);
  let minutes = useRef(0);

  useEffect(() => {
    const formatTime = () => {
      return (
        `${minutes.current.toString().padStart(2, "0")}:` +
        `${seconds.current.toString().padStart(2, "0")};` +
        `${milliseconds.current.toString().padStart(3, "0")}`
      );
    };

    const updateTimer = () => {
      milliseconds.current += 4;
      if (milliseconds.current === 1000) {
        milliseconds.current = 0;
        seconds.current += 1;
        if (seconds.current === 60) {
          seconds.current = 0;
          minutes.current += 1;
        }
      }
      $("#counter").text(formatTime());
    };

    if (start) {
      if (!timerInterval.current) {
        timerInterval.current = setInterval(updateTimer, 1);
      }
      setStart(false);
    } else if (resume) {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
        timerInterval.current = 0;
        verifyStop.vState = 0;
      }
      setResume(false);
    } else if (stop) {
      if (!timerInterval.current) {
        if (globalState !== -1) {
          verifyStop.vAdvMode = true;
          Swal.fire({
            title: "Warning!",
            text: "Are you sure you're going to give up?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ok",
            cancelButtonText: "cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              setNull();
              setQuit();
            } else if (result.dismiss) {
              verifyStop.vAdvMode = false;
              verifyStop.vState = 0;
            }
          });
        } else {
          milliseconds.current = 0;
          seconds.current = 0;
          minutes.current = 0;
          timerInterval.current = 0;
          $("#counter").text(formatTime());
        }
      }
      setStop(false);
    }
    // eslint-disable-next-line
  }, [start, resume, stop]);

  return (
    <div id="time-counter">
      <div id="trigger-buttons">
        <div id="trigger-start" className="trigger-button">
          <img alt="start" src={startImg} id="img-start-trigger" />
        </div>
        <div
          id="trigger-stop"
          className="trigger-button"
          onClick={() => setStop(true)}
        >
          <img alt="start" src={stopImg} id="img-stop-trigger" />
        </div>
        <div
          id="trigger-pause"
          className="trigger-button"
          onClick={() => setResume(true)}
        >
          <img alt="start" src={pauseImg} id="img-pause-trigger" />
        </div>
      </div>
      <div id="time-counter-itself">
        <p id="time-text">TIME</p>
        <p id="counter">00:00;000</p>
      </div>
    </div>
  );
};

export default TimeCounter;
