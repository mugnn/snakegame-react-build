import $ from "jquery";
import Swal from "sweetalert2";
// eslint-disable-next-line
import {
  setFinished,
  setPause,
  setContinue,
  setNull,
  verifyStop,
  setQuit,
  getAction,
} from "../../state";

class SnakeGame {
  constructor() {
    this.blockSize = 100;
    this.rows = 32;
    this.columns = 28;

    this.board = document.getElementById("play__board");
    this.board.height = this.rows * this.blockSize;
    this.board.width = this.columns * this.blockSize;
    this.context = this.board.getContext("2d");

    this.counter = 0;

    //--snake-- > head
    this.snakeX = this.blockSize * 5;
    this.snakeY = this.blockSize * 5;
    this.currentPosX = this.snakeX;
    this.currentPosY = this.snakeY;
    this.velocityX = 0;
    this.velocityY = 0;
    this.velocityUpdate = 0.2;

    this.canChangeDirection = false;
    this.currentKey = {
      key: "",
    };

    //--snake-- > body
    this.snakeBody = [];
    this.runId = null;

    //--food--
    this.foodX = 0;
    this.foodY = 0;

    //--gameOver--
    this.gameOver = false;

    document.addEventListener("keyup", this.changeDirection.bind(this));
  }

  start() {
    this.placeFood();
    this.update();
  }

  update() {
    if (this.gameOver) {
      verifyStop.vAdvMode = true;
      setFinished();
      return;
    }

    if (verifyStop.vState === 0 || verifyStop.vAdvMode) {
      setPause();
      return;
    }


    this.context.clearRect(0, 0, this.board.width, this.board.height);

    this.context.fillStyle = "#E06E6E"; // food color
    this.context.fillRect(
      this.foodX,
      this.foodY,
      this.blockSize,
      this.blockSize
    );

    if (
      Math.round(this.snakeX) === this.foodX &&
      Math.round(this.snakeY) === this.foodY
    ) {
      for (let i = 0; i < this.velocityUpdate ** -1; i++) {
        this.snakeBody.push([this.foodX, this.foodY]);
      }

      getAction();
      this.placeFood();
      this.updatePoints();
    }

    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i] = this.snakeBody[i - 1];
    }

    if (this.snakeBody.length) {
      this.snakeBody[0] = [this.snakeX, this.snakeY];
    }

    this.context.fillStyle = "#87E26D"; //snake color
    this.snakeX += this.velocityX * this.blockSize;
    this.snakeY += this.velocityY * this.blockSize;
    this.context.fillRect(
      this.snakeX,
      this.snakeY,
      this.blockSize,
      this.blockSize
    );

    for (let i = 0; i < this.snakeBody.length; i++) {
      this.context.fillRect(
        this.snakeBody[i][0],
        this.snakeBody[i][1],
        this.blockSize,
        this.blockSize
      );
      //losing conditional--0
      if (
        this.snakeX === this.snakeBody[i][0] &&
        this.snakeY === this.snakeBody[i][1]
      ) {
        this.gameOver = true;
        Swal.fire({
          title: "Defeat!",
          text: 'Press "ok" to restart.',
          icon: "error",
          confirmButtonText: "ok",
        }).then(() => {
          this.resetValues();
        });
      }
    }
    //losing conditional--1
    if (
      (this.snakeX < 0 ||
      this.snakeX > this.columns * this.blockSize - 100 ||
      this.snakeY < 0 ||
      this.snakeY > this.rows * this.blockSize - 100)
    ) {
      this.gameOver = true;
      Swal.fire({
        title: "Defeat!",
        text: 'Press "ok" to restart.',
        icon: "error",
        confirmButtonText: "ok",
      }).then(() => {
        this.resetValues();
      });
    }

    if (this.velocityX > 0) {
      this.currentPosX += this.velocityX;
      this.currentPosX = parseFloat(this.currentPosX.toFixed(1));
    } else if (this.velocityX < 0) {
      this.currentPosX += this.velocityX;
      this.currentPosX = parseFloat(this.currentPosX.toFixed(1));
    } else if (this.velocityY > 0) {
      this.currentPosY += this.velocityY;
      this.currentPosY = parseFloat(this.currentPosY.toFixed(1));
    } else if (this.velocityY < 0) {
      this.currentPosY += this.velocityY;
      this.currentPosY = parseFloat(this.currentPosY.toFixed(1));
    }

    if (!this.canChangeDirection) {
      this.changeDirection(this.currentKey);
    }

    this.runId = requestAnimationFrame(this.update.bind(this));
  }

  changeDirection(event) {
    if (verifyStop.vState === 0) {
      verifyStop.vState = null;
      setNull();
      this.update();
    }

    if (
      (!Number.isInteger(this.currentPosX) ||
      !Number.isInteger(this.currentPosY)) || verifyStop.vAdvMode
    ) {
      this.canChangeDirection = false;
    } else {
      this.canChangeDirection = true;
    }
    
    if (this.canChangeDirection) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          if (this.velocityY !== this.velocityUpdate) {
            this.velocityX = 0;
            this.velocityY = -this.velocityUpdate;
            setContinue();
          }
          break;
        case "ArrowDown":
        case "s":
          if (this.velocityY !== -this.velocityUpdate) {
            this.velocityX = 0;
            this.velocityY = this.velocityUpdate;
            setContinue();
          }
          break;
        case "ArrowLeft":
        case "a":
          if (this.velocityX !== this.velocityUpdate) {
            this.velocityX = -this.velocityUpdate;
            this.velocityY = 0;
            setContinue();
          }
          break;
        case "ArrowRight":
        case "d":
          if (this.velocityX !== -this.velocityUpdate) {
            this.velocityX = this.velocityUpdate;
            this.velocityY = 0;
            setContinue();
          }
          break;
        default:
          break;
      }
    } else {
      this.currentKey = {
        key: event.key,
      };
    }
  }

  placeFood() {
    this.foodX = Math.floor(Math.random() * this.columns) * this.blockSize;
    this.foodY = Math.floor(Math.random() * this.rows) * this.blockSize;
  }

  updatePoints() {
    this.counter += 50;
    $("#score-value").text(this.counter);
  }

  resetValues() {
    setNull();
    setQuit();
    verifyStop.vState = null;
    verifyStop.vAdvMode = false;
    this.counter = 0;
    this.snakeX = this.blockSize * 5;
    this.snakeY = this.blockSize * 5;
    this.currentPosX = this.snakeX;
    this.currentPosY = this.snakeY;
    this.velocityX = 0;
    this.velocityY = 0;
    this.snakeBody = [];
    this.gameOver = false;
    this.currentKey = {
      key: "",
    };
    $("#score-value").text(0);
    $("#moves-itself").text(0);
    cancelAnimationFrame(this.runId)
    this.start();
  }
}

export default SnakeGame;
