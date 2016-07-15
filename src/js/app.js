var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );

// -------------------------------------------------------------

(function(){
	var people = {

		people: ["Will", "Bill"],

		init: function() {
			this.cacheDom();
			this.render();
			this.bindEvents();
		},
		cacheDom: function() {
			this.$el = $('#peopleModule');
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = $('#peopleTemplate').html();
		},
		render: function() {
			// Just example what Mustache is
			// var test = Mustache.render( "Hi, {{name}}", {name: "Denis"} );
			// console.log(test);
			var data = {
				people: this.people
			};
			this.$ul.html( Mustache.render(this.template, data) );
		},
		bindEvents: function() {
			this.$button.on('click', this.addPerson.bind(this));
			this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
		},
		addPerson: function() {
			this.people.push( this.$input.val() );
			this.render();
			this.$input.val('');
		},
		deletePerson: function(event) {
			var $remove = $(event.target).closest('li');
			var i = this.$ul.find('li').index($remove);
			this.people.splice(i, 1);
			this.render();
		}
	};

	people.init();

})();

// delegate
// index
