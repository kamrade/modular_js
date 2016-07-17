// classical inheritance

function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create( superCtor.prototype, {
		constructor: {
			value: ctor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
};

var Person = function(name) {
	this.name = name;
};

Person.prototype.sayName = function() {
	console.log("Hi, my name is " + this.name);
};

var john = new Person('John');
var bobby = new Person('Bobby');

john.sayName();
bobby.sayName();

var Musician = function(name, instrument) {
	Musician.super_.call(this, name);
	this.instrument = instrument;
};

inherits( Musician, Person );

Musician.prototype.getInstrument = function() {
	console.log( this.instrument );
};

Musician.prototype.shoutName = function() {
	console.log("My name is " + this.name + "!!!");
};

var julia = new Musician('Julia', 'trombone');
julia.sayName();
julia.getInstrument();
julia.shoutName();