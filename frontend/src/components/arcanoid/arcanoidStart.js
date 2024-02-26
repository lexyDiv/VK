/* eslint-disable no-unused-expressions */
export function arcanoidStart(canvas) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  const contacts = [];

  function getData(point1, point2) {
    const a = point1.x - point2.x;
    const b = point1.y - point2.y;
    const c = Math.sqrt(a * a + b * b);
    const conor = Math.atan2(b, a);
    return { a, b, c, conor };
  }

  class Contact {
    constructor(line, point, deep) {
      this.line = line;
      this.point = point;
      this.deep = deep;
    }
  }

  class Point {
    constructor(x, y, conor, speed, id) {
      this.x = x;
      this.y = y;
      this.conor = conor;
      this.speed = speed;
      this.lines = [];
      this.id = id;
      this.deepses = [];
    }

    prevCheck = function (arg) {
      const { c, conor } = getData(
        { x: this.x, y: this.y },
        { x: arg.x, y: arg.y }
      );
      arg.pointsOnCheck.push({
        c,
        conor,
        point: this,
      });
    };

    draw = () => {
      ctx.fillStyle = "red";
      this.in ? (ctx.fillStyle = "blue") : false;
      ctx.fillRect(this.x - 1.5, this.y - 1.5, 3, 3);
    };

    move = () => {
      this.lines = [];
      // console.log(this.speed)
      if (this.speed) {
        this.x = this.x + Math.cos(this.conor) * this.speed;
        this.y = this.y + Math.sin(this.conor) * this.speed;
      }
    };
  }

  class Line {
    constructor(x, y, finX, finY, conor, father, id) {
      this.x = x;
      this.y = y;
      this.finX = finX;
      this.finY = finY;
      this.length = this.finX - this.x;
      this.conor = conor;
      this.pointsOnCheck = [];
      this.contact = [];
      this.magickPoints = [];
      this.father = father;
      this.id = id;
      this.stabConor = this.conor;
    }

    draw = () => {
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.finX, this.finY);
      ctx.stroke();

      this.magickPoints = [];
    };

    move = () => {
      this.check = false;
      this.saveConor = this.conor;
      this.y -= 0;
      this.conor -= 0;
      if (!this.checked) {
        this.checked = true;
        this.stabConor = this.conor;
      }

      this.finX = this.x + Math.cos(this.conor) * this.length;
      this.finY = this.y + Math.sin(this.conor) * this.length;
    };

    get = () => {
      this.contact = [];
      this.pointsOnCheck.forEach((pointData) => {
        const { xB, yB } = this.getBefore(pointData);
        const { yP, xP } = this.getPast(pointData);

        if (yB < 0 && yP >= 0 && !this.check) {
          const point = {
            x: this.x + Math.cos(pointData.conor) * pointData.c,
            y: this.y + Math.sin(pointData.conor) * pointData.c,
          };

          const basicY = Math.abs(yB) + Math.abs(yP);

          this.a = { x: point.x, y: point.y };

          this.c = { x: pointData.point.x, y: pointData.point.y };
          this.xB = {
            x: this.x + Math.cos(this.conor) * xB,
            y: this.y + Math.sin(this.conor) * xB,
          };
          this.xP = {
            x: this.x + Math.cos(this.conor) * xP,
            y: this.y + Math.sin(this.conor) * xP,
          };

          const katet = xB - xP;
          const def = basicY / yB;
          let dis;

          dis = xB + katet / def;

          if (dis >= 0 && dis <= this.length) {
            const { c: deep } = getData(
              {
                x: this.x + Math.cos(this.conor) * dis,
                y: this.y + Math.sin(this.conor) * dis,
              },
              { x: pointData.point.x, y: pointData.point.y }
            );
            contacts.push(new Contact(this, pointData, deep));
          }
        }
      });
    };

    getBefore = function (arg) {
      const x = this.x + Math.cos(arg.conor) * arg.c;
      const y = this.y + Math.sin(arg.conor) * arg.c;

      const { c, conor } = getData({ x, y }, { x: this.x, y: this.y });
      return {
        xB: Math.cos(conor - this.saveConor) * c,
        yB: Math.sin(conor - this.saveConor) * c,
        hipB: c,
        conorB: conor - this.saveConor,
      };
    };

    getPast = function (arg) {
      const { c, conor } = getData(
        { x: arg.point.x, y: arg.point.y },
        { x: this.x, y: this.y }
      );
      return {
        xP: Math.cos(conor - this.conor) * c,
        yP: Math.sin(conor - this.conor) * c,
        hipP: c,
        conorP: conor - this.conor,
      };
    };
  }

  let lines = [];

  let points = [];

  class Room {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.lines = [];
      this.name = "room";
    }

    linesInit = () => {
      this.lines = [
        new Line(
          this.x + 400,
          this.y,
          this.x + 800,
          this.y,
          (Math.PI * 180) / 180,
          this,
          1
        ),
        new Line(
          this.x + 400,
          this.y + 550,
          this.x + 950,
          this.y,
          (Math.PI * -90) / 180,
          this,
          2
        ),
        new Line(
          this.x,
          this.y + 550,
          this.x + 400,
          this.y,
          (Math.PI * 0) / 180,
          this,
          3
        ),
        new Line(
          this.x,
          this.y,
          this.x + 550,
          this.y,
          (Math.PI * 90) / 180,
          this,
          4
        ),
      ];
    };
  }

  let pointOnDraw;
  let cellOnDraw;

  class Boll {
    constructor(x, y, conor, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.conor = conor;
      this.points = [];
      this.way = this.speed;
      this.radiusCorrect = 5;
      this.radiusStep = 0.1;
    }

    radiuser = function () {
      this.radiusCorrect += this.radiusStep;
      this.radiusCorrect >= 40 || this.radiusCorrect <= 4
        ? (this.radiusStep = -this.radiusStep)
        : false;
    };

    move = function () {
      this.x = this.x + Math.cos(this.conor) * this.speed;
      this.y = this.y + Math.sin(this.conor) * this.speed;

      this.pointsOrder();
      gameLoop();

      if (contacts.length) {
        const orderContacts = contacts.sort((a, b) => b.deep - a.deep);
        const actualContact = orderContacts[0];
        const { line, point, deep } = actualContact;

        this.x = this.x - Math.cos(this.conor) * Math.abs(deep + 0.1);
        this.y = this.y - Math.sin(this.conor) * Math.abs(deep + 0.1);
        this.pointsOrder();
        while (true) {
          if (
            line.father.type === "norm" &&
            !(
              point.point.x < line.father.x ||
              point.point.x > line.father.x + 20 ||
              point.point.y < line.father.y ||
              point.point.y > line.father.y + 10
            )
          ) {
            this.x = this.x - Math.cos(this.conor) * 0.1;
            this.y = this.y - Math.sin(this.conor) * 0.1;
            this.pointsOrder();
          } else {
            break;
          }
        }

        this.conor =
          (Math.PI *
            -(
              (this.conor / Math.PI) * 180 -
              (line.conor / Math.PI) * 180 * 2 +
              360
            )) /
          180;

        while (true) {
          if (Math.abs((this.conor * 180) / Math.PI) <= 360) {
            break;
          } else {
            this.conor > 0
              ? (this.conor = this.conor - (Math.PI * 360) / 180)
              : (this.conor = this.conor + (Math.PI * 360) / 180);
          }
        }

        if (line.father.type === "norm") {
          line.father.hp--;
        }

        this.speed += 0.01;

        line.magickPoints = [];
      }
      contacts.length = 0;
    };

    pointsOrder = () => {
      this.points.forEach((point) => {
        point.x = this.x + Math.cos(point.superConor) * this.radiusCorrect;
        point.y = this.y + Math.sin(point.superConor) * this.radiusCorrect;
      });
    };

    pointsInit = function () {
      this.points = [new Point(this.x, this.y, this.conor, 0, 1)];

      let k = 0;
      for (let i = 0; i < 360; i += 3) {
        k++;
        this.points.push(new Point(this.x, this.y, this.conor, 0, k));
        this.points[this.points.length - 1].superConor = (Math.PI * i) / 180;
      }
    };

    draw() {
      ctx.beginPath();
      ctx.fillStyle = "grey";
      ctx.arc(this.x, this.y, this.radiusCorrect + 1.5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  class Cell {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.lines = [];
      this.hp = 1;
      this.conor = 0;
      this.cX = this.x + 20;
      this.cY = this.y + 10;
      this.data = [];
      this.type = type;
    }

    draw = function () {
      if (this.type === "norm") {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 40, 20);
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, this.y, 40, 20);
      }
    };

    linesInit = function () {
      if (this.type === "norm") {
        this.lines.push(
          new Line(
            this.x,
            this.y,
            this.x + 40,
            this.y,
            (Math.PI * 0) / 180,
            this
          ),
          new Line(
            this.x + 40,
            this.y,
            this.x + 60,
            this.y,
            (Math.PI * 90) / 180,
            this
          ),
          new Line(
            this.x + 40,
            this.y + 20,
            this.x + 80,
            this.y,
            (Math.PI * 180) / 180,
            this
          ),
          new Line(
            this.x,
            this.y + 20,
            this.x + 20,
            this.y,
            (Math.PI * -90) / 180,
            this
          )
        );
      } else if (this.type === "sota") {
        for (let i = 0; i < 360; i += 45) {
          this.lines.push(
            new Line(
              this.cX + Math.cos((Math.PI * i) / 180) * 60,
              this.cY + Math.sin((Math.PI * i) / 180) * 60,
              0,
              0,
              (Math.PI * -45) / 180,
              this
            )
          );
        }

        this.lines.forEach((line, i) => {
          const { c, conor } = getData(
            { x: line.x, y: line.y },
            { x: this.cX, y: this.cY }
          );
          line.fatherConor = conor;
          line.fatherC = c;
          let x;
          let y;
          if (i === this.lines.length - 1) {
            x = { x: this.lines[0].x, y: this.lines[0].y };
            y = { x: this.lines[i].x, y: this.lines[i].y };
          } else {
            x = { x: this.lines[i + 1].x, y: this.lines[i + 1].y };
            y = { x: this.lines[i].x, y: this.lines[i].y };
          }
          const { c: length, conor: conor2 } = getData(x, y);
          line.finX = line.x + length;
          line.length = length;
          line.stabConor = conor2;
          line.conor = conor2;
        });
      }
    };

    linesMove = function () {
      if (this.type === "sota") {
        this.conor += 0.03;
        this.lines.forEach((line) => {
          line.x =
            this.cX +
            Math.cos(line.fatherConor + (this.conor + 0.03)) * line.fatherC;
          line.y =
            this.cY +
            Math.sin(line.fatherConor + (this.conor + 0.03)) * line.fatherC;
          line.conor = this.conor + line.stabConor;
        });
      }
    };
  }

  const cells = [];
  const boll = new Boll(180, 430, (Math.PI * 90) / 180, 5);
  boll.pointsInit();
  cells.push(new Cell(200, 300, "sota"));

  for (let i = 20; i < 420; i += 40) {
    for (let k = 20; k < 240; k += 20) {
      const cell = new Cell(i, k, "norm");
      cells.push(cell);
      const ran = Math.floor(Math.random() * 4);
      if (!ran) {
        cell.color = "red";
      } else if (ran === 1) {
        cell.color = "green";
      } else if (ran === 2) {
        cell.color = "blue";
      } else if (ran === 3) {
        cell.color = "violet";
      } else {
        cell.color = "black";
      }
    }
  }

  cells.forEach((cell) => cell.linesInit());

  const checkCells = function () {
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (cell.hp <= 0) {
        cells.splice(i, 1);
        i--;
      }
    }
  };

  let onCheckLines = [];

  function addLines(arg) {
    lines = lines.concat(arg);
  }

  const room = new Room(20, 20);
  room.linesInit();

  function gameLoop() {
    cellOnCheck();
    lines.forEach((line) => line.move());
    onCheckLines.forEach((line) => line.get());
  }

  const cellOnCheck = function () {
    cells.forEach((cell) => {
      if (cell.type === "norm") {
        const { c } = getData(
          { x: cell.cX, y: cell.cY },
          { x: boll.x, y: boll.y }
        );

        if (c < boll.radiusCorrect + boll.speed + 40) {
          onCheckLines = onCheckLines.concat(cell.lines);
        }
      } else {
        onCheckLines = onCheckLines.concat(cell.lines);
      }
    });

    onCheckLines = onCheckLines.concat(room.lines);
  };

  setInterval(() => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    !boll.stop && boll.radiuser();

    addLines(room.lines);
    cells.forEach((cell) => {
      addLines(cell.lines);
      cell.linesMove();
    });
    points = points.concat(boll.points);

    lines.forEach((line) => (line.pointsOnCheck = []));
    points.forEach((point) => lines.forEach((line) => point.prevCheck(line)));
    boll.way = boll.speed;
    !boll.stop && boll.move();
    checkCells();

    lines.forEach(
      (line) =>
        (line.father.name === "room" || line.father.type === "sota") &&
        line.draw()
    );
    boll.draw();
    lines.length = 0;
    points.length = 0;
    onCheckLines.length = 0;

    cells.forEach((cell) => {
      cell.draw();
    });

    if (pointOnDraw) {
      ctx.fillStyle = "red";
      ctx.fillRect(pointOnDraw.x - 1.5, pointOnDraw.y - 1.5, 3, 3);
    }

    if (cellOnDraw) {
      ctx.fillStyle = "black";
      ctx.fillRect(cellOnDraw.x, cellOnDraw.y, 20, 10);
    }
  }, 30);
}
