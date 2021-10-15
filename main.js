nose_x = 02;
nose_y = 02;

function preload(){
    treacleTart = loadImage("nose.png");
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
        console.log("x - nose      " + nose_x + "    y - nose    " + nose_y);
        console.log(results);
    }

}

function modelloaded(){
    console.log('Fizzing Wheezbees');
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_picture(){
    save("IamAclown.jpeg");
}
