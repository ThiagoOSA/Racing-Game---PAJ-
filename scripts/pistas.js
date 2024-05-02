class pista{
    constructor(points)
    {   this.points = points
    }

    draw()
	{	//context.strokeStyle = "rgba(0,0,0,0)";
		context.beginPath();
		context.moveTo(Math.round(this.points[0].x),Math.round(this.points[0].y));
		for (var i = 1; (i < this.points.length); i++) context.lineTo(Math.round(this.points[i].x),Math.round(this.points[i].y));
		context.closePath();
		context.stroke();
	}
}