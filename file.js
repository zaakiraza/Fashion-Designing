let slider1 = document.getElementById("slider_one");
let slider2 = document.getElementById("slider_two");
let slider3 = document.getElementById("slider_three");
let sec_two = document.getElementById("sec_two");
let pageURL = window.location.href;
let lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

if (lastURLSegment == 'index.html') {
  if ((sec_two.style.backgroundImage = "s1.jpeg")) {
    slider1.style.display = "block";
    slider2.style.display = "none";
    slider3.style.display = "none";
  }
  if ((sec_two.style.backgroundImage = "url(s2.jpg)")) {
    slider1.style.display = "none";
    slider2.style.display = "block";
    slider3.style.display = "none";
  }
  if ((sec_two.style.backgroundImage = "url(s3.jpeg)")) {
    slider1.style.display = "none";
    slider2.style.display = "none";
    slider3.style.display = "block";
  }
}

let an = document.getElementById("an");
let an1 = document.getElementById("an1");
let an2 = document.getElementById("an2");
let an3 = document.getElementById("an3");
function fun() {
  an.style.display = "inline";
}
function fun1() {
  an.style.display = "none";
}
function fun5() {
  an1.style.display = "inline";
}
function fun6() {
  an1.style.display = "none";
}
function fun7() {
  an2.style.display = "inline";
}
function fun8() {
  an2.style.display = "none";
}
function fun9() {
  an3.style.display = "inline";
}
function fun10() {
  an3.style.display = "none";
}


let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let hd1 = document.getElementById("hd1");
let hd2 = document.getElementById("hd2");
let hd3 = document.getElementById("hd3");
function fun2() {
  r1.style.display = "flex";
  r2.style.display = "none";
  r3.style.display = "none";
}
function fun3() {
  r1.style.display = "none";
  r2.style.display = "flex";
  r3.style.display = "none";
}
function fun4() {
  r1.style.display = "none";
  r2.style.display = "none";
  r3.style.display = "flex";
}

let animate = document.getElementById("Icons_Animate");
let fs = document.getElementById("fst_11");
function view() {
  animate.style.display = "block";
  animate.style.animation = "front 0.3s forwards";
  document.getElementById('sec_one').style.opacity = "0.4";
  document.getElementById('sec_two').style.opacity = "0.4";
  document.getElementById('sec_three').style.opacity = "0.4";
  document.getElementById('sec_four').style.opacity = "0.4";
  document.getElementById('sec_five').style.opacity = "0.4";
  document.getElementById('sec_six').style.opacity = "0.4";
}
function closeMenu() {
  animate.style.animation = "front1 1s forwards";
  animate.style.display = "none";
  document.getElementById('sec_one').style.opacity = "1";
  document.getElementById('sec_two').style.opacity = "1";
  document.getElementById('sec_three').style.opacity = "1";
  document.getElementById('sec_four').style.opacity = "1";
  document.getElementById('sec_five').style.opacity = "1";
  document.getElementById('sec_six').style.opacity = "1";
}