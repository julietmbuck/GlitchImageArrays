/*
	Simple image display example

	mouse + space bar will invert
  Also, display a random bit of text
*/

var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular = true;
var imageList = [];
var img;
var polka;

//y-axis and x-axis of lines
let x;
let y;
let num = 21;


var startMillis;

var state;
var stateInitial;
var statePalmSprings = 1;
var stateMexico = 2;
var stateLaJolla = 3;
var stateK38 = 4;
var stateBecky = 5;
var stateNewYork = 6;

var xPos;
var yPos;

var letterX;
var letterY;

// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/image1.jpg');
  imageList[1] = loadImage('assets/image2.jpg');
  imageList[2] = loadImage('assets/image3.jpg');
  imageList[3] = loadImage('assets/image4.jpg');
  imageList[4] = loadImage('assets/image5.jpg');
  imageList[5] = loadImage('assets/image6.jpg');

}

function setup() {
  print("imageSequenceP5 Example");

  //polka size
  polka = 25;


  imageMode(CENTER);


  chooseNewImage();
  state = stateInitial;
  setImagePos();
  setLetterPos()

  createCanvas(1024, 800);

  startMillis = millis();
}

function draw() {
  background(255);

  //function to call which state to draw
  if (state == stateInitial) {
    drawInitial();

  } else if (state == stateMexico) {
    drawMexico();

  } else if (state == stateLaJolla) {
    drawLaJolla();
  } else if (state == stateBecky) {
    drawBecky();
  } else if (state == statePalmSprings) {
    drawPalmSprings();
  } else if (state == stateK38) {
    drawK38();

  } else if (state == stateNewYork) {
    drawNewYork();
  }



  // When timer expires, after 1000ms, choose a new random image
  if (millis() > startMillis + 500) {
    // Displays the image at center point
    // //image(img, width/2, height/2, random(mouseX), random(mouseY));

    setLetterPos()
    chooseNewImage();
    setImagePos();
    startMillis = millis();
  }

  // // setting images w/ state
  if (img == imageList[0]) {
    state = statePalmSprings;
  } else if (img == imageList[2]) {
    state = stateMexico;
  } else if (img == imageList[3]) {
    state = stateLaJolla;
  } else if (img == imageList[4]) {
    state = stateK38;
  } else if (img == imageList[1]) {
    state = stateBecky;
  } else if (img == imageList[5]) {
    state = stateNewYork;
  }
  

  fill(0,191); 
  
  if (mouseIsPressed) { 
    fill (255, 191); 
                    }
  ellipse(mouseX, mouseY, 200, 200); 
  
}


function setImagePos() {
  xPos = random(width);
  yPos = random(height);
}

function setLetterPos() {
  letterX = random(width);
  letterY = random(height);
}


// // // chooses a new items from the array, select a random
// // // index 0 to length of array-1
function chooseNewImage() {
  img = random(imageList);
  print(img);
}


function drawInitial() {

}




function drawPalmSprings() {

  //draw polka dots 
  for (var i = 0; i <= 10; i++) {
    noStroke();
    fill(250, 203, 22);
    ellipse(0, i * 40, polka);
    ellipse(50, i * 40, polka);
    ellipse(100, i * 40, polka);
    ellipse(150, i * 40, polka);
    ellipse(200, i * 40, polka);
    ellipse(250, i * 40, polka);
    ellipse(300, i * 40, polka);
    ellipse(350, i * 40, polka);
    ellipse(400, i * 40, polka);
    ellipse(450, i * 40, polka);
    ellipse(500, i * 40, polka);
  }

  image(imageList[0], xPos, yPos);

  fill(186, 232, 255);
  textFont('Helvetica');
  textSize(150);
  text('S', letterX, letterY);


}

function drawMexico() {
  image(imageList[1], xPos, yPos);

  fill(250, 203, 22);
  textFont('Helvetica');
  textSize(150);
  text('U', letterX, letterY);


  noStroke();
  fill(252, 186, 3);
  x = 70;

  for (let i = 0; i < num / 3; i++) {
    rect(x, 400, 10, 475);
    x += 20;
  }


}

function drawLaJolla() {

  image(imageList[2], xPos, yPos);

  //draw polka dots 
  for (var i = 0; i <= 10; i++) {
    noStroke();
    fill(255, 138, 177);
    ellipse(50, i * 40, polka);
    ellipse(100, i * 40, polka);
    ellipse(150, i * 40, polka);
    ellipse(200, i * 40, polka);
    ellipse(250, i * 40, polka);
    ellipse(300, i * 40, polka);
    ellipse(350, i * 40, polka);
    ellipse(400, i * 40, polka);
    ellipse(450, i * 40, polka);
    ellipse(500, i * 40, polka);
    ellipse(550, i * 40, polka);
  }

}


function drawK38() {
  image(imageList[3], xPos, yPos);

  fill(255, 138, 177);
  textFont('Helvetica');
  textSize(150);
  text('M', letterX, letterY);
}

function drawBecky() {

  image(imageList[4], xPos, yPos);

  noStroke();
  fill(186, 232, 255);
  y = 70;

  for (let i = 0; i < num / 3; i++) {
    rect(0, y, 475, 10);
    y += 20;
  }

  fill(252, 186, 3);
  textFont('Helvetica');
  textSize(150);
  text('E', letterX, letterY);

}

function drawNewYork() {

  //draw polka dots 
  for (var i = 0; i <= 10; i++) {
    noStroke();
    fill(188, 232, 125);
    ellipse((i * 40 + 650), 100, polka);
    ellipse((i * 40 + 650), 150, polka);
    ellipse((i * 40 + 650), 200, polka);
    ellipse((i * 40 + 650), 250, polka);
    ellipse((i * 40 + 650), 300, polka);
    ellipse((i * 40 + 650), 350, polka);
    ellipse((i * 40 + 650), 400, polka);
    ellipse((i * 40 + 650), 450, polka);
    ellipse((i * 40 + 650), 500, polka);
    ellipse((i * 40 + 650), 550, polka);
    ellipse((i * 40 + 650), 600, polka);

  }

  image(imageList[5], xPos, yPos);
  
  fill(186, 232, 255);
  textFont('Helvetica');
  textSize(150);
  text('R', letterX, letterY);



}