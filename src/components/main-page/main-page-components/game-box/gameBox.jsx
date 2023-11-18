import "./index.css";
import Swal from "sweetalert2";
import $ from "jquery";
import appState from "../..";
// eslint-disable-next-line
import { useState, useEffect, useRef } from "react";

//dirty -->
const GameBox = () => {
  const [direction, setDirection] = useState("");
  const [gameState, setGameState] = useState(true);
  const moves = useRef(-1);
  //--board-- @snakegame-db

  const blockSize = 100;
  const rows = 32;
  const columns = 28;

  let board = useRef();
  let context = useRef();

  let counter = 0;

  //--snake-- > head
  var snakeX = blockSize * 5;
  var snakeY = blockSize * 5;
  let currentPosX = snakeX,
    currentPosY = snakeY;
  let velocityX = 0;
  let velocityY = 0;
  let velocityUpdate = 0.2;

  let canChangeDirection = false;
  let currentKey = {
    key: "",
  };

  //--snake-- > body
  let snakeBody = [];

  //--food--
  let foodX;
  let foodY;

  //--gameOver--
  let gameOver = false;

  let resetValues = () => {
    counter = 0;
    moves.current = -1;
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    currentPosX = snakeX;
    currentPosY = snakeY;
    velocityX = 0;
    velocityY = 0;
    velocityUpdate = 0.2;
    canChangeDirection = false;
    currentKey = {
      key: "",
    };
    snakeBody = [];
    gameOver = false;
    $("#score-value").text(0);
    $("#moves-itself").text(0);
    console.log('b')
    appState.gameState = 1;
    board.current = document.getElementById("play__board");
    board.current.height = rows * blockSize;
    board.current.width = columns * blockSize;
    context.current = board.current.getContext("2d");

    if (appState.toReset) {
      appState.toReset = false;
      appState.gameState = 1;
    }

    placeFood();
    update();
  };

  // tentar trocar isso por variavel global
  useEffect(() => {
    const interval = setInterval(() => {
      if (appState.toReset) {
        resetValues();
      }
    }, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  });

  useEffect(() => {
    console.log('c')
    board.current = document.getElementById("play__board");
    board.current.height = rows * blockSize;
    board.current.width = columns * blockSize;
    context.current = board.current.getContext("2d");
    appState.gameState = 1;

    document.addEventListener("keyup", changeDirection);

    placeFood();
    update();
    
    // eslint-disable-next-line
  }, []);

  function update() {
    if (gameOver) {
      appState.gameState = -1;
      return;
    }
    if (appState.gameState === 0) {
      return;
    }
    
    context.current.clearRect(0, 0, board.current.width, board.current.height);
    
    context.current.fillStyle = "#E06E6E"; // food color
    context.current.fillRect(foodX, foodY, blockSize, blockSize);
    
    if (Math.round(snakeX) === foodX && Math.round(snakeY) === foodY) {
      for (let i = 0; i < velocityUpdate ** -1; i++) {
        snakeBody.push([foodX, foodY]);
      }
      
      console.log(snakeBody);
      placeFood();
      updatePoints();
    }
    
    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
    }
    
    if (snakeBody.length) {
      snakeBody[0] = [snakeX, snakeY];
    }
    
    context.current.fillStyle = "#87E26D"; //snake color
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.current.fillRect(snakeX, snakeY, blockSize, blockSize);

    
    for (let i = 0; i < snakeBody.length; i++) {
      context.current.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
      //losing conditional--0
      if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
        gameOver = true;
        appState.counterState = false;
        Swal.fire({
          title: "Você Perdeu!",
          text: 'Pressione "ok" para reiniciar.',
          icon: "error",
          confirmButtonText: "ok",
        }).then(() => {
          console.log('a')
          appState.counterState = true;
          resetValues();
        });
      }
    }
    //losing conditional--1
    if (
      snakeX < 0 ||
      snakeX > columns * blockSize - 100 ||
      snakeY < 0 ||
      snakeY > rows * blockSize - 100
    ) {
      gameOver = true;
      appState.counterState = false;
      Swal.fire({
        title: "Você Perdeu!",
        text: 'Pressione "ok" para reiniciar.',
        icon: "error",
        confirmButtonText: "ok",
      }).then(() => {
        console.log('a')
        appState.counterState = true;
        resetValues();
      });
    }

    if (velocityX > 0) {
      currentPosX += velocityX;
      currentPosX = parseFloat(currentPosX.toFixed(1));
    } else if (velocityX < 0) {
      currentPosX += velocityX;
      currentPosX = parseFloat(currentPosX.toFixed(1));
    } else if (velocityY > 0) {
      currentPosY += velocityY;
      currentPosY = parseFloat(currentPosY.toFixed(1));
    } else if (velocityY < 0) {
      currentPosY += velocityY;
      currentPosY = parseFloat(currentPosY.toFixed(1));
    }

    if (!canChangeDirection) {
      changeDirection(currentKey);
    }



    requestAnimationFrame(update);
  }

  function changeDirection(event) {
    if (appState.gameState === 0) {
      appState.gameState = 1;
      console.log('a')
    }

    if (!Number.isInteger(currentPosX) || !Number.isInteger(currentPosY)) {
      canChangeDirection = false;
    } else {
      canChangeDirection = true;
    }

    if (canChangeDirection) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          if (velocityY !== velocityUpdate) {
            velocityX = 0;
            velocityY = -velocityUpdate;
            setDirection(event.key);
          }
          break;
        case "ArrowDown":
        case "s":
          if (velocityY !== -velocityUpdate) {
            velocityX = 0;
            velocityY = velocityUpdate;
            setDirection(event.key);
          }
          break;
        case "ArrowLeft":
        case "a":
          if (velocityX !== velocityUpdate) {
            velocityX = -velocityUpdate;
            velocityY = 0;
            setDirection(event.key);
          }
          break;
        case "ArrowRight":
        case "d":
          if (velocityX !== -velocityUpdate) {
            velocityX = velocityUpdate;
            velocityY = 0;
            setDirection(event.key);
          }
          break;
        default:
          break;
      }
    } else {
      currentKey = {
        key: event.key,
      };
    }
  }

  function placeFood() {
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
  }

  function updatePoints() {
    counter += 50;
    $("#score-value").text(counter);
  }

  useEffect(() => {
    moves.current++;
    $("#moves-itself").text(moves.current);
  }, [direction]);

  return (
    <div id="game-box">
      <p id="score-value">0</p>
      <canvas id="play__board"></canvas>
    </div>
  );
};

export default GameBox;
