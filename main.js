var mouseEvent="empty"
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="blue"
width=10
canvas.addEventListener("mousedown",mymouseDown)
function mymouseDown(e)
{
    mouseEvent="mousedown"
}

canvas.addEventListener("mouseleave",mymouseLeave)
function mymouseLeave(e)
{
    mouseEvent="mouseleave"
}

canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e)
{
    mouseEvent="mouseup"
}

canvas.addEventListener("mousemove",mymouseMove)
function mymouseMove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke()
    }
    last_position_of_x=currentx;
    last_position_of_y=currenty;
}
