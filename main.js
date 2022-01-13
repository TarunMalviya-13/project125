noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,500);
    canvas.position(660,80);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function modelLoaded(){
    console.log("poseNet model is initialized");

}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML="width height of a squre will be "+difference+"px";
    fill("red");
    //stroke('yellow');
    //quare(noseX, noseY, difference);
    textSize(difference);
    text("Tarun",50,400);
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristx= "+leftwristX+" rightwristx= "+rightwristX+" difference"+difference);

    }
}