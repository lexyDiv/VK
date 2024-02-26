/* eslint-disable no-unused-vars */
/* eslint-disable no-self-compare */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-expressions */
import blueBaseBooImg from "./src/baseBoo.png";
import yellowBaseBooImg from "./src/yellowBaseBoo.png";
import redBaseBooImg from "./src/redBaseBoo.png";
import greenBaseBooImg from "./src/greenBaseBoo.png";
import violetBaseBooImg from "./src/violetBaseBoo.png";
import bombBooImg from "./src/bombBoo.png";
import boo2Img from "./src/boo2.png";
import itemsArtImg from "./src/itemsArt1.png";
import blueItemImg from "./src/blueItem.png";
import yellowItemImg from "./src/yellowItem.png";
import redItemImg from "./src/redItem.png";
import greenItemImg from "./src/greenItem.png";
import violetItemImg from "./src/violetItem.png";
import aroundItemImg from "./src/itemAround.png";
import redCristalImg from "./src/redCristal.png";
import starImg from "./src/star.png";
import fon1Img from "./src/fon-1.jpg";
import fon2Img from "./src/fon2.png";
import holeImg from "./src/hole.png";
import baseFoneImg from "./src/baseFone.jpg";
import baseFone2Img from "./src/baseFone2.png";
import tzzImg from "./src/tzz.png";
import elektroImg from "./src/elektro.png";
import rocketImg from "./src/rocket.png";
import rocketGoImg from "./src/rocketGo.png";
import aroundAnimItemImg from "./src/aroundAnimItem.png";
import lineUpImg from "./src/lineUp.png";
import lineDownImg from "./src/lineDown.png";
import lineLeftImg from "./src/lineLeft.png";
import lineRightImg from "./src/lineRight.png";
import crossImg from "./src/cross.png";
import violetCrossImg from "./src/violetCross.png";
import blueSpotImg from "./src/blueSpot.png";

export function matchStart(canvas) {
  const blueBaseBoo = new Image();
  blueBaseBoo.src = blueBaseBooImg;

  const yellowBaseBoo = new Image();
  yellowBaseBoo.src = yellowBaseBooImg;

  const redBaseBoo = new Image();
  redBaseBoo.src = redBaseBooImg;

  const greenBaseBoo = new Image();
  greenBaseBoo.src = greenBaseBooImg;

  const violetBaseBoo = new Image();
  violetBaseBoo.src = violetBaseBooImg;

  const bombBoo = new Image();
  bombBoo.src = bombBooImg;

  const boo2 = new Image();
  boo2.src = boo2Img;

  const itemsArt = new Image();
  itemsArt.src = itemsArtImg;

  const blueItem = new Image();
  blueItem.src = blueItemImg;

  const yellowItem = new Image();
  yellowItem.src = yellowItemImg;

  const redItem = new Image();
  redItem.src = redItemImg;

  const greenItem = new Image();
  greenItem.src = greenItemImg;

  const violetItem = new Image();
  violetItem.src = violetItemImg;

  const aroundItem = new Image();
  aroundItem.src = aroundItemImg;

  const redCristal = new Image();
  redCristal.src = redCristalImg;

  const star = new Image();
  star.src = starImg;

  const fon1 = new Image();
  fon1.src = fon1Img;

  const fon2 = new Image();
  fon2.src = fon2Img;

  const hole = new Image();
  hole.src = holeImg;

  const baseFone = new Image();
  baseFone.src = baseFoneImg;

  const baseFone2 = new Image();
  baseFone2.src = baseFone2Img;

  const tzz = new Image();
  tzz.src = tzzImg;

  const elektro = new Image();
  elektro.src = elektroImg;

  const rocketI = new Image();
  rocketI.src = rocketImg;

  const rocketGo = new Image();
  rocketGo.src = rocketGoImg;

  const aroundAnimItem = new Image();
  aroundAnimItem.src = aroundAnimItemImg;

  const lineUp = new Image();
  lineUp.src = lineUpImg;

  const lineDown = new Image();
  lineDown.src = lineDownImg;

  const lineLeft = new Image();
  lineLeft.src = lineLeftImg;

  const lineRight = new Image();
  lineRight.src = lineRightImg;

  const cross = new Image();
  cross.src = crossImg;

  const violetCross = new Image();
  violetCross.src = violetCrossImg;

  const blueSpot = new Image();
  blueSpot.src = blueSpotImg;

  const fieldContur = {
    up: {
      image: lineUp,
      animX: 30,
      animY: 0,
      aWidth: 140,
      aHeight: 30,
      dopX: 0,
      dopY: -10,
      type: "up",
      gabX: 42,
      gabY: 10,
    },
    down: {
      image: lineDown,
      animX: 30,
      animY: 0,
      aWidth: 140,
      aHeight: 30,
      dopX: 0,
      dopY: 40,
      type: "down",
      gabX: 42,
      gabY: 10,
    },
    left: {
      image: lineLeft,
      animX: 0,
      animY: 30,
      aWidth: 30,
      aHeight: 140,
      dopX: -8,
      dopY: -1,
      type: "left",
      gabX: 10,
      gabY: 42,
    },
    right: {
      image: lineRight,
      animX: 0,
      animY: 30,
      aWidth: 30,
      aHeight: 140,
      dopX: 40,
      dopY: 0,
      type: "right",
      gabX: 10,
      gabY: 40,
    },
  };

  const images = {
    red: redBaseBoo,
    violet: violetBaseBoo,
    green: greenBaseBoo,
    yellow: yellowBaseBoo,
    blue: blueBaseBoo,
    around: boo2,
  };

  const imagesItems = {
    red: redItem,
    yellow: yellowItem,
    green: greenItem,
    violet: violetItem,
    blue: blueItem,
  };

  function getDistanse(obj, target) {
    const a = target.x - obj.x;
    const b = target.y - obj.y;
    const c = Math.sqrt(a * a + b * b);
    return { deltaX: a, deltaY: b, dis: c };
  }

  const colorsData = {
    y: 'yellow',
    b: 'blue',
    v: 'violet',
    r: 'red',
    g: 'green',
    z: 'z'
}

// const userField = [
//     ['w', 'w', 'w', 'w', 'y', 'g', 'r', 'w'],
//     ['',  '',  '',  '',  'y', 'g', 'y', 'w'],
//     ['',  '',  '',  '',  'b', 'v', 'r', '' ],
//     ['',  '',  '', 'b',  'y', 'g', 'v', 'g'],
//     ['',  '', 'y', 'b',  'r', 'r', 'r', 'b'],
//     ['', 'g', 'v', 'g',  'b', 'b', 'y', 'v'],
//     ['r', 'g', 'v', 'b', 'r', 'y', 'y', 'g'],
//     ['v', 'g', 'g', 'g', 'v', 'b', 'v', 'r'],
//     ['r', 'g', 'g', 'v', 'r', 'b', 'g', 'y'],
// ]

const userField = [
    ['w', 'w', 'v', 'r', 'r', 'g', 'w', 'w'],
    ['w', 'v', 'g', 'b', 'r', 'r', 'v', 'w'],
    ['b', 'g', 'r', 'y', 'b', 'b', 'r', 'g'],
    ['v', 'g', 'y', 'v', 'y', 'b', 'b', 'g'],
    ['w', 'g', 'w', 'v', 'y', 'y', 'b', 'b'],
    ['y', 'g', 'g', 'b', 'r', 'r', 'y', 'v'],
    ['y', 'g', 'y', 'y', 'v', 'y', 'v', 'g'],
    ['b', 'g', 'r', 'r', 'b', 'b', 'v', 'r'],
    ['r', 'g', 'g', 'g', 'v', 'y', 'g', 'y'],
]

// const userField = [
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
// ]

// const userField = [
//     ['', '', '', '', '', '', '', ''],
//     ['y', '', '', '', '', '', '', ''],
//     ['v', '', '', '', 'v', 'r', '', ''],
//     ['b', 'g', '', '', 'v', 'r', '', ''],
//     ['g', 'y', '', '', 'g', 'v', 'g', 'g'],
//     ['v', 'y', 'r', '', 'g', 'v', 'g', 'r'],
//     ['v', 'r', 'g', 'v', 'v', 'z', 'v', 'v'],
//     ['g', 'r', 'y', 'g', 'r', 'g', 'g', 'v'],
//     ['r', 'y', 'b', 'g', 'v', 'v', 'b', 'g'],
// ]

const types = ["violet", "green", "red", "blue", "yellow"];
const busters = [
  "hor",
  "ver",
  "around",
  // "cross",
];
const around = ["left", "right", "up", "down"];
let mas = 1;
let booMas = 0;
let offsetX = 0;
let offsetY = 0;

const stars = [];
let baseFoneAlpha = 0;


////////////

let clientWidth = window.innerWidth;
let clientHeight = window.innerHeight;
canvas.width = clientWidth/1.2;
canvas.height = clientHeight/1.2;
let width = canvas.width;
let height = canvas.height;
const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
  clientWidth = window.innerWidth;
  clientHeight = window.innerHeight;
  canvas.width = clientWidth/1.2;
  canvas.height = clientHeight/1.2;
  width = canvas.width;
  height = canvas.height;
});

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.item = null;
    this.width = 40;
    this.height = 40;
    this.newAnim = null;
    this.cX = this.x + this.width / 2;
    this.cY = this.y + this.height / 2;
    this.lines = [];
  }
  drawOrder(gameField) {
    //this.width = gameField.width / 7;
    //this.height = gameField.height / 8;

    if (this.item) {
      this.item.drawOrder();
    }
  }
  draw() {
    if (this.hole) {
      const { gab, alpha, conor, alphaKoof } = this.hole;
      this.hole.alpha -= alphaKoof;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(
        this.x * (mas + booMas) + offsetX + (this.width * (mas + booMas)) / 2,
        this.y * (mas + booMas) + offsetY + (this.height * (mas + booMas)) / 2
      );
      ctx.rotate(conor);
      ctx.drawImage(
        hole,
        200,
        0,
        1000,
        799,
        -(this.width * (mas + booMas + gab)) / 2,
        -(this.height * (mas + booMas + gab)) / 2,
        // this.x * (mas + booMas) + offsetX,
        // this.y * (mas + booMas) + offsetY,
        this.width * (mas + booMas + gab),
        this.height * (mas + booMas + gab)
      );
      ctx.globalAlpha = 1;
      ctx.restore();
      if (this.hole.alpha <= 0) {
        this.hole = null;
      }
    }

    // ctx.drawImage(
    //   star,
    //   0,
    //   0,
    //   80,
    //   120,
    //   0,
    //   0
    //   //this.x * (mas + booMas) + offsetX,
    //   //this.y * (mas + booMas) + offsetY
    // );

    // ctx.strokeStyle = "black";
    // ctx.strokeRect(
    //   this.x * (mas + booMas) + offsetX,
    //   this.y * (mas + booMas) + offsetY,
    //   this.width * (mas + booMas),
    //   this.height * (mas + booMas)
    // );

if(!this.block) {
  ctx.globalAlpha = 0.15;
  ctx.fillStyle = "white";
  ctx.fillRect(
    this.x * (mas + booMas) + offsetX,
    this.y * (mas + booMas) + offsetY,
    this.width * (mas + booMas),
    this.height * (mas + booMas)
  );
  ctx.globalAlpha = 1
}


    // if(this.block) {
    //   ctx.fillStyle = 'black'
    //   ctx.fillRect(
    //         this.x * (mas + booMas) + offsetX,
    //   this.y * (mas + booMas) + offsetY,
    //   this.width * (mas + booMas),
    //   this.height * (mas + booMas)
    //   );
    // }
    ctx.globalAlpha = 0.4;
    this.lines.forEach((line) => {
     ctx.drawImage(
        line.image,
        line.animX,
        line.animY,
        line.aWidth,
        line.aHeight,

       (this.x + line.dopX) * (mas + booMas) + offsetX,
       (this.y + line.dopY) * (mas + booMas) + offsetY,
       line.gabX * mas,
       line.gabY * mas
     
      );
    });
    ctx.globalAlpha = 1

    if (this.item) {
      this.item.draw();
    }
    if (
      this.newAnim
      // !this.i && !this.k
    ) {
      // this.newAnim = {
      //   animX: 0,
      //   animY: 0,
      //   step : 9
      // }
      const step = this.newAnim.steps[this.newAnim.steps.length - 1];

      let xStep = 52;
      if (step === 1) {
        this.newAnim.animX = 0;
      } else if (step === 2) {
        this.newAnim.animX = 65;
      } else if (step === 3) {
        this.newAnim.animX = 120;
      } else if (step === 4) {
        this.newAnim.animX = 183;
      } else if (step === 5) {
        this.newAnim.animX = 240;
      } else if (step === 6) {
        this.newAnim.animX = 300;
      } else if (step === 7) {
        this.newAnim.animX = 358;
      } else if (step === 8) {
        this.newAnim.animX = 422;
      }

      //const yStep = 536 / 7;
      const gabX = 40;
      const gabY = 250;

      // ctx.globalAlpha = 0.3;
      const animX = this.newAnim.animX;
      setTimeout(() => {
        ctx.drawImage(
          elektro,
          animX,
          0,
          xStep,
          237,
          (this.x + this.width / 2 - gabX / 2) * (mas + booMas) + offsetX,
          (this.y - this.width / 2 + this.height / 2 - gabY / 2) *
            (mas + booMas) +
            offsetY,
          gabX * (mas + booMas),
          gabY * (mas + booMas)
        );
      }, 0);

      this.newAnim.steps.pop();

      if (!this.newAnim.steps.length) {
        this.newAnim = null;
      }

      //  ctx.globalAlpha = 1

      // this.newAnim.animX += xStep;
      // if(this.newAnim.animX >= 474) {this.newAnim = null;}

      // if (this.newAnim.animX >= 467 && this.newAnim.animY >= 536) {
      //   this.newAnim = null;
      // } else if (this.newAnim.animX >= 467) {
      //   this.newAnim.animX = 0;
      //   this.newAnim.animY += yStep;
      // }
    }
  }
}
//////////////


