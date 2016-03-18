var firstName = document.getElementById( 'firstName' );
var lastName = document.getElementById( 'lastName' );
var emailBox = document.getElementById( 'emailBox' );
var messageBox = document.getElementById( 'messageBox' );

document.addEventListener( 'submit', function( event ) {
  event.preventDefault();
	console.log( 'The firstName is: ' + firstName.value );
	console.log( 'The lastName is: ' + lastName.value );
	console.log( 'The email is: ' + emailBox.value );
	console.log( 'The message is: ' + messageBox.value );
} );
