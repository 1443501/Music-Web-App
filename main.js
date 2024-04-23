song1="";
song2="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";
score_l=0;
score_r=0;
song1_status="";
song2_status="";

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
    fill("red");
    stroke("white");
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
    if(score_l>0.2)
{
   circle(leftWristX,leftWristY,20);
   if(song1_status==true){
      song1.stop();
      song2.play();
      document.getElementById("song_name").innerHTML= "Song 1 is playing.";
      
   }

   if(score_r>0.2){
      cicle(rightWristX,rightWristY,20);
      if(song2_status==true){
         song1.play();
      song2.stop();
   document.getElementById("song_name").innerHTML="Song 2 is playing.";
      }
   }
  
}

    
 }
function gotPoses(results){
   if(results.length > 0){
      console.log(results);
      score_l=results[0].pose.leftWrist[9].score;

      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;
      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;
      console.log("rightWristx=" + rightWristX + "rightWristY= " + rightWristY);
      console.log("leftWristX="+ leftWristX + "leftWristY" + leftWristY);
   }
}
 