class Item {
  constructor(cell, types, type) {
    this.cell = cell;
    this.x = this.cell.x;
    this.y = this.cell.y;
    this.width = this.cell.width;
    this.height = this.cell.height;
    this.type = type ? type : types[Math.floor(Math.random() * types.length)];
    this.deltaX = 0;
    this.deltaY = 0;
    this.moveAccum = 0;
    this.booAnimX = 0;
    this.booAnimY = 0;
    this.animX = 0;
    this.animY = 0;
    this.aX = 0;
    this.aY = 0;
    this.speed = 0;
    this.awayX = this.x;
    this.awayY = this.y;
    this.speed = 0;
    this.outY = 0;
    this.outSpeed = 0;
    this.pieseKoof = 0;
    this.outGab = 0;
    this.outTik = 0;
    this.aWidth = Math.floor(Math.random() * 10) + 40;
    this.aWidthStep = Math.floor(Math.random() * 2) ? 0.2 : -0.2;
  }

  booDraw() {
    this.away = true;
    let koof = 4;
    let bugKoofX = -6;
    let bugKoofY = -6;
    ctx.globalAlpha = 0.9;
    if (this.special) {
      koof = 10;
      bugKoofX = -30;
      bugKoofY = -25;
      ctx.globalAlpha = 1;
    }
    ctx.drawImage(
      images[this.type],
      this.booAnimX,
      this.booAnimY,
      this.animStepX,
      this.animStepY,
      (this.cell.x + bugKoofX + this.width / 2 - (this.width * koof) / 2) *
        (mas + booMas) +
        offsetX,
      (this.cell.y + bugKoofY + this.height / 2 - (this.height * koof) / 2) *
        (mas + booMas) +
        offsetY,
      this.width * koof * (mas + booMas),
      this.height * koof * (mas + booMas)
    );
    ctx.globalAlpha = 1;
    this.booDrawOrder();
  }

