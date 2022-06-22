canvas=document.getElementById("myCanvas");
var previousx,previousy;
ctx=canvas.getContext("2d");
color="blue";
width=2;
mouseevent="empty";
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    color=document.getElementById("color_input").value;
    width=document.getElementById("line_width").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(previousx,previousy);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    previousx=currentx; 
    previousy=currenty;
}
function clear_drawings(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}