class Drops{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.1,
			density:12
		}
		this.rain=Bodies.circle(x,y,5,options)
		World.add(world, this.body);
        
	}
	display()
	{
			
			var rainpos=this.body.position;		
			push()
			translate(rainpos.x, rainpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//ellipse(rainpos.x,rainpos.y,5);
			pop()
			
	}

}
  