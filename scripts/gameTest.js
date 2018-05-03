var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");
var x = 50;
for (var i = 0; i <= 100; i++){
    x = i;
    ctx.lineTo(x, 100);
    ctx.stroke();
}
ctx.moveTo(0, 0);
