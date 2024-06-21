const config = {
  type: Phaser.AUTO,
        width: 720,
        height: 1280,
        scale : {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene : [scene1],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug : false
            },
            
        },
        antialias : false,
};
const game = new Phaser.Game(config);