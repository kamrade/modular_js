var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );

// -------------------------------------------------------------

var people = (function(){

	var people = ['Will', 'Steve'];

	// cache Dom
	var $el = $('#peopleModule');
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $('#peopleTemplate').html();

	// bind events
	$button.on('click', addPerson);
	$ul.delegate('i.del', 'click', deletePerson);

	_render();

	function _render() {
		$ul.html( Mustache.render(template, { people: people }) );
		events.emit('peopleChanged', people.length);
	}

	function addPerson(value) {
		var name = (typeof value === 'string') ? value : $input.val();
		people.push( name );
		_render();
		$input.val('');
	}

	function deletePerson(event) {
		var i;
		if(typeof event === 'number' ){
			i = event;
		} else {
			var $remove = $(event.target).closest('li');
			i = $ul.find('li').index($remove);			
		}
		people.splice(i, 1);
		_render();
	}

	return {
		addPerson: addPerson,
		deletePerson: deletePerson
	};

})();