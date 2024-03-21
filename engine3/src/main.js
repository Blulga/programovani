
class Player extends Component {

    start() {
        this.rb = this.getComponent(DynamicBoxCollider);

        this.rb.onCollisionEnter = (col) =
        
    }

    update() {
        if(Input.keyJustPressed(' ')) {
            this.rb.vel.y = -10  
        }

        if(Input.keyPressed('D')) {
            this.rb.vel.x = 10  
        }
        else if(Input.keyPressed('d')) {
            this.rb.vel.x = 5  
        }
        else if(Input.keyPressed('A')) {
            this.rb.vel.x = -10  
        }
        else if(Input.keyPressed('a')) {
            this.rb.vel.x = -5
        }
        else this.rb.vel.x = 0
       
        
    }
}




function setup() {
    size(1400, 700);

    new GameObject(width / 2, height - 5)
    .addComponent(new RectRenderer(width, 10, () => {
        noStroke(0);
        fill(0, 255, 0);
    }))
    .addComponent(new BoxCollider(width, 10))

    new GameObject(width / 2, height / 2)
    .addComponent(new Player())
    .addComponent(new RectRenderer(100, 50))
    .addComponent(new DynamicBoxCollider(100, 50))

    new GameObject(width / 2, height / 2)
    .addComponent(new RectRenderer(100, 50))
    .addComponent(new BoxCollider(100, 50))
}

function draw() {
    background(51);
}