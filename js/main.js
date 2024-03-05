window.onscroll = function() {gallery();
  proj1()
  proj2()
};

var elements = document.getElementsByClassName("gallery-pic");
var pop;

function proj1() {
  var element = document.getElementById("proj1");
  if (document.body.scrollTop > (window.innerHeight * 0.5) || document.documentElement.scrollTop > (window.innerHeight * 0.5 )) {
    for(i=0;i<=7;i++){
        element.style.opacity = "1";
    }
  }
}

function proj2() {
  var element = document.getElementById("proj2");
  if (document.body.scrollTop > (window.innerHeight * 1.5) || document.documentElement.scrollTop > (window.innerHeight * 1.5 )) {
    for(i=0;i<=7;i++){
        element.style.opacity = "1";
    }
  }
}

function gallery() {
  if (document.body.scrollTop > (window.innerHeight * 2.4) || document.documentElement.scrollTop > (window.innerHeight * 2.4)) {
    for(i=0;i<=7;i++){
        elements[i].style.opacity = "1";
    }
  }
}

function galleryonhover(pic){
  for(i = 0; i <=7; i++){
    elements[i].style.width = '100%';
    elements[i].style.height = '100%';
    elements[i].style.margin = '0%';
    elements[i].style.marginLeft = '0%';
    elements[i].style.zIndex = '0';  
  }
  elements[pic].style.margin = '-20%';
  elements[pic].style.marginLeft = '-10%';
  elements[pic].style.zIndex = '99';
  elements[pic].style.width = '120%';
  elements[pic].style.height = '120%';
}

function gallerymouseleave(){
  for(i = 0; i <=7; i++){
    elements[i].style.width = '100%';
    elements[i].style.height = '100%';
    elements[i].style.margin = '0%';
    elements[i].style.marginLeft = '0%';
  }
}

function showpopup(n){
  let closebehind = document.getElementById('closebehind');
  pop = document.getElementsByClassName('popup')[n];
  pop.style.display = 'flex';
  closebehind.style.display = 'inline'
}

function closepopup(){
  let closebehind = document.getElementById('closebehind');
  pop.style.display = 'none';
  closebehind.style.display = 'none'

}
const canvas = document.getElementById("canvas");
//depois fazer uma função que pega a resolução da tela
//width_screen = pegar res da tela
//height_screen = pegar res da tela

const ctx = canvas.getContext("2d");

function drawcube(x,y,fill,size){
  ctx.fillStyle = fill;
  ctx.fillRect(x, y, 1+size, 1+size);
}

var xx = [];
var yy = [];
var reverse_x = [];
var reverse_y = [];
var speed_x = [];
var speed_y = [];
var fillcolor = [];
var size = [];
var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
canvas.width = vw;
canvas.height = vh;
for(let i = 0;i<149;i++){
  xx[i] = Math.random() * vw;
  yy[i] = Math.random() * vh;  
  reverse_x[i] = Math.random() >= 0.5;
  reverse_y[i] = Math.random() >= 0.5;
  speed_x[i] = Math.random() * 0.2;
  speed_y[i] = Math.random()* 0.2;
  size[i] = Math.random() * 2;
}

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0;i<149;i++){
      fillcolor[i] = Math.random();

      if (fillcolor[i] > 0.93){
        window.onload = drawcube(xx[i],yy[i], "steelblue", size[i]);
      }
      else{
        window.onload = drawcube(xx[i],yy[i], "white",size[i]);
      }

      if (yy[i] > vh){
        reverse_y[i] = true;
      }
      if (yy[i] < 0){
        reverse_y[i] = false;
      }
      if (reverse_y[i] == false){
        yy[i] = yy[i] + (speed_y[i] + 0.2);
      }
      else{
        yy[i] = yy[i] - (speed_y[i] + 0.2);
      }

      if (xx[i] > vw){
        reverse_x[i] = true;
      }
      if (xx[i] < 0){
        reverse_x[i] = false;
      }
      if (reverse_x[i] == false){
        xx[i] = xx[i] + (speed_x[i] + 0.2);
      }
      else{
        xx[i] = xx[i] - (speed_x[i] + 0.2);
      }
  }
}, 50);

