function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);
  fill(254, 100, 200);
  stroke(254, 100, 200);
  circle(50, 50, 80);
  circle(50, 430, 80);
  circle(590, 50, 80);
  circle(590, 430, 80);
}

function take_snapshot(){
    save('student_name.png');
}

