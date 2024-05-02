class player
{   constructor(src,x,y,width,heigth,keys)
    {   this.x = x
        this.y = y
        this.width = width
        this.heigth = heigth
        this.angle = 0
        this.forceAngle = 0
        this.speed = 0
        this.friction = 0.1
        this.acceleration = 0.2
        this.image = new Image()
        this.image.src = src
        this.hitbox = new hitbox([new point(this.x+12, this.y+this.width/3),
                                  new point(this.x+this.heigth-12, this.y+this.width/3),
                                  new point(this.x+this.heigth-12, this.y+this.width/3+27),
                                  new point(this.x+12, this.y+this.width/3+27)
                                ])
        this.keys = keys
    }

    keyboard(teclas)
    {
        if(teclas[this.keys[0]])
        {  
            if(this.speed > -10){
                this.speed  -= this.acceleration
                this.speed = Number(this.speed.toFixed(2))
            }
        }
        if(teclas[this.keys[1]])
        {   
            if(this.speed  < 5){
                this.speed  += this.acceleration
                this.speed = Number(this.speed.toFixed(2))
            }
        }
        if(teclas[this.keys[2]])
        {this.rotate(-this.speed ,pistas)
        }
        if(teclas[this.keys[3]])
        {this.rotate(this.speed ,pistas)
        }
    }

    move(speed,pistas)
    {   var dx = speed*Math.cos(Math.PI*this.forceAngle/180)
        var dy = speed*Math.sin(Math.PI*this.forceAngle/180)
        var c = false;
        this.hitbox.translate(dx,dy)
        for(var i = 0; i < pistas.length; i++)
        {   if(this.hitbox.collide(pistas[i].points))
            {   c = true
                this.forceAngle = this.angle
                break
            }
        }
        if(c)
        {   
            this.hitbox.translate(-dx,-dy)
            this.speed = 0
        }
        else{
            this.x += dx;
            this.y += dy;
        }
    
    }

    rotate(speed, other)
    {   var c = false
        this.hitbox.rotate(this.hitbox.center(), -speed)
        for(var i=0; i < other.length; i++)
        {   if(this.hitbox.collide(other[i].points))
            {   c = true;
                break
            }

        }
        if(!c)
        {
            this.angle += speed
            this.angle = Number(this.angle.toFixed(2))
        }
        else{
            this.hitbox.rotate(this.hitbox.center(),this.angle)
        }
    }

    draw()
    {
        context.save();
		context.translate(this.x+this.width/2,this.y+this.heigth/2);
		context.rotate(Math.PI*this.angle/180);
		context.drawImage(this.image,-this.width/2,-this.heigth/2,this.width,this.heigth);
		context.restore();
		//this.hitbox.draw();
        //console.log(this.angle)
        //console.log(this.forceAngle)
        //console.log(this.speed)

        if(this.forceAngle > this.angle )
        {
            this.forceAngle += this.speed/2
            this.forceAngle = Number(this.forceAngle.toFixed(2))
        }
        if(this.forceAngle < this.angle)
        {   
            this.forceAngle -= this.speed/2
            this.forceAngle = Number(this.forceAngle.toFixed(2))
        }
        if(teclas[83])
        {
            this.forceAngle = this.angle
        }

        this.move(this.speed,pistas)
        if(this.speed != 0 && !teclas[87] && !teclas[83])
        {   this.speed += this.friction*(Math.sign(this.speed*-1))
            this.speed = Number(this.speed.toFixed(2))
        }

    }
}