function linearGrad(sX,sY,eX,eY,colorStart,colorEnd){
    let gradient=drawingContext.createLinearGradient(sX,sY,eX,eY);
            gradient.addColorStop(0,colorStart);
            gradient.addColorStop(1,colorEnd);
            drawingContext.fillStyle=gradient;
}
function RadialGrad(sX,sY,sR,eX,eY,eR,colorStart,colorEnd){
    let gradient=drawingContext.createRadialGradient(sX,sY,sR,eX,eY,eR);
    gradient.addColorStop(0,colorStart);
    gradient.addColorStop(1,colorEnd);
    drawingContext.fillStyle=gradient;
}