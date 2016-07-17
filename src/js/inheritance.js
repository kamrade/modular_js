// prototypal inheritance

var human = {
	species: "human",
	create: function(values) {
		var instance = Object.create(this);
		Object.keys(values).forEach(function(key) {
			instance[key] = values[key];
		});
		return instance;
	},
	saySpecies: function() {
		console.log( this.species );
	},
	sayName: function() {
		console.log( this.name );
	}
};

var musician = human.create({
	species: "musican",
	playInstrument: function() {
		console.log( "plays " + this.instrument );
	}
});

var will = musician.create({
	name: "Will",
	instrument: "Guitar"
});

will.playInstrument();
will.sayName();
will.saySpecies();



// var will = human.create("Will");
// var bob = human.create("Bob");
// var musician = Object.create(human);
// musician.playInstrument = function() {
// 	console.log( 'plays ' + this.instrument );
// };

// var will = Object.create(musician);
// will.name = "Will";
// will.instrument = "Drums";

// will.saySpecies();
// will.playInstrument();

// human.species = "Homo sapiens"

// will.saySpecies();