  booDrawOrder() {
    if (!this.special) {
      this.animWidth = 800;
      this.animHeight = 800;
      this.animStepX = this.animWidth / 4;
      this.animStepY = this.animHeight / 4;
    } else if (this.type === "around") {
      this.animWidth = 960;
      this.animHeight = 480;
      this.animStepX = this.animWidth / 10;
      this.animStepY = this.animHeight / 5;
    }
    this.booAnimX += this.animStepX;
    if (
      this.booAnimX >= this.animWidth - this.animStepX &&
      this.booAnimY >= this.animHeight
    ) {
      this.booOut = true;
      this.finishOut = true;
    } else if (this.booAnimX >= this.animWidth) {
      this.booAnimX = 0;
      this.booAnimY += this.animStepY;
    }
  }
  draw() {
    if (this.type === "blue") {
      this.image = itemsArt;
      this.imageGabX = 110;
      this.imageGabY = 100;
      this.imageX = 30;
      this.imageY = 55;
    } else if (this.type === "yellow") {
      this.image = itemsArt;
      this.imageGabX = 110;
      this.imageGabY = 100;
      this.imageX = 660;
      this.imageY = 50;
    } else if (this.type === "red") {
      this.image = itemsArt;
      this.imageGabX = 110;
      this.imageGabY = 100;
      this.imageX = 157;
      this.imageY = 50;
    } else if (this.type === "green") {
      this.image = itemsArt;
      this.imageGabX = 110;
      this.imageGabY = 100;
      this.imageX = 410;
      this.imageY = 50;
    } else if (this.type === "violet") {
      this.image = itemsArt;
      this.imageGabX = 110;
      this.imageGabY = 100;
      this.imageX = 535;
      this.imageY = 50;
    } else if (this.type === "around") {
    }
    if (this.newAnim && this.y + this.height * 2 > gameField.y) {
      baseFoneAlpha = 0.3;
      this.newAnim = false;
      const steps = [1, 2, 3, 4, 5, 6, 7, 8];
      gameField.cells[0][this.cell.k].newAnim = {
        animX: 0,
        animY: 0,
        steps: [],
      };
      while (steps.length) {
        gameField.cells[0][this.cell.k].newAnim.steps.push(
          ...steps.splice([Math.floor(Math.random() * steps.length)], 1)
        );
      }
    }
    if (this.y + gameField.gabsrit / 2 > gameField.y) {
      if (this.image) {
        ctx.drawImage(
          this.image,
          this.imageX,
          this.imageY,
          this.imageGabX,
          this.imageGabY,
          this.x * (mas + booMas) + offsetX,
          this.y * (mas + booMas) + offsetY,
          this.width * (mas + booMas),
          this.height * (mas + booMas)
        );
      } else if (this.type === "around") {
        ctx.drawImage(
          aroundAnimItem,
          this.aX,
          this.aY,
          199,
          200,
          (this.x + 5) * (mas + booMas) + offsetX,
          (this.y - 4) * (mas + booMas) + offsetY,
          this.width * (mas + booMas),
          this.height * (mas + booMas)
        );
        this.aX += 200;
        this.aX === 1000 ? (this.aX = 0) : false;
      } else if (this.type === "hor" || this.type === "ver") {
        ctx.save();
        ctx.translate(
          (this.x + this.width / 2) * (mas + booMas) + offsetX,
          (this.y + this.height / 2) * (mas + booMas) + offsetY
        );
        this.type === "hor" && ctx.rotate(-(90 * Math.PI) / 180);
        ctx.drawImage(
          rocketI,
          this.aX,
          0,
          100,
          200,
          -(this.width / 2) * (mas + booMas),
          -(this.height / 2) * (mas + booMas),
          this.width * (mas + booMas),
          this.height * (mas + booMas)
        );
        ctx.rotate((180 * Math.PI) / 180);
        ctx.drawImage(
          rocketI,
          this.aX,
          0,
          100,
          200,
          -(this.width / 1.9) * (mas + booMas),
          -(this.height / 2) * (mas + booMas),
          this.width * (mas + booMas),
          this.height * (mas + booMas)
        );

        ctx.restore();
        gameField.ticker % 2 === 0 ? (this.aX += 100) : false;
        this.aX === 1600 ? (this.aX = 0) : false;
      } else if (this.type === "cross") {
        this.aWidth += this.aWidthStep;
        this.aWidth <= 40 || this.aWidth >= 50
          ? (this.aWidthStep = -this.aWidthStep)
          : false;

        ctx.drawImage(
          violetCross,
          0,
          0,
          568,
          568,
          (this.x - (this.aWidth - this.width) / 2) * (mas + booMas) + offsetX,
          this.y * (mas + booMas) + offsetY,
          this.aWidth * mas,
          40 * mas
        );
      }
      this.cell.focus = false;
      if (
        !this.special &&
        (!this.star || this.star.out) &&
        !Math.floor(Math.random() * 200)
      ) {
        this.star = {
          offsetX: Math.floor(Math.random() * 3) + 1.1,
          offsetY: Math.floor(Math.random() * 3) + 1.1,
          gab: 50,
          item: this,
          conor: 0,
          conorKoof: Math.floor(Math.random() * 2) ? 0.1 : -0.1,
        };
        stars.push(this.star);
      }
    }
  }
}

let ok = false;

class GameField {
  constructor() {
    this.lines = 9;
    this.columns = 8;
    this.koof = this.lines / this.columns;
    this.cells = [];
    this.click = null;
    this.cellsOnMove = [];
    this.width = 320;
    this.height = 360;
    this.x = 0;
    this.y = 0;
    this.moveKoof = 15;
    this.gabsrit = 40;
    this.speed = this.gabsrit / this.moveKoof;
    this.onDestroy = [];
    this.cellsArrey = [];
    this.onBooDraw = [];
    this.drawAreaA = [];
    this.drawAreaB = [];
    this.drawAreaC = [];
    this.itemsOnMove = [];
    this.crash = 0;
    this.update = true;
    this.checkStatus = "";
    this.booMas = [];
    this.ticker = 0;
    this.rockets = [];
    this.rocketsOnDraw = [];
    this.beams = [];
    this.beamsOnDraw = [];
    this.userMove = false;
    this.columnCellsOnMove = [];
    this.threeInLine = [];
    this.userStop = 0;
  }

  controller() {
    // old ok
    if (!this.case && !this.rockets.length && !this.beams.length) {
      if (
        this.checkStatus === "getThreeInLine" &&
        //this.threeInLine.length &&
        !this.itemsOnMove.length
      ) {
        // console.log("qqqqqqqqqqqqqqqqqqqqqqqqq");

        this.getGroops();
        this.getThreeInLine();
        //this.userStop = !this.threeInLine.length ? true : false;
        this.threeInLine.forEach((obj) => {
          const arg = !this.userMove ? obj.cells[0] : this.targetCell;
          obj.cells.forEach((cell) => {
           if(cell.item && !cell.item.destroy){
            this.addAndingItem(cell, arg);
          }
          });
        });
        this.userMove = false;
        this.checkStatus = "columnsComplite";
      }
      if (
        this.checkStatus === "columnsComplite" &&
        !this.onDestroy.length &&
        !this.drawAreaA.length
      ) {
        this.columnsUpdate();
        this.checkStatus = "getThreeInLine";
      }
      if (
        !this.threeInLine.length &&
        !this.itemsOnMove.length &&
        !this.onDestroy.length &&
        !this.drawAreaA.length &&
        this.checkStatus
      ) {
        this.checkStatus = "checkLR";
        //this.leftRightUpdate();
        // this.columnCellsOnMove.length ? this.checkStatus = "checkLR" : this.checkStatus = ''
      }
    }
  }

  // controller() { // old ok
  //   if (!this.case && !this.rockets.length) {
  //     if (
  //       this.checkStatus === "getThreeInLine" &&
  //       this.threeInLine.length &&
  //       !this.itemsOnMove.length
  //     ) {
  //       this.getGroops();
  //       this.getThreeInLine();
  //       this.threeInLine.forEach((obj) => {
  //         const arg = !this.userMove ? obj.cells[0] : this.targetCell;
  //         obj.cells.forEach((cell) => {
  //           this.addAndingItem(cell, arg);
  //         });
  //       });
  //       this.userMove = false;
  //       this.checkStatus = "columnsComplite";
  //     }  if (
  //       this.checkStatus === "columnsComplite" &&
  //       !this.onDestroy.length &&
  //       !this.drawAreaA.length
  //     ) {
  //       this.columnsUpdate();
  //       this.checkStatus = "getThreeInLine";
  //     }  if (
  //       !this.threeInLine.length &&
  //       !this.itemsOnMove.length &&
  //       !this.onDestroy.length &&
  //       !this.drawAreaA.length &&
  //       this.checkStatus
  //     ) {
  //       console.log('here update')
  //       this.checkStatus = "";
  //     }
  //   }
  // }

  itemsMove() {
    // let go = false;
    // this.cellsArrey.forEach((cell) => {
    //   if (cell.item && cell.item.y < cell.y) {
    //     go = true;
    //   }
    // });
    //   if (go) {
    for (let i = 0; i < this.itemsOnMove.length; i++) {
      const item = this.itemsOnMove[i];
      if (item.x === item.cell.x) {
        const cell = item.cell;
        item.awatMove--;
        if (item.awatMove <= 0) {
          item.y += this.gabsrit / 3;
          if (item.y >= cell.y) {
            item.y = cell.y;
            this.itemsOnMove.splice(i, 1);
            item.cell.column.itemsOnMove.splice(
              item.cell.column.itemsOnMove.indexOf(item),
              1
            );
            i--;
          }
        }
      }
    }
    //  }
    //  else {
    //   this.itemsOnMove = []
    // }
  }

  getValidTypes(cell, fare) {
    const validTypes = JSON.parse(JSON.stringify(types));
    if (fare) {
      around.forEach((vector) => {
        if (cell[vector] && cell[vector].item && !cell[vector].item.special) {
          validTypes.splice(validTypes.indexOf(cell[vector].item.type), 1);
        }
      });
    }
    return validTypes;
  }

