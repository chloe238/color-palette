canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
image = ctx.createImageData(200, 200);
data = image.data;
ctx.fillStyle = "#FF00FF";
ctx.fillRect(20, 10, 150, 100);
