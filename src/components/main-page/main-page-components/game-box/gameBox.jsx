import "./index.css";
import SnakeGame from './snakegame';
import { useGlobalState, setFinished, resetQuit} from "../../state";
import { useState, useEffect } from "react";

// caixa do jogo em si. instância novo jogos e reseta as variáveis ao fim do ciclo de vida do jogo.

const GameBox = () => {
  const [userQuit] = useGlobalState('quit');
  const [snakeGame, setSnakeGame] = useState(null);

  useEffect(() => {
    if (userQuit) {
      if (!snakeGame) {
        const newSnakeGame = new SnakeGame();
        setSnakeGame(newSnakeGame);
      }

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