  columnsUpdate(column) {
    // this.getGroops();
    //this.getThreeInLine();
    this.crash++;
    // console.log("columns update : ", this.crash);
    const fare = Math.floor(Math.random() * 4);
    //  if(!fare) {
    //   console.log('fare-ramdom')
    // }
    if (!column) {
      this.columnsArr.forEach((column) => {
        const items = [];
        column.cells.forEach((cell) => {
          if (cell.item) {
            items.push(cell.item);
            cell.item = null;
          }
        });
        let newItemNum = 1;
        let itemNum = 0;
        for (let i = column.cells.length - 1; i >= 0; i--) {
          const cell = column.cells[i];
          const item = items[items.length - 1];
          if (item) {
            item.cell = cell;
            cell.item = item;
            item.awatMove = itemNum * 2;
            itemNum++;
            if (item.y !== item.cell.y) {
              this.itemsOnMove.push(item);
            }
            items.pop();
          } else if (column.bornCell) {
            const newItem = new Item(cell, this.getValidTypes(cell, fare));
            newItem.newAnim = true;
            const ran = Math.floor(Math.random() * 30);
            if (!ran) {
              newItem.special = true;
              newItem.type =
                busters[Math.floor(Math.random() * busters.length)];
            }
            cell.item = newItem;
            newItem.y = -this.gabsrit * newItemNum;
            newItem.awatMove = (newItemNum + itemNum) * 2;
            this.itemsOnMove.push(newItem);
            newItemNum++;
            //cell.item = null;
          }
        }
        //console.log(items[items.length - 1].type)
      });
    } else {
      const items = [];
      column.cells.forEach((cell) => {
        if (cell.item) {
          items.push(cell.item);
          cell.item = null;
        }
      });
      let newItemNum = 1;
      let itemNum = 0;
      for (let i = column.cells.length - 1; i >= 0; i--) {
        const cell = column.cells[i];
        const item = items[items.length - 1];
        if (item) {
          item.cell = cell;
          cell.item = item;
          item.awatMove = 0; //itemNum * 2;
          itemNum++;
          if (item.y !== item.cell.y) {
            this.itemsOnMove.push(item);
          }
          items.pop();
        } else if (column.bornCell) {
          const newItem = new Item(cell, this.getValidTypes(cell, fare));
          newItem.newAnim = true;
          const ran = Math.floor(Math.random() * 30);
          if (!ran) {
            newItem.special = true;
            newItem.type = busters[Math.floor(Math.random() * busters.length)];
          }
          cell.item = newItem;
          newItem.y = -this.gabsrit * newItemNum;
          newItem.awatMove = 0; //(newItemNum + itemNum) * 2;
          this.itemsOnMove.push(newItem);
          newItemNum++;
          //cell.item = null;
        }
      }
    }
    // console.log(this.itemsOnMove);
  }
  drawBoo() {
    this.drawAreaA.forEach((item) => item.booDraw());
    this.drawAreaC.forEach((item) => item.booDraw());
  }
  booOrder() {
    if (this.onBooDraw.length) {
      this.drawAreaA = [];
      this.drawAreaB = [];
      this.drawAreaC = [];

      for (let i = 0; i < this.onBooDraw.length; i++) {
        const item = this.onBooDraw[i].item;
        // item.booDrawOrder();
        if (item.booOut && item.finishOut) {
          this.onBooDraw.splice(i, 1);
          i--;
        } else if (!item.special) {
          !item.booOut && this.drawAreaA.push(item);
          !item.finishOut && this.drawAreaB.push(item);
        } else {
          this.drawAreaC.push(item);
        }
      }
    }
    // if (
    //   !this.drawAreaA.length &&
    //   this.case &&
    //   this.case.type === "destroy" &&
    //   this.case.check
    // ) {
    //  // console.log('here')
    //   this.columnsUpdate();
    //  // this.case = { type: "updateField", out: true };
    // }
  }
  destroyOrder() {
    if (this.onDestroy.length) {
      for (let i = 0; i < this.onDestroy.length; i++) {
        const desItem = this.onDestroy[i];
        if (!desItem.awaitDestroy) {
          if (
            scorePoints &&
            !desItem.item.special &&
            scorePoints[desItem.item.type]
          ) {
            //console.log('here')
            scorePoints[desItem.item.type].items.push(desItem.item);
          } else if (!desItem.item.special) {
            scorePoints.onDestroy.unshift(desItem.item);
          }

          desItem.item.type !== "hor" &&
          desItem.item.type !== "ver" &&
          desItem.item.type !== "cross"
            ? (desItem.item.cell.hole = {
                alpha: 1,
                conor: Math.random() * 2,
                gab:
                  desItem.item.type === "around"
                    ? Math.random() + 5
                    : Math.random(),
                alphaKoof: desItem.item.type === "around" ? 0.01 : 0.02,
              })
            : false;
          //desItem.item.readyToGo = true;
          if (desItem.item.special) {
            if (desItem.item.type === "around") {
              this.booMas = [];
              for (let j = 1; j < 20; j++) {
                j % 2 === 0
                  ? this.booMas.unshift(0.3 / j)
                  : this.booMas.unshift(-0.3 / j);
              }
              const aroundCells = this.cellsArrey.filter(
                (cell) => getDistanse(desItem.item, cell).dis <= 113
              );
              aroundCells.forEach((cell) => {
                if (cell.item && !cell.item.destroy) {
                  // const { dis } = getDistanse(desItem.item, cell);
                  // const awaitDestroy = Math.ceil(dis / 10);
                  cell.item.destroy = true;
                  //const endindItem = { item: cell.item, awaitDestroy };
                  this.addAndingItem(cell, desItem.item.cell);
                }
              });
            } else if (desItem.item.type === "cross") {
              // const left = {
              //   x: desItem.item.x,
              //   y: desItem.item.y,
              //   width: desItem.item.width,
              //   height: desItem.item.height,
              //   aX: 0,
              //   aY: 0,
              //   type: "left",
              //   i: desItem.item.cell.i,
              //   k: desItem.item.cell.k,
              //   speed: 0,
              // };
              // const right = {
              //   x: desItem.item.x,
              //   y: desItem.item.y,
              //   width: desItem.item.width,
              //   height: desItem.item.height,
              //   aX: 0,
              //   aY: 0,
              //   type: "right",
              //   i: desItem.item.cell.i,
              //   k: desItem.item.cell.k,
              //   speed: 0,
              // };
              // const up = {
              //   x: desItem.item.x,
              //   y: desItem.item.y,
              //   width: desItem.item.width,
              //   height: desItem.item.height,
              //   aX: 0,
              //   aY: 0,
              //   type: "up",
              //   i: desItem.item.cell.i,
              //   k: desItem.item.cell.k,
              //   speed: 0,
              // };
              // const down = {
              //   x: desItem.item.x,
              //   y: desItem.item.y,
              //   width: desItem.item.width,
              //   height: desItem.item.height,
              //   aX: 0,
              //   aY: 0,
              //   type: "down",
              //   i: desItem.item.cell.i,
              //   k: desItem.item.cell.k,
              //   speed: 0,
              // };
              const beamData = {
                x: desItem.item.x,
                y: desItem.item.y,
                width: 1,
                height: 1,
                cell: desItem.item.cell,
              };
              this.beams.push(beamData);
              this.beamsOnDraw.push(beamData);
            } else if (desItem.item.type === "hor") {
              const left = {
                x: desItem.item.x,
                y: desItem.item.y,
                width: desItem.item.width,
                height: desItem.item.height,
                aX: 0,
                aY: 0,
                type: "left",
                i: desItem.item.cell.i,
                k: desItem.item.cell.k,
                speed: 0,
              };
              const right = {
                x: desItem.item.x,
                y: desItem.item.y,
                width: desItem.item.width,
                height: desItem.item.height,
                aX: 0,
                aY: 0,
                type: "right",
                i: desItem.item.cell.i,
                k: desItem.item.cell.k,
                speed: 0,
              };
              this.rockets.push(left, right);
              this.rocketsOnDraw.push(left, right);
            } else if (desItem.item.type === "ver") {
              const up = {
                x: desItem.item.x,
                y: desItem.item.y,
                width: desItem.item.width,
                height: desItem.item.height,
                aX: 0,
                aY: 0,
                type: "up",
                i: desItem.item.cell.i,
                k: desItem.item.cell.k,
                speed: 0,
              };
              const down = {
                x: desItem.item.x,
                y: desItem.item.y,
                width: desItem.item.width,
                height: desItem.item.height,
                aX: 0,
                aY: 0,
                type: "down",
                i: desItem.item.cell.i,
                k: desItem.item.cell.k,
                speed: 0,
              };
              this.rockets.push(up, down);
              this.rocketsOnDraw.push(up, down);
            }
          }
          desItem.item.cell.item = null;
          desItem.item.type !== "hor" &&
          desItem.item.type !== "ver" &&
          desItem.item.type !== "cross"
            ? this.onBooDraw.push(...this.onDestroy.splice(i, 1))
            : this.onDestroy.splice(i, 1);
          i--;
        }
        desItem.awaitDestroy -= 1;
      }
    }
    // console.log(this.onBooDraw)
  }
  cellsItemsMove() {
    // console.log(this.cellsOnMove.length)
    for (let i = 0; i < this.cellsOnMove.length; i++) {
      const item = this.cellsOnMove[i];
      if (!item.moveSteps) {
        item.moveSteps = this.moveKoof;
        item.gSp = item.cell.x - item.x;
        item.vSp = item.cell.y - item.y;
      }
      item.moveSteps--;
      item.x += item.gSp / (this.gabsrit / this.speed);
      item.y += item.vSp / (this.gabsrit / this.speed);
      if (!item.moveSteps) {
        item.x = item.cell.x;
        item.y = item.cell.y;
        this.cellsOnMove.splice(i, 1);
        i--;
      }
    }
    if (!this.cellsOnMove.length && this.case) {
      this.getGroops();
      this.getThreeInLine();
      if (!this.threeInLine.length) {
        const focusCellItemType = this.case.focusCell.item.type;
        const targetCellItemType = this.case.targetCell.item.type;
        this.case.focusCell.item.type = targetCellItemType;
        this.case.targetCell.item.type = focusCellItemType;
        this.focusCell = null;
      }
      this.case = null;
      this.checkStatus = "getThreeInLine";
    }
  }
  addAndingItem(cell, target) {
    // console.log('target : ', target)
    const { dis } = target ? getDistanse(cell, target) : { dis: 0 };
    const awaitDestroy = Math.ceil(dis / 10);
    cell.item.destroy = true;
    const endindItem = { item: cell.item, awaitDestroy };
    cell.item.stopStar = true;

    this.onDestroy.push(endindItem);
  }
  caseOrder() {
    if (this.case) {
      if (this.case.type === "user-move" && !this.case.check) {
        const focusCellItem = this.case.focusCell.item;
        const targetCellItem = this.case.targetCell.item;
        this.case.targetCell.item = focusCellItem;
        this.case.focusCell.item = targetCellItem;
        focusCellItem.cell = this.case.targetCell;
        targetCellItem.cell = this.case.focusCell;
        this.cellsOnMove.push(
          this.case.targetCell.item,
          this.case.focusCell.item
        );
        this.targetCell = this.case.targetCell;
        this.case.check = true;
        this.userMove = true;
      }
    }
  }
  clickOrder() {
    const deltaX = this.click.lastX - this.click.x;
    const deltaY = this.click.lastY - this.click.y;
    const c = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (Math.abs(c) >= this.cells[0][0].width / 5) {
      const rose = Math.abs(deltaX) > Math.abs(deltaY) ? "hor" : "ver";
      if (rose === "hor") {
        this.vector = deltaX > 0 ? "right" : "left";
      } else if (rose === "ver") {
        this.vector = deltaY > 0 ? "down" : "up";
      }
      const focusCell = this.focusCell;
      const targetCell = this.focusCell[this.vector];
      focusCell &&
      targetCell &&
      focusCell.item &&
      !focusCell.item.special &&
      targetCell.item &&
      !targetCell.item.special
        ? (this.case = {
            type: "user-move",
            focusCell,
            targetCell,
          })
        : false;
      this.userStop = true;
    }
    this.click = null;
  }
  getThreeInLine() {
    this.threeInLine = [];
    this.cells.forEach((line) =>
      line.forEach((cell) => {
        if (cell.item && !cell.item.special) {
          if (
            (cell.left &&
              cell.left.item &&
              !cell.left.item.special &&
              cell.left.groop === cell.groop &&
              cell.right &&
              cell.right.item &&
              !cell.right.item.special &&
              cell.right.groop === cell.groop &&
              this.threeInLine.indexOf(cell.groop) === -1) ||
            (cell.up &&
              cell.up.item &&
              !cell.up.item.special &&
              cell.up.groop === cell.groop &&
              cell.down &&
              cell.down.item &&
              !cell.down.item.special &&
              cell.down.groop === cell.groop &&
              this.threeInLine.indexOf(cell.groop) === -1)
          ) {
            this.threeInLine.push(cell.groop);
          }
        }
      })
    );
    // console.log(this.threeInLine); /// !!!!!!!!!!!!!!!
  }

