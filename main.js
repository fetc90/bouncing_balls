// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = innerWidth;
var height = canvas.height = innerHeight;

// function to generate random number

function random(min, max){
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}