var i = 0;
var heading = document.getElementById( 'mainHeader' );

heading.addEventListener( 'click', function( event ) {
	var myElement = document.createElement( 'paragraph' );
	var count = i += 1;
	myElement.innerHTML = '<p>This is click number </p>' + count;
	document.getElementById( 'goesup' ).appendChild( myElement );
} );

// document.getElementById( 'mainHeader' ).addEventListener( 'click', function( event ) {
//
//     // display the current click count inside the clicked div
// 		var myElement = document.createElement( 'paragraph' );
// 		document.getElementById( 'goesup' ).appendChild( myElement );
//     event.target.innerHTML = 'This is click number ' + event.detail;
//   }, false );
