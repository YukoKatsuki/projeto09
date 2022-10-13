var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
var currentpositionOfTouchX, currentPositionOfTouchY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    canvas.addEventListener("mousedown", myMouseDown);
    
    function myMouseDown(e)
    {
      
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {

         currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
         currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }

var width = screen.width;
 var newWidth = screen.width - 70;
  var newHeigth = screen.height - 300;
   
  if(width < 992)
  {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
  }

  canvas.addEventListener("touchstart", myTouchStart);

  function myTouchStart (e)
  {
    console.log("myTouchStart");
    
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
  }

  
  canvas.addEventListener("touchmove", myTouchMove);

    function myTouchMove(e)
 
  {
    currentpositionOfTouchX = e.touches[0].clientX - canvas,offsetLeft;
    currentpositionOfTouchY = e.touches[0].clientY - canvas,offsetLeft;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    ctx.lineTo(currentpositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentpositionOfTouchX;
    lastPositionOfY = currentPositionOfTouchY;

  }
