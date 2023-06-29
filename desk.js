img = "";
objects = [];
status = "";
objectDetector = "";

function preload(){
    img = loadImage('desk_img.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(520,270);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, got_result);
}

function got_result(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
  if(status != undefined){
  image(img,0,0,640,420);

for(var i = 0; i<objects.length; i++){
    document.getElementById("status").innerHTML = "Status: Objects Detected";
    fill(255,0,0);
    percent = floor(objects[i].confidence*100);
    text(objects[i].label + "  " + percent + "%", 100, 200 );
    noFill();
    stroke(255,0,0);
    rect(120, 100, 400, 250);
    document.getElementById("detected_objects").innerHTML = "Cocossd has detected 1 image.";
    }
}
}