canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
Nasapics = ["Nasapic1.jpg", "Nasapic2.jpg", "Nasapic3.jpg"];
randomnumber = Math.floor(Math.random()*3);
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;
background_image = Nasapics[randomnumber];
console.log("bgimage" + background_image);
rover_image = "rover.png";

function Add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadbackground;
    background_img_tag.src = background_image;
    rover_img_tag = new Image();
    rover_img_tag.onload = uploadrover;
    rover_img_tag.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
}

function up() {
    if (rover_y > 10) {
        rover_y = rover_y - 10;
        console.log(rover_x + "," + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function down() {
    if (rover_y < 590) {
        rover_y = rover_y + 10;
        console.log(rover_x + "," + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function left() {
    if (rover_x > 10) {
        rover_x = rover_x - 10;
        console.log(rover_x + "," + rover_y);
        uploadbackground();
        uploadrover();

    }
}
function right() {
    if (rover_x <= 790) {
        rover_x = rover_x + 10;
        console.log(rover_x + "," + rover_y);
        uploadbackground();
        uploadrover();

    }
}