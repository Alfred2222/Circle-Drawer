var mouse_event="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var last_position_x,last_position_y;

var color="blue";
width_of_line=1;

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
mouse_event="mouseDown"
color=document.getElementById("color").value;
width_of_line=document.getElementById("width").value;
}

canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){
mouse_event="mouseUp"
}

canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
mouse_event="mouseLeave"
}

canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
current_position_mousex=e.clientX-canvas.offsetLeft
current_position_mousey=e.clientY-canvas.offsetTop;

if(mouse_event=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last position of x and y co-ordinates=")
    console.log("x="+last_position_x+" y="+last_position_y)
    ctx.moveTo(last_position_x,last_position_y)


    console.log("current position of x and y co-ordinates=")
    console.log("x="+current_position_mousex+" y="+current_position_mousey)
    ctx.lineTo(current_position_mousex,current_position_mousey);
    ctx.stroke();
}
last_position_x=current_position_mousex;
last_position_y=current_position_mousey;
}
