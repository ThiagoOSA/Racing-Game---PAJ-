class point
{   constructor(x,y)
    {   this.x = x
        this.y = y
    }

    translate(dx,dy)
    {   this.x += dx;
        this.y += dy;
    }

    rotate(center,angle)
    {   angle *= Math.PI/180;
		let x = center.x+(this.x-center.x)*Math.cos(angle)+(this.y-center.y)*Math.sin(angle)
		let y = center.y-(this.x-center.x)*Math.sin(angle)+(this.y-center.y)*Math.cos(angle)
		this.x = x;
		this.y = y;
    }
}