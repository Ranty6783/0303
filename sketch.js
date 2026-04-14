function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#66C7F4');
}

function draw() {
  background('#66C7F4');
  // 圓的顏色
  let fillColor = color('#f72585');
  // 線的顏色（較深色）
  let strokeColor = color('#a0134a');
  stroke(strokeColor);
  strokeWeight(5);
  fill(fillColor);
  let cx = width / 2;
  let cy = height / 2;
  let r = 100;
  ellipse(cx, cy, r * 2, r * 2);

  // 畫眼睛
  fill(30);
  noStroke();
  let eyeOffsetX = 35;
  let eyeOffsetY = 30;
  let eyeSize = 18;
  ellipse(cx - eyeOffsetX, cy - eyeOffsetY, eyeSize, eyeSize);
  ellipse(cx + eyeOffsetX, cy - eyeOffsetY, eyeSize, eyeSize);

  // 畫微笑嘴巴
  noFill();
  stroke(30);
  strokeWeight(5);
  arc(cx, cy + 20, 60, 40, 0, PI);
}
