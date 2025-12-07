function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inRange(liczba, min, max) {
  if (liczba < min) return min;
  if (liczba > max) return max;
  return liczba;
}

class Rectangle {
  constructor(upperLeft, lowerRight) {
    this.upperLeft = upperLeft;
    this.lowerRight = lowerRight;
    this.passed = false;
  }
  isIntersecting(otherRect) {
    if (
      this.lowerRight.x < otherRect.upperLeft.x ||
      otherRect.lowerRight.x < this.upperLeft.x
    )
      return false;

    if (
      this.upperLeft.y > otherRect.lowerRight.y ||
      otherRect.upperLeft.y > this.lowerRight.y
    )
      return false;

    return true;
  }

  isCenterCrossingRight(otherRect) {
    const otherCenterX = (otherRect.upperLeft.x + otherRect.lowerRight.x) / 2;
    return otherCenterX > this.lowerRight.x;
  }

  getHeight() {
    return (
      inRange(this.lowerRight.y, 0, backgroundImage.height) -
      inRange(this.upperLeft.y, 0, backgroundImage.height)
    );
  }
}

const obstacleWidth = 52;
const gapWidth = 300; // 150
const distanceBetweenObstacles = 200;
const gapDifferances = 70;

class Obstacle {
  constructor(upRect, downRect, gapUpperLeft) {
    this.upRect = upRect;
    this.downRect = downRect;
    this.gapUpperLeft = gapUpperLeft;
  }

  isIntersecting(otherRect) {
    return (
      this.upRect.isIntersecting(otherRect) ||
      this.downRect.isIntersecting(otherRect)
    );
  }

  move(vx) {
    this.upRect.upperLeft.x -= vx;
    this.upRect.lowerRight.x -= vx;
    this.downRect.upperLeft.x -= vx;
    this.downRect.lowerRight.x -= vx;
    this.gapUpperLeft.x -= vx;
  }

  isOffScreen() {
    return this.downRect.lowerRight.x <= 0;
  }

  //52x320
  draw(ctx) {
    // down

    ctx.drawImage(
      greenPipe,
      0,
      0,
      greenPipe.width,
      this.downRect.getHeight(),
      this.downRect.upperLeft.x,
      inRange(this.downRect.upperLeft.y, 0, backgroundImage.height),
      greenPipe.width,
      this.downRect.getHeight()
    );

    ctx.save();

    ctx.translate(
      inRange(this.upRect.lowerRight.x, 0, backgroundImage.height),
      inRange(this.upRect.lowerRight.y, 0, backgroundImage.height)
    );
    ctx.rotate(-Math.PI);

    ctx.drawImage(
      greenPipe,
      0,
      0,
      greenPipe.width,
      this.upRect.lowerRight.y,
      0,
      0,
      greenPipe.width,
      this.upRect.lowerRight.y
    );

    ctx.restore();
  }
}
//24x36
const NUMBER_WIDTH = 24;
const NUMBER_HEIGHT = 36;

class screenNumber {
  constructor() {
    this.score = 0;
  }

  reset() {
    this.score = 0;
  }

  setScore(score) {
    this.score = score;
  }

  point() {
    this.score += 1;
  }

  setFromLocalStorage() {}

  updateLocalStorage() {}

  draw(ctx, x, y) {
    let copyScore = this.score;

    if (copyScore == 0) {
      let curr = copyScore;

      let prop = getNumberProperties(curr);

      ctx.drawImage(
        prop.image,
        0,
        0,
        prop.width,
        prop.height,
        x,
        y,
        prop.width,
        prop.height
      );
    }

    while (copyScore > 0) {
      //console.log(copyScore);

      let curr = copyScore % 10;
      copyScore = Math.floor(copyScore / 10);

      let prop = getNumberProperties(curr);

      ctx.drawImage(
        prop.image,
        0,
        0,
        prop.width,
        prop.height,
        x,
        y,
        prop.width,
        prop.height
      );

      x -= prop.width;
    }
  }
}

