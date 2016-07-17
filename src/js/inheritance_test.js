function Animal(name) {
	this.name = name;
	this.speed = 0;
}

Animal.prototype.run = function(speed) {
	this.speed = speed || 0;
	console.log(this.name + ' run with speed ' + this.speed);
};

Animal.prototype.stop = function() {
	this.speed = 0;
	console.log(this.name + ' stopped');
};

function Rabbit(name) {
	this.name = name;
	this.speed = 0;
};

Rabbit.prototype = Object.create( Animal.prototype );
// Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.jump = function() {
	this.speed++;
	console.log( this.name + ' jumping' );
};

var rabbit = new Rabbit('Rabby');