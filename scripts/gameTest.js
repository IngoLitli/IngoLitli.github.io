var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");
var x = 50;
if (x<=500){
    x++;
}
ctx.moveTo(0, 0);
ctx.lineTo(x, 100);
ctx.stroke();