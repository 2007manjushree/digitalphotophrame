function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw(){
    rect(20, 20, 460, 460);
    rect(25, 25, 450, 450);
    rect(30, 30, 440, 440);
    rect(35, 35, 430, 430);
    rect(40, 40, 420, 420);
    rect(45, 45, 410, 410);
    rect(50, 50, 400, 400);
    rect(55, 55, 390, 390);
    circle(70, 70, 20);
    circle(95, 70, 20);
    circle(120, 70, 20);
    circle(145, 70, 20);
    circle(170, 70, 20);
    circle(195, 70, 20);
    circle(220, 70, 20);
    circle(245, 70, 20);
    circle(270, 70, 20);
    circle(295, 70, 20);
    circle(320, 70, 20);
    circle(345, 70, 20);
    circle(370, 70, 20);
    circle(395, 70, 20);
    circle(420, 70, 20);

    circle(70, 95, 20);
    circle(70, 120, 20);
    circle(70, 145, 20);
    circle(70, 170, 20);
    circle(70, 195, 20);
    circle(70, 220, 20);
    circle(70, 245, 20);
    circle(70, 270, 20);
    circle(70, 295, 20);
    circle(70, 320, 20);
    circle(70, 345, 20);
    circle(70, 370, 20);
    circle(70, 395, 20);
    circle(70, 420, 20);

    circle(70, 420, 20);
    circle(95, 420, 20);
    circle(120, 420, 20);
    circle(145, 420, 20);
    circle(170, 420, 20);
    circle(195, 420, 20);
    circle(220, 420, 20);
    circle(245, 420, 20);
    circle(270, 420, 20);
    circle(295, 420, 20);
    circle(320, 420, 20);
    circle(345, 420, 20);
    circle(370, 420, 20);
    circle(395, 420, 20);
    circle(420, 420, 20);

    circle(420, 95, 20);
    circle(420, 120, 20);
    circle(420, 145, 20);
    circle(420, 170, 20);
    circle(420, 195, 20);
    circle(420, 220, 20);
    circle(420, 245, 20);
    circle(420, 270, 20);
    circle(420, 295, 20);
    circle(420, 320, 20);
    circle(420, 345, 20);
    circle(420, 370, 20);
    circle(420, 395, 20);


    image(video, 100, 100, 300, 300);
}

function takesnapshot(){
    save('bdaypicture.png');
}