  rec(cell) {
    for (let i = 0; i < around.length; i++) {
      if (
        cell[around[i]] &&
        cell[around[i]].item &&
        (cell[around[i]].item.type === cell.item.type ||
          cell[around[i]].item.special) &&
        cell.groop.cells.indexOf(cell[around[i]]) === -1
      ) {
        cell[around[i]].groop = cell.groop;
        cell.groop.cells.push(cell[around[i]]);
        !cell[around[i]].item.special && this.rec(cell[around[i]]);
      }
    }
  }

  getGroops() {
    this.groops = [];
    this.cells.forEach((line) =>
      line.forEach((cell) => {
        cell.groop = null;
      })
    );
    this.cells.forEach((lines) =>
      lines.forEach((cell) => {
        if (!cell.groop && cell.item && !cell.item.special) {
          const groop = { cells: [cell] };
          cell.groop = groop;
          this.groops.push(groop);
        }
        cell.item && !cell.item.special && this.rec(cell);
      })
    );
    // console.log(this.groops)
  }

  getColumns() {
    this.columnsArr = [];
    for (let i = 0; i < this.columns; i++) {
      this.columnsArr.push({ cells: [], itemsOnMove: [] });
      for (let k = 0; k < this.lines; k++) {
        if (this.cells[k][i].block) {
          if (this.cells[k][i].down && !this.cells[k][i].down.block) {
            this.columnsArr.push({ cells: [], itemsOnMove: [] });
          }
        } else {
          const cell = this.cells[k][i];
          cell.column = this.columnsArr[this.columnsArr.length - 1];
          cell.canBorn
            ? (this.columnsArr[this.columnsArr.length - 1].bornCell = cell)
            : false;
          this.columnsArr[this.columnsArr.length - 1].cells.push(cell);
        }
      }
    }
    this.columnsArr = this.columnsArr.filter((column) => column.cells.length);
    // console.log(this.columnsArr);
  }

  // getColumns() { // ok!!!!
  //   this.columnsArr = [];
  //   for (let i = 0; i < this.columns; i++) {
  //     this.columnsArr.push({ cells: [] });
  //     for (let k = 0; k < this.lines; k++) {
  //       if (this.cells[k][i].block) {
  //         break;
  //       }
  //       const cell = this.cells[k][i];
  //       cell.canBorn ? (this.columnsArr[i].bornCell = cell) : false;
  //       this.columnsArr[i].cells.push(cell);
  //     }
  //   }
  //   // console.log(this.columnsArr)
  // }

  fieldCollision(cursor) {
    const x = this.x * (mas + booMas) + offsetX;
    const y = this.y * (mas + booMas) + offsetY;
    if (
      !(
        cursor.x < x ||
        cursor.x > x + this.width * (mas + booMas) ||
        cursor.y < y ||
        cursor.y > y + this.height * (mas + booMas)
      )
    ) {
      const cellData = this.cells[0][0];
      const i = Math.floor((cursor.y - y) / (cellData.height * (mas + booMas)));
      const k = Math.floor((cursor.x - x) / (cellData.width * (mas + booMas)));
      this.cells[i][k].focus = true;
      this.focusCell = this.cells[i][k];
    }
  }
  draw() {
    // ctx.strokeStyle = "green";
    // ctx.strokeRect(
    //   this.x * (mas + booMas) + offsetX,
    //   this.y * (mas + booMas) + offsetY,
    //   this.width * (mas + booMas),
    //   this.height * (mas + booMas)
    // );
    ctx.drawImage(
      fon2,
      50,
      20,
      310,
      730,
      (this.x - 10) * (mas + booMas) + offsetX,
      (this.y - 10) * (mas + booMas) + offsetY,
      (this.width + 20) * (mas + booMas),
      (this.height + 20) * (mas + booMas)
    );
    this.cells.forEach((line) => {
      line.forEach((cell) => cell.draw());
    });
  }

