class Iron{
	constructor(x,y,w,h)
	{
		var options = {
		'density':10,
		'friction': 0.5,
		'restitution':0.00005	
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rectMode(CENTER)
            rect(0,0,this.w,this.h)
			pop()
	}

}