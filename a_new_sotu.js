let loader;let info = [];
let imgnames = ["quantum foam","planck length","spin foam","omg particle","electron","lhc proton","top quark","weak force","tauon","bottom quark","charm quark","neutron","proton","strange quark","alpha particle","down quark","up quark","deuteron","carbon nucleus","oxygen nucleus","lithium-11","sulfur nucleus","iron nucleus","muon","tin nucleus","lead nucleus","uranium nucleus","oganesson-294","muonic hydrogen","electroncompton","solar neutrino","helium atom","oxygen atom","hydrogen atom","carbon atom","argon atom","positronium","silicon atom","lithium atom","silver atom","water molecule","magnesium atom","o2 molecule","n2 molecule","h electron","gold atom","calcium atom","potassium atom","caesium atom","francium atom","buckyball","glucose","phospholipid","porcine","ribosome","flu","hiv","sarscov2","rabies virus","melanosome","clay particle","lysosome","mitochondrion","yeast","cell nucleus","chloroplast","redbloodcell","mist","whitebloodcell","heavy neutrino","ovum","highdrogen","paramecium","sandgrain","amoeba proteus","cosmic neutrino","chaos amoeba","t magnifica","ipk","golfball","ball","basketball","human","human genome","football field","washington","giza","eiffel","apophis","itokawa","cn tower","burj khalifa","psr b0943+10","lhc","rx j1856","deimos","eros","lich","manhattan","phobos","crab pulsar","ganymed","cygnus x1","nereid","hyperionmoon","mimas","proteus","enceladus","pallas","vesta","ceres","cuba","ariel","umbriel","charon","iapetus","oberon","titania","haumea","eris","pluto","greenland","triton","europa","moon","io","united state","callisto","mercury","titan","ganymede","mars","sirius b","venus","earth","procyon b","neptune","uranus","eblm j0555-57ab","jupiter","trappist-1","proxima","hatp67b","moonorbit","tau ceti","toliman","sun","rigil kentaurus","sirius a","fomalhaut","altair","procyon a","algol a","vega","algol b","castor ba","regulus aa","bellatrix","pollux","achernar a","human genomes","capella aa","sag astar","arcturus","polaris aa","aldebaran","canopus","rigel","gacrux","deneb","earthorbit","pistol star","antares a","vv cephei a","betelgeuse","mu cephei","m31star","v602 carinae","hr 5171aa","vy canis major","woh g64","uy scuti","hr 5171a","stephenson 2-18","neptuneorbit","kuiper","m87star","sednaorbit","catseye nebula","ton 618","phoenix astar","stingray","homunculus","hourglass","ant nebula","ring nebula","dumbbell nebula","oort","helix nebula","ngc 2169","m85-hcc1","crab","orion","m22","eagle nebula","m13","omega cen","segue 2","ltd","hcbgrbod","comoving","hypersphere","all dna"];
let tsize = [];let logsize = [];let sizeman = [];let sizexp = [];let imgs = [];
let scale = 0.5;let scalev = 0;let r = [];let theta = [];
function preload() {
  loader = loadStrings('data/info.txt');
  for (let i = 0; i < imgnames.length; i++) {
    imgs[i] = loadImage("images/"+imgnames[i]+".png");
  }
}

function setup() {
  createCanvas(1024,512);
  for (let i = 0; i < loader.length; i++) {
    console.log("e");
    if (loader[i].charAt(0) != '\t') {
      let j = 0; let stest = "";
      while (loader[i].charAt(j) != '\t') {stest = stest+loader[i].charAt(j);j++;}
      //imgnames.push(stest);
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
