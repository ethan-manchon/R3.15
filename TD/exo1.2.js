function setup() {
   createCanvas(windowWidth, windowHeight);
   background(200, 200, 0);
}


function draw() {
   // stroke(100, 0, 100);
   // strokeWeight(4);
   // fill(200, 200, 0);
   // // Nofill();
   // let w = windowWidth / 2;
   // let h = windowHeight / 2;
   // // circle(w, h, 100);
   // // rect(w - 100, h - 75, 200, 150);
   // ellipse(w, h, 60, 90) 
   // stroke(255, 0, 0);
   // strokeWeight(1);
   // line(0, h, windowWidth, h);
   // line(w, 0, w, w);
   
}
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(240);
   stroke(0);
   strokeWeight(1);
   fill(255, 0, 0);
   rect(86, 90, 28, 100);
   fill(255)
   line(72, 230, 85, 190);
   line(128, 230, 113, 190);
   line(46, 102, 85, 120);
   line(46, 102, 113, 120);
   circle(46, 82, 40);
   circle(100, 70, 60);
   ellipse(81, 70, 16, 32);
   ellipse(119, 70, 16, 32);
   fill(100, 100, 255);
   ellipse(81, 70, 8, 16);
   ellipse(119, 70, 8, 16);
}
function mousePressed() {
   console.log("{x: " + mouseX + ", y:" + mouseY + "}");
}
