class scene1 extends Phaser.Scene {
  constructor(){
    super("Pong");
  }
  
  preload() {
    //None Lolz
  }
  
  create() {
    //Create A Player And Second Player Then Make It Drag
    this.player = this.add.rectangle(config.width /2, config.height /2 + 400, 120, 30, 0xf00000);
    this.physics.add.existing(this.player);
    
    this.player.setInteractive();
    this.input.setDraggable(this.player);
    this.input.on("drag", (pointer, object, dragX, dragY) => {
      object.x = dragX;
      
    });
    this.player.body.setCollideWorldBounds(true);
    this.player.body.setImmovable(true);
    
    
    this.secondPlayer = this.add.rectangle(config.width /2, config.height /2 - 400, 120, 30, 0xf00000);
    this.physics.add.existing(this.secondPlayer);
    
    this.secondPlayer.setInteractive();
    this.input.setDraggable(this.secondPlayer);
    this.input.on("drag", (pointer, object, dragX, dragY) => {
      object.x = dragX;
      
    });
    this.secondPlayer.body.setCollideWorldBounds(true);
    this.secondPlayer.body.setImmovable(true);
    
     //Create A circle Then Add The Physics
    this.circle = this.add.circle(config.width /2 , 640, 50, 0xf00000);
     this.physics.add.existing(this.circle);
    
    this.circle.body.velocity.y = 500;
    this.circle.body.setBounce(1, 1);
    this.circle.body.setCollideWorldBounds(true);
    
     //Make It Callback If The Objects Got Touched
    this.physics.add.collider(this.player, this.circle, (object1, object2) => {
      object2.body.velocity.x += 100;
      
    });
    this.physics.add.collider(this.secondPlayer, this.circle, (object1, object2) => {
      object2.body.velocity.x += 100;
      
    });
    
    //If Y lower then 0 the balls will got destroyed
    
  }
  
  update() {
    
    
  }
}