let size = 5;
let cols, rows;
let j = 0;
let i = 0;

function setup() {
  L.setCanvasSize(900, 900);
  L.centerCanvas();
  L.background("black");

  cols = parseInt(canvas.width / size);
  rows = parseInt(canvas.height / size);
}

function draw() {
  for (let i = 0; i < 50; i++) {
    print();
  }
}

function print() {
  let x = i * size;
  let y = j * size;

  let hue = L.map(i + 1 + (j + 1), 2, cols + 1 + (rows + 1), 0, 360);

  L.strokeWeight(1);
  L.stroke(`hsl(${hue}, 100%, 45%)`);

  // switch (Math.floor(L.random(0, 4))) {
  //   case 0:
  //     L.Line(x + size * 1.5, y - size / 2, x - size / 2, y + size * 1.5);
  //     break;
  //   case 1:
  //     L.Line(x + size / 2, y - size / 2, x + size / 2, y + size * 1.5);
  //     break;
  //   case 2:
  //     L.Line(x - size / 2, y - size / 2, x + size * 1.5, y + size * 1.5);
  //     break;
  //   case 3:
  //     L.Line(x - size / 2, y + size / 2, x + size * 1.5, y + size / 2);
  //     break;
  // }

  // switch (Math.floor(L.random(0, 2))) {
  //   case 0:
  //     L.Line(x + size / 2, y - size / 2, x + size / 2, y + size * 1.5);
  //     break;
  //   case 1:
  //     L.Line(x - size / 2, y + size / 2, x + size * 1.5, y + size / 2);
  //     break;
  // }

  // switch (Math.floor(L.random(0, 2))) {
  //   case 0:
  //     L.Line(x + size * 1.5, y - size / 2, x - size / 2, y + size * 1.5);
  //     break;
  //   case 1:
  //     L.Line(x - size / 2, y - size / 2, x + size * 1.5, y + size * 1.5);
  //     break;
  // }

  if (L.random(1) < 0.5) {
    L.Line(x, y, x + size, y + size);
  } else {
    L.Line(x + size, y, x, y + size);
  }

  i += 1;
  if (i === cols) {
    i = 0;
    j += 1;
  }

  if (j === rows) {
    L.noLoop();
  }
}