function getNumbersScreenSize(number) {
  const digits = number.toString();
  let totalWidth = 0;

  for (let i = 0; i < digits.length; i++) {
    const prop = getNumberProperties(Number(digits[i]));
    totalWidth += prop.width;
  }

  return {
    width: totalWidth,
    height: 36,
  };
}

function generateNextObstacle(previousObtsacle) {
  previous_gap_y = previousObtsacle.gapUpperLeft.y;

  gap_x = previousObtsacle.gapUpperLeft.x + randomInt(100, 200) + 40;
  gap_y = randomInt(50, 512 - 50 - gapWidth); //inRange(
  // randomInt(
  //   previous_gap_y - gapDifferances,
  //   previous_gap_y + gapWidth + gapDifferances
  // ),
  //   50,
  //   512 - 50 - gapWidth
  // );

  upRect = new Rectangle(
    new Vector2d(gap_x, -800),
    new Vector2d(gap_x + obstacleWidth, gap_y)
  );
  downRect = new Rectangle(
    new Vector2d(gap_x, gap_y + gapWidth),
    new Vector2d(gap_x + obstacleWidth, 800)
  );

  return new Obstacle(upRect, downRect, new Vector2d(gap_x, gap_y));
}

//288x512
function generateFirstObstacle() {
  gap_x = 340;
  gap_y = randomInt(50, 512 - 50 - gapWidth);

  upRect = new Rectangle(
    new Vector2d(gap_x, -800),
    new Vector2d(gap_x + obstacleWidth, gap_y)
  );
  downRect = new Rectangle(
    new Vector2d(gap_x, gap_y + gapWidth),
    new Vector2d(gap_x + obstacleWidth, 800)
  );

  return new Obstacle(upRect, downRect, new Vector2d(gap_x, gap_y));
}

function getNumberProperties(number) {
  const size = {
    0: { image: zeroImage, width: zeroImage.width, height: zeroImage.height },
    1: { image: oneImage, width: oneImage.width, height: oneImage.height },
    2: { image: twoImage, width: twoImage.width, height: twoImage.height },
    3: {
      image: threeImage,
      width: threeImage.width,
      height: threeImage.height,
    },
    4: { image: fourImage, width: fourImage.width, height: fourImage.height },
    5: { image: fiveImage, width: fiveImage.width, height: fiveImage.height },
    6: { image: sixImage, width: sixImage.width, height: sixImage.height },
    7: {
      image: sevenImage,
      width: sevenImage.width,
      height: sevenImage.height,
    },
    8: {
      image: eightImage,
      width: eightImage.width,
      height: eightImage.height,
    },
    9: { image: nineImage, width: nineImage.width, height: nineImage.height },
  };

  return size[number];
}

class Vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function initGame() {
  score.reset();
  hitted = false;
  initBird();
  initObstacles();
}

let obstacles = [];
let points = 0;

const gap_heigth = 100;
const max_heigth = 500;

// 'START', 'PLAYING', 'GAME_OVER'
let gameState = "START";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const backgroundImage = new Image(); // 288x512
const startImage = new Image(); // 184x267
const birdSheet = new Image();
const floorImage = new Image(); // 336x112
const gameOverImage = new Image();
const greenPipe = new Image();

const zeroImage = new Image();
const oneImage = new Image();
const twoImage = new Image();
const threeImage = new Image();
const fourImage = new Image();
const fiveImage = new Image();
const sixImage = new Image();
const sevenImage = new Image();
const eightImage = new Image();
const nineImage = new Image();

backgroundImage.src = "assets/Flappy Bird/background-day.png";
startImage.src = "assets/UI/message.png";
birdSheet.src = "assets/Flappy Bird/birdsheet.png";
floorImage.src = "assets/Flappy Bird/base.png";
gameOverImage.src = "assets/UI/gameover.png";
greenPipe.src = "assets/Flappy Bird/pipe-green.png";

