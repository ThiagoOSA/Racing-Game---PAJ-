class hud
{   constructor(players)
    {   this.players = players
    }

    draw()
    {       context.beginPath();
            context.strokeStyle = "rgb(255,0,0)"
            context.rect(10, 20, 102, 30);
            context.stroke();
            let grad=context.createLinearGradient(10,0, 140,0);
            grad.addColorStop(0, "yellow");
            grad.addColorStop(1, "red");
            context.fillStyle = grad
            context.fillRect(11, 21, Math.abs(this.players[0].speed)*10, 28);
            context.closePath();

            context.beginPath();
            context.strokeStyle = "rgb(0,0,255)"
            context.rect(1250, 20, 102, 30);
            context.stroke();
            grad=context.createLinearGradient(1250,0, 1380,0);
            grad.addColorStop(0, "yellow");
            grad.addColorStop(1, "blue");
            context.fillStyle = grad
            context.fillRect(1251, 21, Math.abs(this.players[1].speed)*10, 28);
            context.closePath();
    }
}