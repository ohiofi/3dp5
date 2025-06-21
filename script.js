/*global abs,updateCamera,checkPlayerControls,requestPointerLock,scale,loadFont,setAttributes,PI,round,camera,sphere,torus,cone,cylinder,plane,rotateX,rotateY,rotateZ,frameCount,normalMaterial,translate,angleMode,background,beginShape,box,CENTER,color,cos,createCanvas,curveVertex,DEGREES,displayHeight,displayWidth,dist,DOWN_ARROW,ellipse,endShape,fill,floor,frameRate,height,image,keyCode,keyIsDown,LEFT,LEFT_ARROW,line,loadImage,loadSound,mouseIsPressed,mouseX,mouseY,noFill,noStroke,p5,pointLight,pop,push,RADIANS,random,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,shuffle,sin,stroke,strokeWeight,text,textAlign,textFont,textSize,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowWidth*/
let boxArray = [];
let scoreDisplay = document.getElementById("scoreDiv");
let score = 0;
let myFont, cam;
let player = {
    x: 0,
    y: 100,
    z: 0,
    xRotation: 0,
    yRotation: 0,
};

function preload() {
    myFont = loadFont("../PressStart2P.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 20, WEBGL);
    setAttributes("antialias", true);
    //normalMaterial();
    // add some boxes to boxArray
}

function draw() {
    background(220);
    updateCamera();
    checkPlayerControls();
    fill("#ED225D");
    print3DText("p5js", 500, 100, 0, PI * 0.5);
    fill(0);
    print3DText("x+", 1000, 10, 0, PI * 0.5);
    print3DText("z+", 0, 10, 1000, 0);

    drawFloor();
    drawBoxes();
}

function drawBoxes() {
    // let boxSize = ??
    // for loop
    push();
    translate(0, 10, 600);
    fill("red");
    box(20);
    pop();
    // check for collisions
}

function drawFloor() {
    let tileSize = 100;
    // tile floor
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            push();
            translate(
                row * tileSize + tileSize / 2,
                0,
                col * tileSize + tileSize / 2
            );
            fill(255);
            stroke(0);
            box(tileSize, 0, tileSize);
            pop();
        }
    }
}
function print3DText(mytext, x, y, z, yRotation) {
    push();
    textAlign(CENTER);

    textFont(myFont);
    textSize(36);
    translate(x, y, z);
    scale(1, -1); // text is inverted without this line!
    rotateY(yRotation);
    text(mytext, 0, 0);
    pop();
}

function mouseClicked() {
    requestPointerLock();
    console.log(requestPointerLock());
}
