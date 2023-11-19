import './index.css'
import $ from "jquery";
// eslint-disable-next-line
import { useGlobalState, setFinished, setPause, setContinue } from "../../state";
import { useState, useEffect, useRef } from "react";

const CurrentUserStats = () => {
  const [direction, setDirection] = useState("");
  const [globalState] = useGlobalState('globalState');
  const moves = useRef(0);

  const directionCounter = (event) => {
    switch (event.key) {
      case "ArrowUp":
      case "w":
      case "ArrowDown":
      case "s":
      case "ArrowLeft":
      case "a":
      case "ArrowRight":
      case "d":
        setDirection(event.key);
        break;
      default:
        break;
    }
  }

  document.addEventListener('keyup', directionCounter)

  useEffect(() => {
    if (globalState === -1) {
      moves.current = 0;
    } else if (globalState === 1) {
      moves.current++;
      $("#moves-itself").text(moves.current);
    }
  }, [direction, globalState]);

  return(
    <div id='current-user-stats'>
      <div id='u-stats-left'>
        <p className='u-text'>MAX SCORE</p>
        <p className='u-text' id='max-score-itself'>0</p>
      </div>
      <div id='u-stats-right'>
        <p className='u-text'>MOVES</p>
        <p className='u-text' id='moves-itself'>0</p>
      </div>
    </div>
  )
}

export default CurrentUserStats