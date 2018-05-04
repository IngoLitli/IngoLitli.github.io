var version = 5;
var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");
var x = 50;

console.log(version);
//ctx.lineTo(200, d.getSeconds()*10);
//ctx.stroke();


setTimeout(showTime(), 20);

function showTime() {
    var d = new Date();
    var seconds = d.getSeconds();
    ctx.moveTo(seconds*10, 0);
    ctx.lineTo(seconds*10, seconds*10);
    ctx.stroke();
    console.log(d.getSeconds());
}