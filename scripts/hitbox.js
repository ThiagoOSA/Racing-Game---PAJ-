class hitbox{
    constructor(points)
    {   this.points = points
    }

    translate(dx,dy)
    {   for(let point of this.points)
        {   point.translate(dx, dy)
        }
    }

    rotate(center,speed)
	{	for (var i = 0; (i < this.points.length); i++)
        { this.points[i].rotate(center,speed);
        }
	}

	center()
	{	let center = new point(0, 0);
		for (let point of this.points)
		{	center.x += point.x;
			center.y += point.y;
		}
		center.x /= this.points.length;
		center.y /= this.points.length;
		return(center);
	}

    draw()
	{	context.strokeStyle = "red";
		context.beginPath();
		context.moveTo(Math.round(this.points[0].x),Math.round(this.points[0].y));
		for (var i = 1; (i < this.points.length); i++) context.lineTo(Math.round(this.points[i].x),Math.round(this.points[i].y));
		context.closePath();
		context.stroke();
	}

    collide(other)
    {   for(let i=0; i < this.points.length; i++)
        {   let x1 = this.points[i].x;
            let y1 = this.points[i].y;
            let x2 = this.points[(i+1)%this.points.length].x;
            let y2 = this.points[(i+1)%this.points.length].y;

            for(let n=0; n< other.length; n++)
            {   let x3 = other[n].x;
                let y3 = other[n].y;
                let x4 = other[(n+1)%other.length].x;
                let y4 = other[(n+1)%other.length].y;

                let distance = x1-x3

                let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))
                let uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))

                if(uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1)
                {   
                    return true
                }
            }
        }
        return false
    }
}