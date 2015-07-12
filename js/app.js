// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x || 50;
    this.y = y || Math.floor((Math.random() * 200) + 1);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    Enemy.call(this, 100, 400);
    this.sprite = 'images/char-boy.png';
}
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.handleInput = function(move){
    switch(move){
        case 'left':
            this.x = this.x >100 ? this.x - 100 :  0;
            break;
        case 'right':
            this.x = this.x < 400 ? this.x + 100 : 500;
            break;
        case 'up':
            this.y = this.y >0 ? this.y - 100 :  -100;
            break;
        case 'down':
            this.y = this.y < 300 ? this.y + 100 : 400;
            break;
        default: break;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
while(allEnemies.length < 4){
    allEnemies.push(new Enemy());
}

setInterval(function(){
    allEnemies.forEach(function(item, i){
        item.x += Math.floor((Math.random() * 4)) * 80;
        if(item.x > 400){
            item.x = 1;
            item.y = Math.floor((Math.random() * 3)+1)*70;
        }
        item.update(10)
    })
}, 100)
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
