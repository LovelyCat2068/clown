nose_x = 02;
nose_y = 02;
eyel = 02;
eyer = 02;

function preload(){
    sausage = loadImage("https://i.postimg.cc/T20T3tq3/gagagaga.png");
    nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', pumpkinJuice);
}

function pumpkinJuice(results){

    if(results.length > 0){
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        eyel = results[0].pose.leftEye.x-97;
        eyer = results[0].pose.leftEye.y-20;
        console.log("x - nose      " + nose_x + "    y - nose    " + nose_y);
        console.log(results);
    }

}

function modelloaded(){
    console.log('Fizzing Wheezbees');
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(nose_x, nose_y, 20);
    image(nose, nose_x - 25, nose_y - 25, 45, 45);
    image(sausage, eyel, eyer, 150, 67);
}

function take_picture(){
    save("IamAclown.jpeg");
}