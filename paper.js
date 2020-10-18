class Paper   {
    constructor(x, y)   {
        var options = {
            'isStatic':false,
            'friction':2.7,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display()   {
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 70, 70);
        pop();
    }
}