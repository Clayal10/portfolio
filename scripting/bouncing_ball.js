const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


function background(){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#d1dee4";
    ctx.fill();
    ctx.closePath();
}

class Ball{
    constructor(x, y, radius, xd, yd){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xD = xd;
        this.yD = yd;
    }
    draw_ball(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#396172AA";
        ctx.fill();
        ctx.closePath();
    }
    update_ball(){
        this.x += this.xD;
        this.y += this.yD;
        if(this.y - this.radius <= 0 || this.y + this.radius >= canvas.height){
            this.yD = -this.yD;
        }
        if(this.x - this.radius <= 0 || this.x + this.radius >= canvas.width){
            this.xD = -this.xD;
        }
    }

}

var ball = new Ball(canvas.width/2, canvas.height/2, 5, 1, 1);


function draw(){
    background();
    ball.draw_ball();
    ball.update_ball();
}
const interval = setInterval(draw, 20);