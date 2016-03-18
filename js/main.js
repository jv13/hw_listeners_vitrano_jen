var img = document.getElementById( 'funfact' );
var info = document.getElementById( 'funfact' );

//Listen for events on the button, when the button is clicked create a paragraph and add the hidden text and image.
img.addEventListener( 'click', function( event ) {
	var info = document.createElement( 'paragraph' );
  info.innerHTML = '<p>Fun Fact: I worked in Magic Kingdom at the Emporium from August 2011 - May 2012</p>';
	document.getElementById( 'container' ).appendChild( info );

	var img = document.createElement( 'img' );
  img.setAttribute( 'src', 'img/night.jpg', 'fun' );
	document.getElementById( 'container' ).appendChild( img );
} );
