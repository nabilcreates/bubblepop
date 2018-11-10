var bubbles = [];
var newb, threshold, brushsize, pop;

var score = 0

function preload() {
    pop = loadSound('./popsound.mp3')
}

function setup() {

    createCanvas(500, 500)

    for (var i = 0; i < 20; i++) {
        newb = new Bubble({
            x: random(width),
            y: random(height),
            s: 20
        })
        bubbles.push(newb.rtno())
        newb.draw()
    }

    brushsize = 10

    pop.setVolume(0.3)

}

function draw() {
    background(0)

    text(score, 10, 30);

    ellipse(mouseX, mouseY, brushsize)

    for (var i = 0; i < bubbles.length; i++) {

        bubbles[i].x += random(-1, 1)
        bubbles[i].y += random(-1, 1)
        ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].s)

        if (dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y) <= brushsize) {

            score++

            console.log('hit')
            pop.play()
            spawn(i)

        }

    }

}

function spawn(index) {
    bubbles[index].x = random(width)
    bubbles[index].y = random(height)
}

function die(index) {
    bubbles[index].x = -2000;
    bubbles[index].y = -2000;
}