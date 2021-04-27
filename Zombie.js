class Zombie{
    constructor(x,y){
        var option = {
        restiution: 0.5,
        density: 1,
        friction: 0.5
        }
        this.body = Bodies.rectangle(x,y,200,400,option);
        this.width = 200;
        this.height = 400;
        this.image = loadImage("Js/zombies.png");
        World.add(world,this.body);


    }


    display () {
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}