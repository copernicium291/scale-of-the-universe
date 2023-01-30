let loader;let imgnames = [];let info = [];
let tsize = [];let logsize = [];let sizeman = [];let sizexp = [];let imgs = [];
let scale = 0.5;let scalev = 0;let r = [];let theta = [];
function preload() {
  loader = loadStrings('data/info.txt');
  for (let i = 0; i < loader.length; i++) {
    console.log("e");
    if (loader[i].charAt(0) != '\t') {
      let j = 0; let stest = "";
      while (loader[i].charAt(j) != '\t') {stest = stest+loader[i].charAt(j);j++;}
      imgnames.push(stest);
      while (loader[i].charAt(j) == '\t') {j++;}
      stest = "";
      while (loader[i].charAt(j) != '\t') {stest = stest+loader[i].charAt(j);j++;}
      tsize.push(stest);
      while (loader[i].charAt(j) == '\t') {j++;}
      stest = "";
      while (j < loader[i].length) {stest = stest+loader[i].charAt(j);}
      info.push(stest);
    }
  }
  for (let i = 0; i < imgnames.length; i++) {
    imgs[i] = loadImage("images/"+imgnames[i]+".png");
  }
}

function setup() {
  createCanvas(1024,512);
  for (let i = 0; i < tsize.length; i++) {
    sizeman.push(float(tsize[i].charAt(0)+tsize[i].charAt(1)+tsize[i].charAt(2)+tsize[i].charAt(3)+tsize[i].charAt(4)+tsize[i].charAt(5)+tsize[i].charAt(6)+tsize[i].charAt(7)));
    let stest = "";
    for (let j = 9; j < tsize[i].length; j++) {stest = stest+tsize[i].charAt(j);}
    sizexp.push(float(stest));
    logsize.push(sizexp[i]+(log(sizeman[i])/log(10)));
    theta.push(random(TWO_PI));r = append(r,1);
  }
}


function draw() {
  background(200);
  let scaleman = pow(10,scale-floor(scale));
  noFill();stroke(127,127,127);
  for (let circ = -3; circ < 2; circ++) {
    strokeWeight(4*pow(10,circ)/scaleman);circle(width/2,height/2,256*pow(10,circ)/scaleman)
  }
  //console.log(logsize.length);
  for (let i = 0; i < logsize.length; i++) {
    let dif = scale-logsize[i];
    fill(255,255,0);
    //console.log(dif);
    if (dif == constrain(dif,-2,4)) {
      //console.log("e");
      circle(width+cos(theta[i])*r[i]*256*pow(10,diff),height+sin(theta[i])*r[i]*256*pow(10,diff),256*pow(10,diff));
    }
  }
  scale += scalev;
  scalev *= 0.9
}

function mouseWheel() {
  scalev += event.delta*0.0001;
}
