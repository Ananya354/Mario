function preload() {
	world_start = loadSound("world_start.wav");
	coin_collect= loadSound("coin.wav");
	kills_enemies=loadSound("kick.wav");
	mario_ded= loadSound("mariodie.wav");
	game_over= loadSound("gameover.wav");
	mario_jump= loadSound("jump.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
canvas = createCanvas(1240,336);
canvas.parent("canvas")
instializeInSetup(mario);
video=createCapture(VIDEO);
video.size(500, 430);
video.parent("game_console");
posenet=ml5.poseNet(video, modelloaded);
posenet.on('pose',gotResults);
}

function gotResults(poses){
if (poses.length>0){
console.log(poses);
nose_x=poses[0].pose.nose.x;
nose_y=poses[0].pose.nose.y;
console.log(nose_x, nose_y);
}
}

function modelloaded(){
console.log("You model is successfully loaded!!!!");
}

function draw() {
	game()
}








