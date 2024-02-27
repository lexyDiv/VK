/* eslint-disable no-unused-expressions */

import floorImg from "./res/floor.webp";
import mnogoImg from "./res/mnogo2.png";
import mnogogolImg from "./res/mnogogol.png";
import mnogozadImg from "./res/mnogozad.png";
import aplImg from "./res/apl.png";
import gameOverImg from "./res/gameOver.png";
import { getInterval } from "../../functions/gameClear";

export function snakeStart(canvas) {
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");

  const mnogo = new Image();
  mnogo.src = mnogoImg;

  const mnogogol = new Image();
  mnogogol.src = mnogogolImg;

  const mnogozad = new Image();
  mnogozad.src = mnogozadImg;

  const floor = new Image();
  floor.src = floorImg;

  const apl = new Image();
  apl.src = aplImg;

  const gameOver = new Image();
  gameOver.src = gameOverImg;

  let over = false;
  let score = 0;

  class Cell {
    constructor(x, y, ver, hor) {
      this.x = x;
      this.y = y;
      this.gabarit = 20;
      this.ver = ver;
      this.hor = hor;
      this.closed = false;
    }
    draw = function () {
      ctx.strokeStyle = "black";
      ctx.strokeRect(this.x, this.y, this.gabarit, this.gabarit);
    };
  }

  let cells = [];

  function drawContur() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 600, 20);
    ctx.fillRect(0, 580, 600, 20);
    ctx.fillRect(0, 0, 20, 600);
    ctx.fillRect(600, 0, 20, 600);
  }

  class Snack {
    constructor(segments) {
      this.segments = segments;
      this.head = this.segments[0];
      this.tail = this.segments[this.segments.length - 1];
      this.correction = 30;
      this.takt = this.correction - 1;
      this.vector = "left";
      this.nextVector = "left";
    }

    order = function () {
      if (this.nextVector === "up" && this.vector !== "down") {
        this.vector = "up";
      } else if (this.nextVector === "down" && this.vector !== "up") {
        this.vector = "down";
      } else if (this.nextVector === "left" && this.vector !== "right") {
        this.vector = "left";
      } else if (this.nextVector === "right" && this.vector !== "left") {
        this.vector = "right";
      }
      this.segments.forEach((segment, i) => {
        !i ? (segment.type = "head") : (segment.type = "body");
        i === this.segments.length - 1 ? (segment.type = "tale") : false;
        if (i) {
          segment.father = this.segments[i - 1];
          segment.nextCell = segment.father.cell;
        }
      });
    };

    draw = function () {
      for (let i = this.segments.length - 1; i >= 0; i--) {
        this.segments[i].draw();
      }
      this.segments[this.segments.length - 1].draw();
    };

    prog = function () {
      this.takt++;
      if (this.takt === this.correction) {
        if (this.add) {
          snack.correction > 5 && snack.correction--;
          this.add = false;
          this.newSegment();
          score++;
        }
        this.takt = 0;
        this.head.cell.closed = false;
        snack.order();
        if (
          this.vector === "up" &&
          cells[this.head.cell.ver - 1] &&
          cells[this.head.cell.ver - 1][this.head.cell.hor] &&
          !cells[this.head.cell.ver - 1][this.head.cell.hor].closed
        ) {
          this.head.nextCell =
            cells[this.head.cell.ver - 1][this.head.cell.hor];
        } else if (
          this.vector === "down" &&
          cells[this.head.cell.ver + 1] &&
          cells[this.head.cell.ver + 1][this.head.cell.hor] &&
          !cells[this.head.cell.ver + 1][this.head.cell.hor].closed
        ) {
          this.head.nextCell =
            cells[this.head.cell.ver + 1][this.head.cell.hor];
        } else if (
          this.vector === "left" &&
          cells[this.head.cell.ver][this.head.cell.hor - 1] &&
          !cells[this.head.cell.ver][this.head.cell.hor - 1].closed
        ) {
          this.head.nextCell =
            cells[this.head.cell.ver][this.head.cell.hor - 1];
        } else if (
          this.vector === "right" &&
          cells[this.head.cell.ver][this.head.cell.hor + 1] &&
          !cells[this.head.cell.ver][this.head.cell.hor + 1].closed
        ) {
          this.head.nextCell =
            cells[this.head.cell.ver][this.head.cell.hor + 1];
        } else {
          over = true;
        }
      }
    };

    move = function () {
      this.head.nextCell &&
        this.segments.forEach((segment) => {
          if (segment.type === "tale") {
            if (segment.hold) {
              segment.hold = false;
              segment.x = segment.cell.x;
              segment.y = segment.cell.y;
              return;
            }
          }
          segment.prev = { x: segment.x, y: segment.y };
          const a = segment.nextCell.x - segment.cell.x;
          const b = segment.nextCell.y - segment.cell.y;
          if (segment.type === "head") {
            const a2 = segment.x + a / snack.correction - segment.x;
            const b2 = segment.y + b / snack.correction - segment.y;
            this.speed = Math.sqrt(a2 * a2 + b2 * b2);
          }
          segment.x += a / snack.correction;
          segment.y += b / snack.correction;
          if (this.takt === this.correction - 1) {
            segment.cell.closed = false;
            segment.cell = segment.nextCell;
            segment.cell.closed = true;
            segment.x = segment.cell.x;
            segment.y = segment.cell.y;
            if (
              aple &&
              aple.x === segment.cell.x &&
              segment.cell.y === aple.y
            ) {
              snack.add = true;
              aple = null;
            }
          }
          if (segment.father) {
            segment.getConor();
          }
          segment.getPoint();
          segment.onDraw.forEach((piece, i) => piece.move(i));
        });
    };

    newSegment = function () {
      this.segments.push(new Segment(snack.head.nextCell));
      this.segments[this.segments.length - 1].father =
        this.segments[this.segments.length - 2];
      this.segments[this.segments.length - 1].cell = this.tail.cell;
      this.tail.type = "body";
      this.tail = this.segments[this.segments.length - 1];
      this.tail.type = "tale";
      this.tail.hold = true;
      this.tail.getConor();
      this.segments[this.segments.length - 2].pieceInit();
    };
  }

  class Piece {
    constructor(x, y, father, type) {
      this.x = x;
      this.y = y;
      this.type = type;
      this.father = father;
      this.points = [];
      this.animX = Math.floor(Math.random() * 3) * 200;
      this.animY = Math.floor(Math.random() * 1) * 200;
      this.animTakt = 0;
    }

    move = function (i) {
      if (this.type === "head") {
        this.x = this.father.point.x;
        this.y = this.father.point.y;
      } else {
        const a = this.father.x - this.x;
        const b = this.father.y - this.y;
        const c = Math.sqrt(a * a + b * b);
        const dif = Math.abs(2 - c);
        this.conor = Math.atan2(b, a);
        if (c > 2) {
          this.x += a / (c / dif);
          this.y += b / (c / dif);
        }
      }
    };

    draw = function (i) {
      if (this.animTakt < Math.floor(snack.correction / 3)) {
        this.animTakt++;
      } else if (!over) {
        this.animTakt = 0;
        this.animX < 600 ? (this.animX += 200) : (this.animX = 0);
        this.animY < 200 ? (this.animY += 200) : (this.animY = 0);
      }
      if (this.type === "head") {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.father.conor + (Math.PI * 90) / 180);
        ctx.drawImage(
          mnogo,
          this.animX,
          this.animY,
          200,
          200,
          -20,
          -50,
          40,
          100
        );
        ctx.restore();
      } else if (this.father.type !== "head" && i % 4 === 0) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.conor + (Math.PI * 90) / 180);
        ctx.drawImage(
          mnogo,
          this.animX,
          this.animY,
          200,
          200,
          -20,
          -50,
          40,
          100
        );
        ctx.restore();
      }
    };
  }

  class Segment {
    constructor(cell, status) {
      this.cell = cell;
      this.x = this.cell.x;
      this.y = this.cell.y;
      this.prev = { x: this.x, y: this.y };
      this.onDraw = [];
      this.status = status;
      this.controlPoint = {
        x: this.x + 10,
        y: this.y + 10,
      };
      this.animX = 0;
      this.animY = 0;
      this.animTakt = 0;
    }

    getPoint = function () {
      this.point = {
        x: this.x + 10 + Math.cos(this.conor) * 10,
        y: this.y + 10 + Math.sin(this.conor) * 10,
      };
    };

    getConor = function () {
      const a2 = this.father.x - this.x;
      const b2 = this.father.y - this.y;
      this.conor = Math.atan2(b2, a2);
    };

    pieceInit = function (i) {
      if (this.type !== "tale") {
        for (let i = 0; i < 10; i++) {
          !i &&
            this.onDraw.push(
              new Piece(this.point.x, this.point.y, this, "head")
            );
          if (i) {
            const father = this.onDraw[this.onDraw.length - 1];
            this.onDraw.push(
              new Piece(
                father.x - Math.cos(this.conor) * 2,
                father.y - Math.sin(this.conor) * 2,
                father
              )
            );
          }
        }
      }
    };

    draw = function () {
      if (this.type === "head") {
        ctx.save();
        ctx.translate(this.x + 10, this.y + 10);
        ctx.rotate(snack.segments[1].conor - (Math.PI * 90) / 180);
        ctx.drawImage(mnogogol, this.animX, 0, 200, 200, -25, -42, 50, 75);
        ctx.restore();

        if (this.animTakt < Math.floor(snack.correction / 2)) {
          this.animTakt++;
        } else if (!over) {
          this.animTakt = 0;
          this.animX += 200;
          this.animX === 600 ? (this.animX = 0) : false;
        }
      } else if (this.type === "body") {
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(this.x + 10, this.y + 10);
        ctx.rotate(this.conor);
        ctx.restore();
        this.onDraw.forEach((piece, i) => piece.draw(i));
      } else if (this.type === "tale") {
        ctx.save();
        ctx.translate(this.x + 10, this.y + 10);
        this.getConor();
        ctx.rotate(this.conor - (Math.PI * 90) / 180);
        ctx.drawImage(mnogozad, this.animX, 0, 200, 200, -30, -35, 60, 60);
        ctx.restore();
      }
    };
  }

  let snack;

  function start() {
    cells = [];
    score = 0;

    for (let i = 1; i < 580 / 20; i++) {
      cells.push([]);
      for (let k = 1; k < 600 / 20; k++) {
        cells[i - 1].push(new Cell(k * 20, i * 20, i - 1, k - 1));
      }
    }

    snack = new Snack([
      new Segment(cells[10][10]),
      new Segment(cells[10][11], true),
      new Segment(cells[10][12]),
      new Segment(cells[10][13]),
      new Segment(cells[10][14]),
      new Segment(cells[10][15]),
    ]);

    snack.order();
    snack.segments.forEach((segment, i) => {
      if (i) {
        segment.getConor();
        segment.getPoint();
        segment.pieceInit(i);
      }
    });
  }

  function keyDown(e) {
    e.preventDefault();
    const key = e.code;
    if (key === "ArrowUp") {
      snack.nextVector = "up";
    } else if (key === "ArrowDown") {
      snack.nextVector = "down";
    } else if (key === "ArrowLeft") {
      snack.nextVector = "left";
    } else if (key === "ArrowRight") {
      snack.nextVector = "right";
    }
    if (key === "Enter") {
      aple = null;
      over = false;
      start();
    }
  }

  document.addEventListener("keydown", keyDown);

  function removeElistenerSnake() {
    document.removeEventListener("keydown", keyDown);
  }

  class Aple {
    constructor(cell) {
      this.cell = cell;
      this.x = this.cell.x;
      this.y = this.cell.y;
    }

    draw = function () {
      ctx.drawImage(apl, 0, 0, 1202, 1339, this.x - 10, this.y - 10, 40, 40);
    };
  }

  let aple = null;

  function addAple() {
    if (!aple) {
      while (true) {
        const ver = Math.floor(Math.random() * cells.length);
        const hor = Math.floor(Math.random() * cells[ver].length);
        if (!cells[ver][hor].closed) {
          aple = new Aple(cells[ver][hor]);
          break;
        }
      }
    }
  }

  const intervalData = setInterval(() => {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(floor, 0, 0, 600, 440, 0, 0, 600, 600);
    drawContur();
    if (snack) {
      if (!over) {
        snack.prog();
        snack.move();
        addAple();
      }
      if (aple) {
        aple.draw();
      }
      snack.draw();
    }

    over && ctx.drawImage(gameOver, 0, 0, 801, 393, 55, 125, 500, 300);

    if (!snack || over) {
      ctx.fillStyle = "red";
      ctx.font = "30px serif";
      ctx.fillText("Press ENTER to start", 165, 40);
    }

    ctx.fillStyle = "grey";
    ctx.fillRect(620, 0, 200, 600);

    ctx.fillStyle = "white";
    ctx.font = "20px serif";
    ctx.fillText(`score : ${score}`, 670, 40);
    snack && ctx.fillText(`speed : ${snack.speed.toFixed(2)}`, 670, 80);
  }, 10);

  getInterval(intervalData, removeElistenerSnake);
}
