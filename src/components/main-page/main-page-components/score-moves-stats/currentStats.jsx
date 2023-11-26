import './index.css'
import $ from "jquery";
// eslint-disable-next-line
import { useGlobalState, resetAction, updateMoves } from "../../state";
import { useState, useEffect, useRef } from "react";

// componente responsável por renderizar informações como o score máximo daquela sessão e o número de movimentações feitas pelo usuário na partida.
const CurrentUserStats = () => {
  const [direction, setDirection] = useState("");
  const [globalState] = useGlobalState('globalState');
  const [snakeAction] = useGlobalState('getSnakeAction');

  const moves = useRef(0);
  const userScore = useRef(0);
  // o compareScore armazena o score das últimas paridas jogadas pelo usuário na mesma sessão.
  const compareScore = useRef([0]);

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

  document.addEventListener('keydown', directionCounter)

  // conta o número de movimentações.
  useEffect(() => {
    if (globalState === -1) {
      moves.current = 0;
    } else if (globalState === 1) {
      moves.current++;
      updateMoves(moves.current);
      $("#moves-itself").text(moves.current);
    }
  }, [direction, globalState]);

  // define o score máximo comparando com o score máximo atual. Caso seja maior do que o score máximo atual o score é renderizado em tempo real conforme o ciclo de vida da parida.
  useEffect(() => {
    if (snakeAction) {
      userScore.current += 50;
      if (userScore.current > compareScore.current[0]) {
        $("#max-score-itself").text(userScore.current);
      } else {
        $("#max-score-itself").text(compareScore.current[0]);
      }
      resetAction();
    }
    if (globalState === -1) {
      compareScore.current.push(userScore.current)
      compareScore.current = [...new Set(compareScore.current)];
      compareScore.current.sort((a, b) => b - a);

      userScore.current = 0;
    }
  }, [snakeAction, globalState])

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