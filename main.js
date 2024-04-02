song1="";
song2="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";

 function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
 }

 function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

 }
 function modelLoaded(){
   console.log("posenet is initialized");
 }

 function draw(){
    image(video, 0, 0, 600, 500);
 }
function gotPoses(results){
   if(results.length > 0){
      console.log(results);

      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;
      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;
      console.log("rightWristx=" + rightWristX + "rightWristY= " + rightWristY);
      console.log("leftWristX="+ leftWristX + "leftWristY" + leftWristY);
   }
}
 