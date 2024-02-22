


class Player extends Component {

    start(){
        this.rb = this.getComponent(DynamicBoxCollider);
    }

    update() {
        if (Input.keyJustPressed("w")){
            this.rb.vel.y = -14
        }
        if (Input.keyPressed("a")){
            this.rb.vel.x = -2
        }
        else if (Input.keyPressed("d")){
            this.rb.vel.x = +2
        }
        else{
            this.rb.vel.x = 0
        }
    }
}

function setup() {
    
    size(800, 600);

    new GameObject(width / 2, height - 5)
    .addComponent(new RectRenderer(width, 10, function() {
        noStroke(0);
        fill(0, 255, 0);
    }))
    .addComponent(new BoxCollider(width, 10))

    
    
    
    new GameObject(Math.random() * width, 50)
    .addComponent(new RectRenderer(50, 50, function() {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new DynamicBoxCollider(50, 50))
    .addComponent(new Player())







}

function draw() {
    background(51);
}