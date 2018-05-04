var version = 4;
var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");
var x = 50;

ctx.moveTo(0, 0);
console.log(version);
ctx.lineTo(200, d.getSeconds()*10);
ctx.stroke();


setTimeout(showTime(), 20);

function showTime() {
    var d = new Date();
    var seconds = d.getSeconds()
    ctx.lineTo(200, seconds*10);
    ctx.stroke();
    console.log(d.getSeconds());
}