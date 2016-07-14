var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );

// -------------------------------------------------------------

var people = [];
var template = $('#peopleTemplate').html();

$('#peopleModule').find('button').on('click', function() {
	if ($('#peopleModule').find('input').val() !== ''){
		
		people.push($('#peopleModule').find('input').val());
		$('#peopleModule').find('input').val('');
		
		var data = {
			people: people
		};

		$('#peopleModule').find('ul').html(Mustache.render(template, data));	
	}
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
	
	var $remove = $(e.target).closest('li');
	var i = $('#peopleModule').find('ul').find('li').index($remove);

	$remove.remove();
	people.splice(i, 1);
});