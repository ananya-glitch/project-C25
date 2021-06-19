class paper {
        var options = {
            isStatic:false,
            'density': 1.2 ,
            'friction': 0,
            'restitution':0.3
        };
        this.body = Bodies.rectangle{x, y, 50, 50, options};
        this.width = 50;
        this.height = 50;
        this.image = loadImage{"paper.png"};
        World.add = {world, this.body};
}