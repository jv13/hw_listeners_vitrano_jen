var img = document.getElementById( 'funfact' );
var info = document.getElementById( 'funfact' );
var heading = document.getElementById( 'mk' );

//Listen for events on the button
//When the button is clicked create a paragraph and image and adds the hidden text and image.
img.addEventListener( 'click', function( event ) {
	var info = document.createElement( 'paragraph' );
  info.innerHTML = '<p>Fun Fact: I worked in Magic Kingdom at the Emporium from August 2011 - May 2012!</p>';
	document.getElementById( 'container' ).appendChild( info );

	var img = document.createElement( 'img' );
  img.setAttribute( 'src', 'img/night.jpg', 'fun' );
	document.getElementById( 'container' ).appendChild( img );
} );

//Listen for event on the h2
//When the h2 is clicked display the new text
heading.addEventListener( 'click', function() {
	heading.innerHTML = 'Magic Kingom is my favorite park!';
} );
