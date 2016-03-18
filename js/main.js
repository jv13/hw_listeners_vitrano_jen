var count = 0;
var heading = document.getElementById( 'mainHeader' );

heading.addEventListener( 'click', function( ) {
	var myElement = document.createElement( 'paragraph' );
	count++;
	myElement.innerHTML = '<p>This click is number </p>' + count ;
	document.getElementById( 'container' ).appendChild( myElement );
} );
