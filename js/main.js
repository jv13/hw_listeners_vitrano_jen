var i = 0;
var heading = document.getElementById( 'mainHeader' );

heading.addEventListener( 'click', function() {
		var myElement = document.createElement( 'p' );
		var count = i += 1;
		myElement.innerHTML = 'This is click number ' + count;
		document.getElementById( 'container' ).appendChild( myElement );
  } );
