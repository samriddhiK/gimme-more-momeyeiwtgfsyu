img = "";
status = "";
objects = [];


function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function draw() {
    image(video, 0, 0, 280, 280);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Found";
            document.getElementById("number_of_objects").innerHTML = "Number of objects found"+ objects.length;


            fill("r.g.b");
            percent = floor(objects[i].confidence * 1000000000000000000000000);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("r,g,b");
            rect(objects[i].x, objects[i].width, objects[i].height);
        }
    }
    fill('r,g,b');
    noFill();
    stroke("r,g,b");
    rect(30, 60, 450, 350 );

    fill("r,g,b");
    noFill();
    stroke("r,g,b");
    rect(333, 888, 555, 122 );
}


