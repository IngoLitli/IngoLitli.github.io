var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");
var x = 50;

ctx.moveTo(0, 0);

for (var i = 0; i <= 200; i++){
    console.log(i);
    ctx.lineTo(i, i);
    ctx.stroke();
}