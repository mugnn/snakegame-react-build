import "./index.css";
import SnakeGame from './snakegame';
import { useGlobalState, setFinished, resetQuit } from "../../state";
import { useState, useEffect } from "react";

const GameBox = () => {
  const [userQuit] = useGlobalState('quit');
  const [snakeGame, setSnakeGame] = useState(null);

  useEffect(() => {
    if (userQuit) {
      if (!snakeGame) {
        const newSnakeGame = new SnakeGame();
        setSnakeGame(newSnakeGame);
      }

      // Verifica se a instância está definida antes de chamar o método resetValues
      if (snakeGame && typeof snakeGame.resetValues === 'function') {
        snakeGame.resetValues();
        setFinished();
        resetQuit();
      }
    }
  }, [userQuit, snakeGame]);

  return (
    <div id="game-box">
      <p id="score-value">0</p>
      <canvas id="play__board"></canvas>
    </div>
  );
};

export default GameBox;