  fieldInit() {
    this.cells = [];
    for (let i = 0; i < this.lines; i++) {
      this.cells.push([]);
      for (let k = 0; k < this.columns; k++) {
        const cell = new Cell(
          this.x + k * (this.width / this.columns),
          this.y + i * (this.height / this.lines)
        );
        cell.i = i;
        cell.k = k;
        // if (
        //   //  (i === 0 &&
        //   //   k === 3
        //   //  )
        //   //  ||
        //   (i === 0 && k === 0) ||
        //   (i === 0 && k === 1) ||
        //   (i === 0 && k === 2) ||
        //   (i === 0 && k === 3) ||
        //   (i === 0 && k === 5) ||
        //   (i === 1 && k === 0) ||
        //   (i === 0 && k === 7) ||
        //   (i === 0 && k === 6) ||
        //   (i === 1 && k === 7)
        // ) {
        //   cell.block = true;
        // }
        !i && !cell.block ? (cell.canBorn = true) : false;
        this.cells[i].push(cell);
        this.cellsArrey.push(cell);
      }
    }

    // this.cells.forEach((line, i) =>
    //   line.forEach((cell, k) => {
    //     if (userField[i][k] === "w") {
    //       cell.block = true;
    //     } else {
    //       let type = colorsData[userField[i][k]];
    //       if (type) {
    //       //  console.log(type);
    //         if (type && type !== "z") {
    //           const item = new Item(cell, types, type);
    //           cell.item = item;
    //         } else if (type === "z") {
    //           const buster = new Item(cell, busters);
    //           buster.special = true;
    //           cell.item = buster;
    //           // console.log(buster)
    //         }
    //       }
    //     }
    //     if (this.cells[i][k - 1]) {
    //       cell.left = this.cells[i][k - 1];
    //     }
    //     if (this.cells[i][k + 1]) {
    //       cell.right = this.cells[i][k + 1];
    //     }
    //     if (this.cells[i - 1] && this.cells[i - 1][k]) {
    //       cell.up = this.cells[i - 1][k];
    //     }
    //     if (this.cells[i + 1] && this.cells[i + 1][k]) {
    //       cell.down = this.cells[i + 1][k];
    //     }

    //   })

    // );
    // this.cellsArrey.forEach(cell => {
    //   !cell.block &&  around.forEach(vector => {
    //     if(!cell[vector] || cell[vector].block) {
    //       cell.lines.push(fieldContur[vector])
    //     }
    //   })
    // })
    ////////////////////////////////////////////////////////////////////////
    for (let i = 0; i < 1; i++) {
      const bI = Math.floor(Math.random() * this.lines);
      const bK = Math.floor(Math.random() * this.columns);
      const bCell = this.cells[bI][bK];
      if (!bCell.block) {
        const buster = new Item(bCell, busters);
        buster.special = true;
        bCell.item = buster;
      }
    }
    // console.log(buster.type);
    this.cells.forEach((line, i) => {
      line.forEach((cell, k) => {
        if (this.cells[i][k - 1]) {
          cell.left = this.cells[i][k - 1];
        }
        if (this.cells[i][k + 1]) {
          cell.right = this.cells[i][k + 1];
        }
        if (this.cells[i - 1] && this.cells[i - 1][k]) {
          cell.up = this.cells[i - 1][k];
        }
        if (this.cells[i + 1] && this.cells[i + 1][k]) {
          cell.down = this.cells[i + 1][k];
        }
        if (!cell.block) {
          const validTypes = [...types];
          if (
            this.cells[i][k - 1] &&
            !this.cells[i][k - 1].block &&
            this.cells[i][k - 2] &&
            this.cells[i][k - 2].item &&
            this.cells[i][k - 1].item &&
            !this.cells[i][k - 2].block &&
            this.cells[i][k - 1].item.type === this.cells[i][k - 2].item.type
          ) {
            const index = validTypes.indexOf(this.cells[i][k - 2].item.type);
            index !== -1 && validTypes.splice(index, 1);
          }
          if (
            this.cells[i - 1] &&
            this.cells[i - 2] &&
            this.cells[i - 1][k] &&
            this.cells[i - 2][k] &&
            !this.cells[i - 1][k].block &&
            !this.cells[i - 2][k].block &&
            this.cells[i - 1][k].item &&
            this.cells[i - 2][k].item &&
            this.cells[i - 1][k].item.type === this.cells[i - 1][k].item.type
          ) {
            const index = validTypes.indexOf(this.cells[i - 2][k].item.type);
            index !== -1 && validTypes.splice(index, 1);
          }

          const item = new Item(cell, validTypes);

          !cell.item ? (cell.item = item) : false;
        }
        !cell.block &&
          around.forEach((vector) => {
            if (!cell[vector] || cell[vector].block) {
              ((!cell.i && vector !== "up") || cell.i) &&
                cell.lines.push(fieldContur[vector]);
            }
          });
      });
    });
    //
    console.log(this.cells);
  }
  getPotentialThree() {
    let variants = [];
    for (let i = 0; i < this.lines; i++) {
      for (let k = 0; k < this.columns; k++) {
        const cell = this.cells[i][k];
        const item = cell.item;
        item &&
          !item.special &&
          around.forEach((vector) => {
            const targetCell = cell[vector];
            const type = cell.item.type;
            const targetType =
              targetCell &&
              targetCell.item &&
              !targetCell.item.special &&
              targetCell.item.type;
            if (type && targetType) {
              cell.item.type = targetType;
              targetCell.item.type = type;
              this.getGroops();
              this.getThreeInLine();
              const variant = {
                vector,
                cell: { i: cell.i, k: cell.k },
                cellsLength: 0,
              };
              this.threeInLine.forEach((el) => {
                variant.cellsLength += el.cells.length;
              });
              if (variant.cellsLength) {
                variants.push(variant);
              }
              cell.item.type = type;
              targetCell.item.type = targetType;
            }
          });
      }
    }
    // console.log(variants);
  }
  debug() {
    this.cellsArrey.forEach((cell) => {
      const item = cell.item;
      if (item && this.checkStatus === "checkLR") {
        this.cellsArrey.forEach((controlCell) => {
          const controlItem = controlCell.item;
          if (controlItem && controlItem !== item) {
            if (
              item.y > 0 &&
              controlItem.y > 0 &&
              !(
                Math.floor(item.x + item.width) <= Math.floor(controlItem.x) ||
                Math.floor(item.x) >=
                  Math.floor(controlItem.x + controlItem.width) ||
                Math.floor(item.y) + Math.floor(item.height <= controlItem.y) ||
                Math.floor(item.y) >=
                  Math.floor(controlItem.y + controlItem.height)
              )
            ) {
              pausa = true;
             // console.log("item : ", item, "controlItem : ", controlItem);
            }
          }
        });
      }
    });
  }
}