zeroImage.src = "assets/UI/Numbers/0.png";
oneImage.src = "assets/UI/Numbers/1.png";
twoImage.src = "assets/UI/Numbers/2.png";
threeImage.src = "assets/UI/Numbers/3.png";
fourImage.src = "assets/UI/Numbers/4.png";
fiveImage.src = "assets/UI/Numbers/5.png";
sixImage.src = "assets/UI/Numbers/6.png";
sevenImage.src = "assets/UI/Numbers/7.png";
eightImage.src = "assets/UI/Numbers/8.png";
nineImage.src = "assets/UI/Numbers/9.png";

const dieSound = new Audio();
const hitSound = new Audio();
const pointSound = new Audio();
const swooshSound = new Audio();
const wingSound = new Audio();

dieSound.src = "assets/Sound Efects/die.ogg";
hitSound.src = "assets/Sound Efects/hit.ogg";
pointSound.src = "assets/Sound Efects/point.ogg";
swooshSound.src = "assets/Sound Efects/swoosh.ogg";
wingSound.src = "assets/Sound Efects/wing.ogg";

let score = new screenNumber();
let bestScore = new screenNumber();

function loadAssets() {
  const assets = [
    backgroundImage,
    startImage,
    birdSheet,
    floorImage,
    gameOverImage,
    greenPipe,

    zeroImage,
    oneImage,
    twoImage,
    threeImage,
    fourImage,
    fiveImage,
    sixImage,
    sevenImage,
    eightImage,
    nineImage,

    dieSound,
    hitSound,
    pointSound,
    swooshSound,
    wingSound,
  ];

  let loaded = 0;
  const total = assets.length;

  function checkDone() {
    loaded++;
    if (loaded === total) {
      score = new screenNumber();
      score.setScore(0);

      hitted = false;
      initBird();
      initObstacles();
      gameLoop();
    }
  }

  assets.forEach((asset) => {
    if (asset instanceof Image) {
      asset.onload = checkDone;
      asset.onerror = checkDone;
    } else {
      asset.oncanplaythrough = checkDone;
      asset.onerror = checkDone;
    }
  });
}

let clickBlocked = false;

function blockClicksFor(ms) {
  clickBlocked = true;
  setTimeout(() => (clickBlocked = false), ms);
}

const floor = new Rectangle(
  new Vector2d(0, backgroundImage.height),
  new Vector2d(
    backgroundImage.width,
    backgroundImage.height + floorImage.height
  )
);

// backgroundImage.onload = function () {
//   startImage.onload = function () {
//     initObstacles();
//     gameLoop();
//   };
// };

let vx = 2;
let vy = 0;

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space") return;
  if (clickBlocked) return;

  blockClicksFor(90);

  if (gameState == "START") {
    swooshSound.play();
    gameState = "PLAYING";
  } else if (gameState == "PLAYING") {
    if (!hitted) {
      vy = -7;
      wingSound.play();
    }
  } else if (gameState == "GAME_OVER") {
    initGame();
    swooshSound.play();
    gameState = "START";
  }
});

loadAssets();

function drawStartMenu() {
  ctx.drawImage(
    startImage,
    backgroundImage.width / 2 - startImage.width / 2,
    backgroundImage.height / 2 - startImage.height / 2,
    startImage.width,
    startImage.height
  );
}

function drawBackground() {
  ctx.drawImage(
    backgroundImage,
    0,
    0,
    backgroundImage.width,
    backgroundImage.height
  );
}

function drawGameOver() {
  ctx.drawImage(
    gameOverImage,
    backgroundImage.width / 2 - gameOverImage.width / 2,
    backgroundImage.height / 2 - gameOverImage.height / 2 - 150,
    gameOverImage.width,
    gameOverImage.height
  );
}

let hitted = false;

let floorX = 0;
let floorV = 1;

function drawFloor() {
  ctx.drawImage(
    floorImage,
    floorX,
    0,
    floorImage.width,
    floorImage.height,
    0,
    backgroundImage.height,
    floorImage.width,
    floorImage.height
  );
}

let BIRD_WIDTH = 34;
let BIRD_HEIGHT = 24;

let START_BIRD_X = backgroundImage.width / 2 - 70;
let START_BIRD_Y = backgroundImage.height / 2 + 70;

let ay = 2;
let ag = -0.3;

