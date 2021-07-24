canvas=document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d");
color="#00ff00";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(300,300,20,0,2 *Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;
circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y) {
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,20,0,2 *Math.PI);
ctx.stroke();
}



