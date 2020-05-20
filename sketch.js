let w = 10;
let angle = 0;
let maxD;
let ma;
let zoom = 500;
let zoomSens = 0.1;

function setup() {
    createCanvas(650, 650, WEBGL);
    maxD = dist(0, 0, 200, 200);
	ma = atan(cos(QUARTER_PI));
}

function mouseWheel(event) {
    zoom += zoomSens * event.delta;
    return false;
}

function draw() {
    background(255);
    ortho(-zoom, zoom, zoom, -zoom, 0, 5000);
	if(mouseIsPressed){
		background(50);
		rotateX(-mouseY * 0.01);
		rotateY(-mouseX * 0.01);
	} else {
		rotateX(frameCount*(-ma)*0.01);
		rotateY(frameCount*(-QUARTER_PI)*0.01);
	}

    normalMaterial();
    for (let i = 0; i < height; i += w) {
        for (let j = 0; j < width; j += w) {
            push();
            let d = dist(j, i, width / 2, height / 2);
            let offset = map(d, 1, maxD, -10, 10);
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 100, 500));
            translate(j - width / 2, 0, i - height / 2);
            box(w, h, w);
            pop();
        }
    }
    angle += 0.1;

}
