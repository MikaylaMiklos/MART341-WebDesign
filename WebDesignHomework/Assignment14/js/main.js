var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//circle
ctx.fillStyle = "rgb(209, 178, 80)";
ctx.beginPath();
ctx.arc(684, 180, 40, 0, 2 * Math.PI);
ctx.fill();

//oval
ctx.strokeStyle = "rgb(209, 178, 80)";
ctx.beginPath();
ctx.ellipse(684, 160, 70, 100, 0, 0, 2 * Math.PI);
ctx.stroke();


document.getElementById('myB').onmouseover = function() {
    this.style.color = 'rgb(201, 176, 147)';
  };
