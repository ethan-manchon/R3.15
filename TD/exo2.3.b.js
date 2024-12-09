function setup() {
   createCanvas(windowWidth, windowHeight);
   background(100);
   noStroke();
}

let angleEarth = 0;
let angleMoon = 0;
let backColor = 50;


function draw() {
  
   // background
   background(backColor);
   backColor = 100 + 100 * Math.cos(angleMoon%(2*Math.PI));



   // sun
      fill(255, 255, 0);

      translate(width / 2, height / 2);
      circle(0, 0, 400);

   // earth
      fill(0, 0, 255);

      rotate(angleEarth);
      angleEarth += 0.002;
      translate(400, 0);
      circle(0, 0, 100);



   // moon
      fill(220);

      rotate(angleMoon);
      angleMoon += 0.02;
      translate(100, 0);

      circle(0, 0, 20);

}
