function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10, 100);

    canvas = createCanvas(800,400);
    canvas.position(620,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background("#7af0c1");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        console.log("rightwrist_x = " + results[0].pose.rightWrist.x + "rightwrist_y" + results[0].pose.rightWrist.y);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x + "leftwrist_y" + results[0].pose.leftWrist.y);
    }
}