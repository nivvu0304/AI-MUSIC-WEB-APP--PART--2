song_1 = "";
song_2 = "";

function preload()
{
    song_1 = loadSound("Believer.mp3");
    song_2 = loadSound("Faded.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}