import "./index.css";
import startImg from "./assets/start.svg";
import stopImg from "./assets/stop.svg";
import pauseImg from "./assets/pause.svg";
import appState from "../..";
import { useState, useEffect, useRef } from "react";
import $ from "jquery";

const TimeCounter = () => {
  //trigger start - stop - pause
  const [start, setStart] = useState(false);
  const [resume, setResume] = useState(false);
  const [stop, setStop] = useState(false);


  // tentar trocar isso por variavel global
  useEffect(() => {
    document.addEventListener("keyup", getStarted);
    const interval = setInterval(() => {
      if (appState.gameState === -1) {
        setResume(true);
        setStop(true);
      } else if (appState.gameState === 0) {
        setResume(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  function getStarted(event) {
    switch (event.key) {
      case "ArrowUp":
      case "w":
      case "ArrowDown":
      case "s":
      case "ArrowLeft":
      case "a":
      case "ArrowRight":
      case "d":
        console.log(appState.counterState)
        console.log(appState.gameState)
        console.log(appState.toReset)
        if (appState.counterState) {
          setStart(true)
        }
        break;
      default:
        break;
    }
  }

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
        console.log('2')
        appState.counterState = false;
        timerInterval.current = setInterval(updateTimer, 1);
      }
      setStart(false);
    } else if (resume) {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
        timerInterval.current = false;
        appState.gameState = 0;
      }
      setResume(false);
    } else if (stop) {
      if (!timerInterval.current) {
        milliseconds.current = 0;
        seconds.current = 0;
        minutes.current = 0;
        timerInterval.current = false;
        if (appState.gameState === 0) {
          appState.toReset = true;
        }
        $("#counter").text(formatTime());
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
          onClick={() => setStop(!stop)}
        >
          <img alt="start" src={stopImg} id="img-stop-trigger" />
        </div>
        <div
          id="trigger-pause"
          className="trigger-button"
          onClick={() => setResume(!resume)}
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
