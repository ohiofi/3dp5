/*global camera, player, cos, sin,movedX,movedY,abs,requestPointerLock,scale,loadFont,setAttributes,PI,round,camera,sphere,torus,cone,cylinder,plane,rotateX,rotateY,rotateZ,frameCount,normalMaterial,translate,angleMode,background,beginShape,box,CENTER,color,cos,createCanvas,curveVertex,DEGREES,displayHeight,displayWidth,dist,DOWN_ARROW,ellipse,endShape,fill,floor,frameRate,height,image,keyCode,keyIsDown,LEFT,LEFT_ARROW,line,loadImage,loadSound,mouseIsPressed,mouseX,mouseY,noFill,noStroke,p5,pointLight,pop,push,RADIANS,random,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,shuffle,sin,stroke,strokeWeight,text,textAlign,textFont,textSize,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowWidth*/
function updateCamera(){
  camera(
    player.x,
    player.y,
    player.z,
    player.x + cos(player.yRotation),
    player.y + sin(player.xRotation),
    player.z + sin(player.yRotation),
    0,
    -1,
    0
  );
}
function checkPlayerControls() {
  let moveSpeed = 5;
  let tiltSpeed = 0.0007
  // controls
  // tilt right
  player.xRotation += -movedY * tiltSpeed
  player.yRotation += -movedX * tiltSpeed
  
  
  // right
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    requestPointerLock();
    player.x += cos(player.yRotation - PI / 2) * moveSpeed;
    player.z += sin(player.yRotation - PI / 2) * moveSpeed;
  }
  
  // left
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    requestPointerLock();
    player.x += cos(player.yRotation + PI / 2) * moveSpeed;
    player.z += sin(player.yRotation + PI / 2) * moveSpeed;
  }
  // reverse
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    requestPointerLock();
    player.x -= cos(player.yRotation) * moveSpeed;
    player.z -= sin(player.yRotation) * moveSpeed;
  }
  // forward
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    requestPointerLock();
    player.x = player.x + cos(player.yRotation) * moveSpeed;
    player.z = player.z + sin(player.yRotation) * moveSpeed;
  }
}