GameField.prototype.itemsColumsMove = function () {
    for (let i = 0; i < this.columnCellsOnMove.length; i++) {
      const item = this.columnCellsOnMove[i];
      if (item.columnVector === "left") {
        item.x -= this.gabsrit / 3;
        if (item.x <= item.cell.x) {
          item.x = item.cell.x;
          // this.itemsOnMove.push(item);
          item.awatMove = 3;
          //console.log(item.oldCell)
          item.oldCell.left.hold = false;
          item.oldCell.column.needUpdate = false;
          // this.itemsMove();
          //this.columnsUpdate(item.cell.column)
          this.columnsUpdate(item.oldCell.column);
  
          this.columnCellsOnMove.splice(i, 1);
          i--;
        }
      } else if (item.columnVector === "right") {
        item.x += this.gabsrit / 3;
        if (item.x >= item.cell.x) {
          item.x = item.cell.x;
          //  this.itemsOnMove.push(item);
          item.awatMove = 3;
  
          item.oldCell.column.needUpdate = false;
          item.oldCell.right.hold = false;
          //  this.columnsUpdate(item.cell.column)
          this.columnsUpdate(item.oldCell.column);
          this.columnCellsOnMove.splice(i, 1);
          i--;
        }
      }
    }
  };
  
  GameField.prototype.leftRightUpdate = function () {
    if (this.checkStatus === "checkLR" && this.userStop) {
      this.columnsArr.forEach((column, index) => {
        let ok = true;
  
        for (let i = 0; i < column.cells.length; i++) {
          const cell = column.cells[i];
          if (cell.item && cell.item.y !== cell.y) {
            ok = false;
            break;
          }
        }
  
        if (!column.needUpdate && ok) {
          for (let i = column.cells.length - 1; i >= 0; i--) {
            const cell = column.cells[i];
            const item = cell.item;
            const leftCell = cell.left;
            if (
              !cell.block &&
              item &&
              //  item.y === cell.y &&
              leftCell &&
              !leftCell.block &&
              !leftCell.column.needUpdate &&
              !leftCell.column.itemsOnMove.length &&
              !leftCell.item &&
              leftCell.down &&
              !leftCell.down.block &&
              !leftCell.down.item &&
              !leftCell.hold
            ) {
              let targetCell;
              for (let k = leftCell.column.cells.length - 1; k >= 0; k--) {
                const cellData = leftCell.column.cells[k];
                //  console.log(cellData)
                if (!cellData.block && !cellData.item) {
                  targetCell = cellData;
                  break;
                }
              }
  
              this.columnCellsOnMove.push(cell.item);
              cell.item = null;
              item.cell = targetCell;
              item.columnVector = "left";
              targetCell.item = item;
              item.oldCell = cell;
              leftCell.hold = true;
              column.needUpdate = true;
              this.itemsOnMove.push(item);
              leftCell.column.itemsOnMove.push(item);
              break;
            }
          }
        }
      });
  
      this.columnsArr.forEach((column) => {
        let ok = true;
  
        for (let i = 0; i < column.cells.length; i++) {
          const cell = column.cells[i];
          if (cell.item && cell.item.y !== cell.y) {
            ok = false;
            break;
          }
        }
  
        if (!column.needUpdate && ok) {
          for (let i = column.cells.length - 1; i >= 0; i--) {
            const cell = column.cells[i];
            const item = cell.item;
            const rightCell = cell.right;
            if (
              !cell.block &&
              item &&
              //  item.y === cell.y &&
              rightCell &&
              !rightCell.block &&
              !rightCell.column.needUpdate &&
              !rightCell.column.itemsOnMove.length &&
              !rightCell.item &&
              rightCell.down &&
              !rightCell.down.block &&
              !rightCell.down.item &&
              !rightCell.hold
            ) {
              let targetCell;
              for (let k = rightCell.column.cells.length - 1; k >= 0; k--) {
                const cellData = rightCell.column.cells[k];
                if (!cellData.block && !cellData.item) {
                  targetCell = cellData;
                  break;
                }
              }
  
              this.columnCellsOnMove.push(cell.item);
              cell.item = null;
              item.cell = targetCell;
              item.columnVector = "right";
              targetCell.item = item;
              rightCell.hold = true;
              item.oldCell = cell;
              column.needUpdate = true;
              this.itemsOnMove.push(item);
              rightCell.column.itemsOnMove.push(item);
              break;
            }
          }
        }
      });
      if (
        !this.threeInLine.length &&
        !this.itemsOnMove.length &&
        !this.onDestroy.length &&
        !this.drawAreaA.length &&
        // !this.checkStatus &&
        !this.columnCellsOnMove.length &&
        !this.case
      ) {
        this.getGroops();
        this.getThreeInLine();
        // console.log("HERE");
        if (this.threeInLine.length) {
          this.checkStatus = "getThreeInLine";
        } else {
          this.checkStatus = "";
          this.userStop = false;
        }
      }
    }
  
    // console.log(this.userStop);
  };
  
  GameField.prototype.beamsOrder = function () {
    for (let i = 0; i < this.beamsOnDraw.length; i++) {
      const beam = this.beamsOnDraw[i];
      beam.width += 10;
      beam.height += 10;
      if (beam.width >= 150) {
        beam.step = 0;
        if (!beam.ready) {
          beam.items = [];
          this.cellsArrey.forEach((cell) => {
            if (
              (cell.i === beam.cell.i || cell.k === beam.cell.k) &&
              cell.item &&
              !cell.item.special &&
              !cell.item.destroy
            ) {
              cell.item.destroy = true;
              beam.items.push({
                item: cell.item,
                dis: getDistanse(beam.cell, cell).dis
              });
            }
          });
          beam.items = beam.items.sort((a, b) => a.dis - b.dis);
          beam.step = 0;
        }
        beam.ready = true;
        beam.width = 110;
        beam.height = 110;
      }
      if (beam.ready) {
        beam.step ++;
         const item = beam.items.length && beam.items[0].item;
         const dis = beam.items.length && beam.items[0].dis;
         if(item && !item.beamCheck) {
          item.beamCheck = true;
          //item.cell.item = null;
         // item.cell = beam.cell;
         // beam.items.shift()
          //console.log(item)
          console.log(beam.step)
          console.log(dis)
          if(beam.step === 1) {
            if(item.x < beam.cell.x) {
              item.width += dis;
              console.log(item.type, 1)
          } else if(item.x > beam.cell.x) {
            item.width -= dis;
            console.log(item.type, 2)
          } else if(item.y < beam.cell.y) {
            item.height += dis;
            console.log(item.type, 3)
          } else if(item.y > beam.cell.y) {
            item.height -= dis;
            console.log(item.type, 4)
          }
           } 
  
  
         }
  
      }
    }
  };
  
  GameField.prototype.beamsDraw = function () {
    for (let i = 0; i < this.beamsOnDraw.length; i++) {
      const beam = this.beamsOnDraw[i];
      ctx.drawImage(
        blueSpot,
        0,
        0,
        1460,
        1000,
        (beam.cell.x + (beam.cell.width - beam.width) / 2) * (mas + booMas) +
          offsetX + 2.5,
        (beam.cell.y + (beam.cell.height - beam.height) / 2) * (mas + booMas) +
          offsetY,
        beam.width * mas,
        beam.height * mas
      );
    }
  };
  
  GameField.prototype.rocketsOrder = function () {
    for (let i = 0; i < this.rocketsOnDraw.length; i++) {
      const rocket = this.rocketsOnDraw[i];
      if (rocket.type === "left" || rocket.type === "up") {
        rocket.speed -= 1.5;
        rocket.type === "left"
          ? (rocket.x += rocket.speed)
          : (rocket.y += rocket.speed);
      } else if (rocket.type === "right" || rocket.type === "down") {
        rocket.speed += 1.5;
        rocket.type === "right"
          ? (rocket.x += rocket.speed)
          : (rocket.y += rocket.speed);
      }
      const x = rocket.x * mas + offsetX;
      const y = rocket.y * mas + offsetY;
      if (x < 0 || x > width || y < 0 || y > height) {
        this.rocketsOnDraw.splice(i, 1);
        i--;
      }
      rocket.width++;
      rocket.height++;
    }
    for (let i = 0; i < this.rockets.length; i++) {
      const rocket = this.rockets[i];
      if (rocket.type === "left") {
        for (let k = 0; k < this.cells[rocket.i].length; k++) {
          const cell = this.cells[rocket.i][k];
          if (cell.k < rocket.k && cell.item && rocket.x < cell.x) {
            !cell.item.destroy && this.addAndingItem(cell);
          }
        }
      } else if (rocket.type === "right") {
        for (let k = 0; k < this.cells[rocket.i].length; k++) {
          const cell = this.cells[rocket.i][k];
          if (cell.k > rocket.k && cell.item && rocket.x > cell.x) {
            !cell.item.destroy && this.addAndingItem(cell);
          }
        }
      } else if (rocket.type === "up") {
        for (let i = rocket.i; i >= 0; i--) {
          const cell = gameField.cells[i][rocket.k];
          if (cell.item && rocket.y < cell.y) {
            !cell.item.destroy &&  this.addAndingItem(cell);
          }
        }
      } else if (rocket.type === "down") {
        for (let i = rocket.i; i < gameField.cells.length; i++) {
          const cell = gameField.cells[i][rocket.k];
          if (cell.item && rocket.y > cell.y) {
            !cell.item.destroy && this.addAndingItem(cell);
          }
        }
      }
  
      if (
        rocket.x + rocket.width < this.x ||
        rocket.x > this.x + this.width ||
        rocket.y + rocket.height < this.y ||
        rocket.y > this.y + this.height
      ) {
        this.rockets.splice(i, 1);
        i--;
      }
    }
  };
  
  GameField.prototype.drawRockets = function () {
    for (let i = 0; i < this.rocketsOnDraw.length; i++) {
      const rocketData = this.rocketsOnDraw[i];
      ctx.save();
      ctx.translate(
        (rocketData.x + rocketData.width / 2) * (mas + booMas) + offsetX,
        (rocketData.y + rocketData.height / 2) * (mas + booMas) + offsetY
      );
  
      if (rocketData.type === "left" || rocketData.type === "up") {
      //  rocket.x += rocket.speed;
        rocketData.type === "left" && ctx.rotate(-(90 * Math.PI) / 180);
        ctx.drawImage(
          rocketGo,
          rocketData.aX,
          0,
          100,
          200,
          -(rocketData.width / 2) * (mas + booMas),
          -(rocketData.height / 2) * (mas + booMas),
          rocketData.width * (mas + booMas),
          rocketData.height * (mas + booMas)
        );
      }
  
      if (rocketData.type === "right" || rocketData.type === "down") {
        rocketData.type === "right"
          ? ctx.rotate((90 * Math.PI) / 180)
          : ctx.rotate((180 * Math.PI) / 180);
        ctx.drawImage(
          rocketGo,
          rocketData.aX,
          0,
          100,
          200,
          -(rocketData.width / 1.9) * (mas + booMas),
          -(rocketData.height / 2) * (mas + booMas),
          rocketData.width * (mas + booMas),
          rocketData.height * (mas + booMas)
        );
      }
  
      ctx.restore();
      rocketData.aX += 100;
      rocketData.aX === 1600 ? (rocketData.aX = 0) : false;
    }
  };

  const gameField = new GameField();
gameField.fieldInit();
gameField.getColumns();
gameField.getGroops();
//gameField.getPotentialThree();

const gab = 60;

