var img = document.getElementById( 'funfact' );
var info = document.getElementById( 'funfact' );
var heading = document.getElementById( 'mk' );
var i = 0;

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
//When the user places their mous over the h2, new text displays after the html in the h2.
heading.addEventListener( 'mouseover', function() {
		document.getElementById( 'mk' ).innerHTML = 'Magic Kingdom is my favorite park!';
	} );

//Listen for event on the resize of the screen
//When the user resizes the screen a paragraph appears after the content and lets the user know how many times they have resized the screen.
window.addEventListener( 'resize', function() {
	var resize = i += 1;
	document.getElementById( 'times' ).innerHTML = 'This window was resized ' + resize + ' times!';
} );
