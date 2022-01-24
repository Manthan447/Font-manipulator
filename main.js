nose_x = 0
nose_y = 0
Leftwrist = 0
Rightwrist = 0
Difference = 0

function preload(){

}

function setup(){
    Video = createCapture(VIDEO)
    Video.size(400 , 400)
    canvas = createCanvas(500 , 500)
    canvas.position(650, 160)
    posenet = ml5.poseNet(Video , modelloaded)
    posenet.on("pose" , gotresults)
}

function draw() {
    background("grey")
     document.getElementById("sides").innerHTML = Difference;
     textSize(Difference);
     fill("pink");
     text('Manthan' , 50, 400);
    }

function modelloaded(){
    console.log("The Model is initialized")
}

function gotresults(results){
    if(results.length > 0){
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        Leftwrist = results[0].pose.leftWrist.x
        Rightwrist = results[0].pose.rightWrist.x
        Difference = Leftwrist - Rightwrist
        Difference = floor(Difference)    
     }
}