const scorePoints = {
  points: [],
  onDestroy: [],
  pieses: [],
  // red: { items: [] },
  // blue: { items: [] },
  // green: { items: [] },
  init: function () {
    const newTypes = JSON.parse(JSON.stringify(types));
    while (newTypes.length > 3) {
      newTypes.splice(Math.floor(Math.random() * newTypes.length), 1);
    }

    newTypes.forEach((type) => {
      this[type] = { items: [] };
      this.points.push(this[type]);
    });
    const pieseStep = 20;
    for (let i = 0; i < pieseStep; i++) {
      this.pieses.push([]);
      for (let k = 0; k < pieseStep; k++) {
        this.pieses[i].push({
          animX: k * (200 / pieseStep),
          animY: i * (200 / pieseStep),
          step: 200 / pieseStep,
        });
      }
    }
    // console.log(this.pieses);
  },
  drawPieses: function () {
    for (let i = 0; i < this.onDestroy.length; i++) {
      const item = this.onDestroy[i];
      const image = imagesItems[item.type];
      item.outGab += 5;
      item.outY += item.outSpeed;
      item.outSpeed += 0.2;
      item.outTik >= 5 ? (item.pieseKoof += 0.8) : false;
      item.height += 3;
      item.width += 3;
      item.outTik++;

      this.pieses.forEach((el, i) => {
        el.forEach((piese, k) => {
          const { animX, animY, step } = piese;
          const pWidth =
            ((item.width + item.outGab) / this.pieses.length) * mas;
          const pHeight =
            ((item.height + item.outGab) / this.pieses.length) * mas;
          image &&
            ctx.drawImage(
              image,
              animX,
              animY,
              step,
              step,
              (item.cell.cX - (item.width + item.outGab) / 2) * mas +
                offsetX +
                pWidth * k,
              (item.cell.cY + item.outY - item.height / 2) * mas +
                offsetY +
                pHeight * i,
              pWidth - item.pieseKoof,
              pHeight - item.pieseKoof
            );
        });
      });
      if (item.outTik >= 17) {
        this.onDestroy.splice(i, 1);
        // console.log(item.outTik)
        i--;
      }
    }
  },
  drawOrder: function () {
    this.points[0].x = width / 2 - (gab * mas) / 2 - (width / 4) * mas;
    this.points[0].y =
      height - (height - gameField.height * mas) / 4 - (gab / 2) * mas;

    this.points[1].x = width / 2 - (gab * mas) / 2;
    this.points[1].y =
      height - (height - gameField.height * mas) / 4 - (gab / 2) * mas;

    this.points[2].x = width / 2 - (gab * mas) / 2 + (width / 4) * mas;
    this.points[2].y =
      height - (height - gameField.height * mas) / 4 - (gab / 2) * mas;
  },
  draw: function () {
    types.forEach((type) => {
      const point = this[type];
      if (point) {
        if (type === "blue") {
          ctx.drawImage(
            itemsArt,
            30,
            55,
            110,
            100,
            point.x,
            point.y,
            gab * mas,
            gab * mas
          );
        } else if (type === "red") {
          ctx.drawImage(
            itemsArt,
            157,
            50,
            110,
            100,
            point.x,
            point.y,
            gab * mas,
            gab * mas
          );
        } else if (type === "violet") {
          ctx.drawImage(
            itemsArt,
            535,
            50,
            110,
            100,
            point.x,
            point.y,
            gab * mas,
            gab * mas
          );
        } else if (type === "green") {
          ctx.drawImage(
            itemsArt,
            410,
            50,
            110,
            100,
            point.x,
            point.y,
            gab * mas,
            gab * mas
          );
        } else if (type === "yellow") {
          ctx.drawImage(
            itemsArt,
            660,
            50,
            110,
            100,
            point.x,
            point.y,
            gab * mas,
            gab * mas
          );
        } else {
          ctx.fillStyle = type;
          ctx.fillRect(point.x, point.y, gab * mas, gab * mas);
        }

        for (let i = 0; i < point.items.length; i++) {
          const item = point.items[i];
          if (item.away) {
            if (item.width < gab) {
              item.width += 5;
              item.height += 5;
            }
            // const {deltaY, deltaX, dis} = getDistanse(point, item);
            if (!item.hz) {
              item.hz = true;
              item.awayX = item.x * mas + offsetX;
              item.awayY = item.y * mas + offsetY;
            }

            const deltaX = point.x - item.awayX;
            const deltaY = point.y - item.awayY;
            const conor = Math.atan2(deltaY, deltaX);

            item.awayX += Math.cos(conor) * item.speed;
            item.awayY += Math.sin(conor) * item.speed;
            item.speed += 3;
            // console.log(deltaX)
            if (item.image) {
              ctx.drawImage(
                item.image,
                item.imageX,
                item.imageY,
                item.imageGabX,
                item.imageGabY,
                item.awayX,
                item.awayY,
                item.width * mas,
                item.height * mas
              );
            } else {
              ctx.fillStyle = item.type;
              ctx.fillRect(
                item.awayX,
                item.awayY,
                item.width * mas,
                item.height * mas
              );
            }
          }
          // item.draw();
          if (
            !(
              item.awayX > point.x + gab * mas ||
              item.awayX + item.width * mas < point.x ||
              item.awayY > point.y + gab * mas ||
              item.awayY + item.height * mas < point.y
            )
          ) {
            point.items.splice(i, 1);
            i--;
          }
        }
      }
    });
  },
};

scorePoints.init();

const cursor = { x: 0, y: 0 };

window.addEventListener("mousemove", (e) => {
  cursor.x = e.offsetX;
  cursor.y = e.offsetY;
  if (gameField.click) {
    gameField.click.lastX = cursor.x;
    gameField.click.lastY = cursor.y;
  }
});

window.addEventListener("mousedown", (e) => {
  if ( !gameField.userStop) {
    gameField.fieldCollision(cursor);
    gameField.focusCell
      ? (gameField.click = {
          check: false,
          x: e.offsetX,
          y: e.offsetY,
          timer: setTimeout(() => {
            gameField.click && gameField.clickOrder();
          }, 600),
        })
      : false;
  }
});

window.addEventListener("mouseup", (e) => {
  if (gameField.click) {
    gameField.clickOrder();
  }
});



function updateMas() {
  mas = clientHeight / 600 - hh;
  mas > 0 && hhK ? (hh += 0.05) : mas < 0 ? (mas = 0) : false;

  booMas = 0;
  if (gameField.booMas.length) {
    booMas = gameField.booMas[gameField.booMas.length - 1];
    gameField.booMas.pop();
  }
  if (gameField.width * mas > width) {
    mas = clientHeight / 750;
  }

  offsetY = (height - gameField.height * (mas + booMas)) / 2;
  offsetX = (width - gameField.width * (mas + booMas)) / 2;
}

function starsDraw() {
  for (let i = 0; i < stars.length; i++) {
    const starData = stars[i];
    const x =
      starData.item.x * mas +
      offsetX +
      (starData.item.width * mas) / starData.offsetX;
    const y =
      starData.item.y * mas +
      offsetY +
      (starData.item.height * mas) / starData.offsetY;
    starData.conor += starData.conorKoof;
    starData.gab--;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(starData.conor);
    ctx.drawImage(
      star,
      0,
      0,
      600,
      400,
      -(starData.gab * mas) / 2,
      -(starData.gab * mas) / 2,
      starData.gab * mas,
      starData.gab * mas
    );
    ctx.restore();
    if (starData.gab <= 0 || starData.item.stopStar) {
      starData.out = true;
      stars.splice(i, 1);
      i--;
    }
  }
}

function baseFoneDraw() {
  const iWidth = (width * 1281) / 1600;
  const iHeight = (height * 720) / 900;

  const animX = (1281 - iWidth) / 2;

  const animY = (720 - iHeight) / 2;
  const animWidth = iWidth;
  const animHeight = iHeight;

  ctx.drawImage(
    baseFone2,
    animX,
    animY,
    animWidth,
    animHeight,
    0,
    0,
    width,
    height
  );

  baseFoneAlpha > 0 ? (baseFoneAlpha -= 0.01) : false;
  baseFoneAlpha < 0 ? (baseFoneAlpha = 0) : false;

  ctx.globalAlpha = baseFoneAlpha;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;
}

let pausa = false;
let hh = 0;
let hhK = false;
window.addEventListener("keydown", () => {
  //  hhK = true
  pausa = !pausa
});


setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  baseFoneDraw();
  updateMas();

if(!pausa) {
  gameField.caseOrder();
  gameField.cellsItemsMove();
  gameField.destroyOrder();
  gameField.booOrder();
 // gameField.leftRightUpdate();
  gameField.controller();
  gameField.itemsColumsMove();
 gameField.itemsMove();
 gameField.leftRightUpdate();
  gameField.rocketsOrder();
  gameField.beamsOrder();
 // gameField.debug(pausa); 
}


  
  gameField.draw();

  gameField.drawBoo();
  scorePoints.drawOrder();
  scorePoints.draw();
  scorePoints.drawPieses();
  starsDraw();
  gameField.drawRockets();
  gameField.beamsDraw();

  gameField.ticker++;
  gameField.ticker === 1000 ? (gameField.ticker = 0) : false;
}, 30);

}