let x = START_BIRD_X;
let y = START_BIRD_Y;

function initBird() {
  vx = 1;
  vy = 0;
  x = backgroundImage.width / 2 - 70;
  y = backgroundImage.height / 2 + 70;
}

function initObstacles() {
  obstacles = [];
  obstacles.push(generateFirstObstacle());
  obstacles.push(generateNextObstacle(obstacles[obstacles.length - 1]));
  obstacles.push(generateNextObstacle(obstacles[obstacles.length - 1]));
}

function handleObstacles() {
  if (obstacles[0].isOffScreen()) {
    obstacles.shift();
    obstacles.push(generateNextObstacle(obstacles[obstacles.length - 1]));
  }

  obstacles.forEach((obstacle) => {
    obstacle.move(1);
    if (obstacle.isIntersecting(getBirdRect())) {
      vx = 0;
      if (!hitted) hitSound.play();
      blockClicksFor(300);
      hitted = true;
    }
    if (
      obstacle.downRect.isCenterCrossingRight(getBirdRect()) &&
      obstacle.downRect.passed == false &&
      hitted == false
    ) {
      obstacle.downRect.passed = true;
      score.point();
      pointSound.play();
    }
  });
}

function drawObstacles(ctx) {
  obstacles.forEach((obstacle) => {
    obstacle.draw(ctx);
  });
}

let timer = 0;
let frameX = 0;

function angleMapping(x) {
  const NEG_MAX_X = -7.3;
  const POS_MAX_X = 7.3;
  const NEG_MAX_Y = -Math.PI / 6;
  const POS_MAX_Y = Math.PI / 2;

  if (x >= 0 && x <= POS_MAX_X) {
    return (x / POS_MAX_X) * POS_MAX_Y;
  }

  if (x < 0 && x >= NEG_MAX_X) {
    return (x / NEG_MAX_X) * NEG_MAX_Y;
  }

  if (x > POS_MAX_X) return POS_MAX_Y;
  if (x < NEG_MAX_X) return NEG_MAX_Y;

  return 0;
}

function updateGame() {
  //update bird
  if (timer % 6 == 0) {
    frameX += 1;
  }
  if (frameX > 2) {
    frameX = 0;
  }

  y = y + vy;
  vy = vy - ag;
  timer += 1;
  //update floor

  floorX += floorV;
  if (floorX >= 50) {
    floorX = 0;
  }

  if (floor.isIntersecting(getBirdRect())) {
    dieSound.play();
    y = backgroundImage.height - 5;
    vx = 0;
    blockClicksFor(200);
    gameState = "GAME_OVER";
  }
}

function drawBird() {
  ctx.save();
  ctx.translate(x, y);

  ctx.rotate(angleMapping(vy));

  ctx.drawImage(
    birdSheet,
    frameX * BIRD_WIDTH,
    0,
    BIRD_WIDTH,
    BIRD_HEIGHT,
    -BIRD_WIDTH / 2, // x
    -BIRD_WIDTH / 2, // y
    BIRD_WIDTH,
    BIRD_HEIGHT
  );

  ctx.restore();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getBirdRect() {
  return new Rectangle(
    new Vector2d(x - BIRD_WIDTH / 2 - 2, y - BIRD_HEIGHT / 2 + 4),
    new Vector2d(x + BIRD_WIDTH / 2 - 2, y + BIRD_HEIGHT / 2 + 4)
  );
}

function isIntersecting(rect) {
  leftUpper, (lowerRight = getBirdBounds());
}

function gameLoop() {
  clear();
  drawBackground();
  drawFloor();

  switch (gameState) {
    case "START":
      drawStartMenu();
      drawBird();

      break;
    case "PLAYING":
      updateGame();
      handleObstacles();
      drawObstacles(ctx);
      drawBird();
      score.draw(ctx, backgroundImage.width - NUMBER_WIDTH - 10, 10);

      break;
    case "GAME_OVER":
      drawObstacles(ctx);
      drawGameOver();
      drawBird();
      break;
  }
  requestAnimationFrame(gameLoop);
}
