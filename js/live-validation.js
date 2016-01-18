$(document).ready(function(){

	//Listen to username input field 
	$('#username').blur(validateUsername);
	
	$('#email').blur(validateEmail);

});

//Function to validate the username 

function validateUsername() {

	//save the username into a variable
	var username = $(this).val();

	// Check the length of the username
	if( username.length < 5 ) {
		//Too Short
		$('#username-message').html('Must be more than 5 characters');
		return;
	} else if ( username.length > 20 )
	 {
		//Too long
		$('#username-message').html('Must be les than 20 characters');
		return;
	} else {
		//good to go
		$('#username-messsage').html('');
	}

	//Prepare data for the server 

	var dataForServer = {
		username:username
	}

	//Send the username to the server to be checked 
	$.ajax({

		type: 'post', 
		url: 'api/validate-username.php',
		data: dataForServer,
		success: function(responseFromServer) {
			$('#username-message').html(responseFromServer);
		},
		error: function() {
			alert('Something went wrong');
		}
	});
}

	function validateEmail() {

	//save the username into a variable
	var email = $(this).val();

	// Check the length of the username
	if( email.length < 7 ) {
		//Too Short
		$('#email-message').html('Email is too short');
		return;
	} else if ( email.length > 250 )
	 {
		//Too long
		$('#email-message').html('Email is too long');
		return;
	} else {
		//good to go
		$('#email-messsage').html('');
	}

	//Prepare data for the server 

	var dataForServer = {
		email:email
	}

	//Send the username to the server to be checked 
	$.ajax({

		type: 'post', 
		url: 'api/validate-email.php',
		data: dataForServer,
		success: function(responseFromServer) {
			$('#email-message').html(responseFromServer);
		},
		error: function() {
			alert('Something went wrong');
		}
	});
}







