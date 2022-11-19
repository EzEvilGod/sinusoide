let w = 500
let h = 400
let ampiezza = 100
let frequenza = 2
let fase = 0
let angle = 0
let increment = 0.01
let x0 = 0
let y0 = h/2
let x1 = w
let y1 = h/2


function setup() {
    createCanvas(w,h)
    background(220)
    line(x0,y0,x1,y1)
    frameRate(100)
}


function draw() {
    let x = map(angle,0,2*PI, 0,500)
    let y = ampiezza * sin(2 * PI * frequenza * angle + fase)
    stroke(0,0,255)
    strokeWeight(3)
    point(x, y+200)
    angle += increment
}
