class scene1 extends Phaser.Scene {
  constructor(){
    super("Pong");
  }
  
  preload() {
    //None Lolz
  }
  
  create() {
    //Create A Player And Make It Drag
    this.player = this.add.rectangle(config.width /2, config.height /2 + 400, 120, 30, 0xf00000);
    this.physics.add.existing(this.player, true)
    
    this.player.setInteractive();
    this.input.setDraggable(this.player);
    this.input.on("drag", (pointer, object, dragX, dragY) => {
      object.x = dragX;
      
    });
    
     //Create A circle Then Add The Physics
    this.circle = this.add.circle(config.width /2 , config.height / 2, 50, 0xf00000);
     this.physics.add.existing(this.circle)
    this.circle.body.velocity.y = 200
    this.circle.body.setBounce(2, 2)
    this.physics.add.collider(this.player, this.circle)
  }
  
  update() {
    
  }
}