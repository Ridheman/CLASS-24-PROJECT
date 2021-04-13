class Stone{
	constructor(x,y,w,h)
	{  
		var options ={
			restitution: 0.8,
			friction: 0.9,
			density:12
		}

	// assign options to the rubber ball
		this.x=x;
		this.y=y;
        this.w=w;
        this.h=h; 
		this.body=Bodies.rectangle(this.x, this.y, w, h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
            translate(rubberpos.x, rubberpos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("purple");
			fill("yellow");
			//draw the ellipse here to display the rubber ball
            rect(0,0, this.w, this.h)
            pop()
    }
}